"use client";

import React from "react";
import Dropdown from "./Dropdown";
import { useState } from "react";

const MainSection = () => {
  const profileOptions = ["Sales Manager", "Dept Manager", "Area Manager"];

  const catergoryOptions = ["East", "West", "North", "South"];

  const [yearNQuarter, setYearNquarter] = useState({ year: "", quarter: "" });

  const [bracket, setBracket] = useState([
    { max: "0", min: "0.3", rate: "0" },
    { max: "0.3", min: "0.5", rate: "0.3" },
  ]);
  const handleChnage = (e) => {
    const { name, value } = e.target;
    setYearNquarter((prev) => ({ ...prev, [name]: value }));
  };

  const handleBracketInput = (index, e) => {
    const { name, value } = e.target;
    if (value < 0 || value > 10) {
      alert("Value must be between 0 and 10");
      return;
    }
    const newBracket = [...bracket];
    newBracket[index] = { ...newBracket[index], [name]: value };
    setBracket(newBracket);
  };

  const handleAddField = () => {
    setBracket((prev) => [...prev, { max: "", min: "", rate: "" }]);
  };

  const handleRemoveField = (index) => {
    const newBracket = bracket.filter((_, i) => i !== index);
    setBracket(newBracket);
  };

  const handleSubmit = (e) => {
    alert(" Your information is saved successfully");
  };
  return (
    <div className="bg-white rounded-2xl h-full lg:pb-16   ">
      <h1 className="text-base font-bold text-center md:text-left pl-9 py-4 lg:text-xl">
        Sales Incentive Calculator
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" -green-500 w-[80%] text-xs m-auto "
      >
        <div className=" -red-500 flex flex-col gap-2 m-auto ">
          <div className=" -red-500">
            <label htmlFor="">
              Profile <span className="text-red-500">*</span>
              <Dropdown arr={profileOptions} />
            </label>
          </div>
          {/* year n quarter */}

          <div className="  -red-500 flex flex-col gap-2 md:flex-row md:gap-5">
            <div className="  -green-400 lg:w-[43%] ">
              <label htmlFor="">
                Year <span className="text-red-500">*</span>
                <input
                  className=" w-[90%] p-2 rounded-lg block bg-primaryGray outline-none md:w-full md:p-4"
                  type="text"
                  placeholder="2024"
                  name="year"
                  value={yearNQuarter.year}
                  onChange={(e) => handleChnage(e)}
                  required
                />
              </label>
            </div>

            <div className="  -green-400 lg:w-[43%]">
              <label htmlFor="">
                Quarter <span className="text-red-500">*</span>
                <input
                  className=" w-[90%] p-2 rounded-lg block bg-primaryGray outline-none md:w-full md:p-4"
                  type="text"
                  placeholder="Q4"
                  name="quarter"
                  value={yearNQuarter.quarter}
                  onChange={(e) => handleChnage(e)}
                  required
                />
              </label>
            </div>
          </div>

          <div className="mb-2">
            <label htmlFor="">
              Sales Quarter <span className="text-red-500">*</span>
              <Dropdown arr={catergoryOptions} />
            </label>
          </div>
        </div>

        <div className=" -red-500   ">
          {bracket.map((sectn, index) => (
            <div
              className=" -green-500 flex flex-col md:flex-row md:items-center md:gap-2"
              key={index}
            >
              <div className=" flex flex-col gap-2 -pink-600 md:flex md:flex-row md:items-center md:gap-4 lg:w-[90%]  ">
                <div className="">
                  <label htmlFor="">
                    Max Bracket(CRS) <span className="text-red-500">*</span>
                    <div className=" bg-primaryGray flex p-2 rounded-lg w-[88%] md:w-[99%] md:p-3 lg:w-[15.7vw] ">
                      &#8377;
                      <input
                        className="outline-none px-2 bg-primaryGray  w-full m"
                        type="text"
                        name="max"
                        value={sectn.max}
                        onChange={(e) => handleBracketInput(index, e)}
                        required
                      />
                    </div>
                  </label>
                </div>
                {/* min */}
                <div>
                  <label htmlFor="">
                    Min Bracket(CRS) <span className="text-red-500">*</span>
                    <div className=" bg-primaryGray flex p-2 rounded-lg w-[88%] md:w-[99%] md:p-3 lg:w-[15.7vw]">
                      &#8377;
                      <input
                        className="outline-none px-2 bg-primaryGray  w-full m"
                        type="text"
                        name="min"
                        value={sectn.min}
                        onChange={(e) => handleBracketInput(index, e)}
                        required
                      />
                    </div>
                  </label>
                </div>
                {/* rate */}
                <div>
                  <label htmlFor="">
                    Comission rate <span className="text-red-500">*</span>
                    <div className=" bg-primaryGray flex p-2 rounded-lg w-[88%] md:w-[99%] md:p-3 lg:w-[15.7vw] ">
                      <input
                        className=" outline-none px-2 bg-primaryGray w-full"
                        type="text"
                        name="rate"
                        value={sectn.rate}
                        onChange={(e) => handleBracketInput(index, e)}
                        required
                      />
                      &#37;
                    </div>
                  </label>
                </div>
              </div>
              {/* btn */}

              {index !== bracket.length - 1 && (
                <div className="  p-2">
                  <button
                    className=" w-24 text-white h-6  -primaryGreen bg-primaryGreen rounded-2xl md:w-7 md:h-7 lg:mt-5 "
                    onClick={() => handleRemoveField(index)}
                  >
                    -
                  </button>
                </div>
              )}

              {index === bracket.length - 1 && (
                <div className="  p-2">
                  <button
                    className=" w-24 text-white h-6  -primaryGreen bg-primaryGreen rounded-2xl md:w-7 md:h-7 lg:mt-5 "
                    onClick={() => handleAddField()}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="">
          <button className=" bg-primaryGreen w-[90%] p-2 rounded-lg text-white md:w-[25%] mt-2 lg:w-[20%] md:p-4 md:mt-4  ">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default MainSection;
