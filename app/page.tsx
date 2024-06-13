"use client";

import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import CarFiltersOption from "@/components/Home/CarFiltersOption";
import { useEffect, useState } from "react";
import { getCarsList } from "@/services/index";
import CarsList from "@/components/Home/CarsList";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState([])
 console.log(carsOrgList)

  useEffect(() => {
    getCarsList_();
  }, []);
  const getCarsList_ = async () => {
    const result: any = await getCarsList();
    setCarsList(result?.carLists);
    setCarsOrgList(result?.carsLists)
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarFiltersOption carsList={carsOrgList} />
      <CarsList carsList={carsList} />
    </div>
  );
}
