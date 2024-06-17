import Image from "next/image";

const Navbar = () => {
  const addOptions = ["Add", "Remove"];

  return (
    <div className=" -red-500 text-xs flex justify-between items-center p-2 md:p-4 ">
      <div className=" -blue-500 flex items-center gap-2 md:gap-5 md:pl-4 ">
        <Image src="/assets/1.jpg" alt="logo" width={40} height={40} />
        <select
          className="bg-black text-white rounded-lg p-1 lg:py-2"
          name=""
          id=""
        >
          {addOptions.map((optn, index) => (
            <option key={index} value="">
              {optn}
            </option>
          ))}
        </select>
      </div>

      <div className=" -blue-500 flex items-center gap-2">
        <Image
          src="/assets/avatar-3637425_640.png"
          alt="pic"
          width={30}
          height={30}
          className="rounded-full"
        />
        <div className="">
          <div className=" hidden md:block text-xs  ">Raman Bose</div>
          <div className=" hidden md:block text-xs font-bold ">Admin</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
