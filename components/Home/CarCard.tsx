import React, { useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { Button } from "../ui/button";
import Image from "next/image";

const CarCard = (props: any) => {
  const [car, setCar] = useState(props.car);
  return (
    <div className=" bg-white mt-12 rounded-xl shadow-md p-4 hover:bg-gray-200 hover:shadow-lg border border-transparent transition duration-300">
      <h2 className="text-[20px] font-medium mb-2">{car.name}</h2>
      <h2 className="text-[26px] font-semibold text-gray-600 mb-2">
        {car.carBrand}
      </h2>
      <span className="font-semibold">{car.price}$/day</span>
      <div className="icons flex justify-between">
        <div className="flex items-center">
          <GiSteeringWheel className="w-5 m-2" />
          <p>{car.carType}</p>
        </div>
        <div className="flex items-center">
          <BsFillFuelPumpFill className="w-t m-2" />
          <p>{car.carAvg} km/h</p>
        </div>
      </div>
      <Image
        src={car.image?.url}
        alt={car.name}
        width={220}
        height={200}
        className="w-[250px] rounded-xl h-[150px] mb-3 object-cover"
      />
      <Button>Rent Now</Button>
    </div>
  );
};

export default CarCard;
