import React from "react";
import Navbar from "./Navbar";
import MainSection from "./MainSection";

const SalesForm = () => {
  return (
    <div className=" w-screen min-h-screen bg-gray-200  ">
      <div className="border border-white shadow w-[70vw] m-auto rounded-2xl bg-primaryGray p-1  ">
        <Navbar />
        <MainSection />
      </div>
    </div>
  );
};

export default SalesForm;
