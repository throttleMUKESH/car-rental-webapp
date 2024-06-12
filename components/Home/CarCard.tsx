import React, { useState } from "react";
import Image from "next/image";

const CarCard = (props: any) => {
  const [car, setCar] = useState(props.car);
  return (
    <div className="group bg-white rounded-xl shadow-md p-4 hover:bg-gray-200 hover:shadow-lg border border-transparent transition duration-300">
      <h2 className="text-[20px] font-medium mb-2">{car.name}</h2>
      <h2 className="text-[26px] font-semibold text-gray-600 mb-2">{car.carBrand}</h2>
      <span className="font-semibold">{car.price}$/day</span>
      <Image
        src={car.image?.url}
        alt={car.name}
        width={220}
        height={200}
        className="w-[250px] rounded-xl h-[150px] mb-3 object-cover"
      />
    </div>
  );
};

export default CarCard;
