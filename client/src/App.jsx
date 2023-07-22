import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  AddProduct,
  CheckProducts,
  Contact,
  ScanShipment,
} from "./pages";
import { Navbar } from "./components";
const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... min-h-screen flex flex-row">
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/CheckProducts" element={<CheckProducts />} />
          <Route path="/ScanShipment" element={<ScanShipment />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
