import React from "react";

const Dropdown = ({ arr }) => {
  return (
    <div>
      <select
        className=" w-[88.5%] p-2 rounded-lg bg-primaryGray outline-none cursor-pointer md:p-4"
        name=""
        id=""
      >
        {arr.map((optn, index) => (
          <option key={index} value="">
            {optn}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
