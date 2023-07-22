import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuth = createContext();

export function UserAuthProvider({ children }) {
  const [user, setUser] = useState();

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <userAuth.Provider value={{ user, signUp, signIn, logout }}>
      {children}
    </userAuth.Provider>
  );
}

export const useUserAuth = () => {
  return useContext(userAuth);
};
