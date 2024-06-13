import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CarFiltersOption = ({ carsList }) => { // Destructure carsList from props
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    if (Array.isArray(carsList) && carsList.length > 0) {
      filterCarlist();
    }
  }, [carsList]); // Watch for changes in carsList

  const filterCarlist = () => {
    const brandSet = new Set();
    carsList.forEach((element) => {
      brandSet.add(element.carBrand); // Assuming element has a carBrand property
    });
    console.log(Array.from(brandSet)); // Logging the array of unique car brands
    setBrandList(Array.from(brandSet));
  };

  return (
    <div className="w-full mt-20 flex justify-between items-center">
      <div className="mt-40">
        <h1 className="text-4xl font-bold">Cars Catalog</h1>
        <h3 className="text-gray-600">Explore our cars you might like</h3>
      </div>
      <div className="md:flex sm:flex-col-reverse">
        <Select>
          <SelectTrigger className="w-[180px] font-semibold">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="min-to-max">Min to Max</SelectItem>
            <SelectItem value="max-to-min">Max to Min</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px] font-semibold mt-2">
            <SelectValue placeholder="Manufacturer" />
          </SelectTrigger>
          <SelectContent>
            {brandList.map((brand, index) => (
              <SelectItem key={index} value={brand}>
                {brand}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CarFiltersOption;
