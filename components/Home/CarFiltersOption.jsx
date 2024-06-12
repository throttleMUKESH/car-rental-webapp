import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CarFiltersOption = () => {
  return (
    <div className="w-full mt-20 flex justify-between items-center">
      <div className="mt-40">
        <h1 className="text-4xl font-bold">Cars Catalog</h1>
        <h3 className="text-gray-600">Explore our cars you might like</h3>
      </div>
      <div className="md:flex sm:flex-col-reverse  ">
        <Select>
          <SelectTrigger className="w-[180px] font-semibold">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Min to Max</SelectItem>
            <SelectItem value="dark">Max to Min</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px] font-semibold  mt-2">
            <SelectValue placeholder="Manufatural" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Honda</SelectItem>
            <SelectItem value="dark">BMW</SelectItem>
            <SelectItem value="dark">Toyota</SelectItem>
            <SelectItem value="dark">Mahindra</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CarFiltersOption;
