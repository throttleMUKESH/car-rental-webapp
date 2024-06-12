"use client";

import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import CarFiltersOption from "@/components/Home/CarFiltersOption";
import { useEffect, useState } from "react";
import { getCarsList } from "@/services/index";
import CarsList from "@/components/Home/CarsList";

export default function Home() {
  const [carsList, setCarsList] = useState<[]>([]);
  console.log(carsList);
  useEffect(() => {
    getCarsList_();
  }, []);
  const getCarsList_ = async () => {
    const result: any = await getCarsList();
    setCarsList(result?.carLists);
  };
  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarFiltersOption />
      <CarsList carsList={carsList} />
      
    </div>
  );
}
