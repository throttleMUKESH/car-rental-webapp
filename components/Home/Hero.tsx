import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-[40px] md:text-[60px] font-bold">
            Premium Car Rental in Your Area
          </h2>
          <h2 className="text-[20px] text-gray-600 mb-2">
            Book the selected car effortlessly, Pay for driving only, Book the
            Car Now.
          </h2>
          <Button>Explore Now</Button>
        </div>

        <div className="flex justify-center items-center object-center">
          <Image className="object-center" src="/supercar.png" alt="bmw" width={400} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
