import React from "react";
import { Input } from "@/components/ui/input";

const SearchInput = () => {
  return (
    <div className="w-full mt-6">
      <h2 className="text-center text-[22px] mb-[2px] font-medium">Let's Search What you need.</h2>
      <div className="flex items-center justify-center mb-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>

        <Input type="text" placeholder="Location" className="w-15 ml-[2px]  text-gray-400 outline-none bg-transparent" />
        <Input type="date" placeholder="date" className="w-1/9 ml-2 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchInput;
