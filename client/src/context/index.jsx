import React, { useContext, createContext, useState } from "react";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x6Cf9662eF5F8ecbE7d07D765af02c3f717d56F65"
  );

  const address = useAddress();
  const connect = useMetamask();

  const { mutateAsync: newItem } = useContractWrite(contract, "newItem");
  const { mutateAsync: addState } = useContractWrite(contract, "addState");

  const createnewItem = async (form, latitude, longitude) => {
    const data = await newItem({
      args: [
        address,
        form.pname,
        form.category,
        form.certificate,
        form.description,
        latitude,
        longitude,
      ],
    });

    return data;
  };

  const addShimpmentInfo = async (num, form, latitude, longitude) => {
    const data = await addState({
      args: [num, form.description, latitude, longitude],
    });

    return data;
  };

  const Search = async (_productId) => {
    try {
      const data = await contract.call("searchProduct", [_productId]);
      console.info("contract call success");
      return data;
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        Search,
        createnewItem,
        addShimpmentInfo,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
