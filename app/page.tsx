"use client"

import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/SearchInput";
import CarFiltersOption from "@/components/Home/CarFiltersOption"
import { useEffect } from "react";

export default function Home() {
 useEffect(() => {
   getCarsList();
 }, []) 
  const getCarsList = async () =>  {
    const result = await getCarsList()
    console.log(result);
  }
  return (
<div className="p-5 sm:px-10 md:px-20">
  <Hero/>
  <SearchInput/>
  <CarFiltersOption/>
</div>
  );
}
