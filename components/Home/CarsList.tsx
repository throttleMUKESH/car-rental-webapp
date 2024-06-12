import CarCard from "./CarCard";

const CarsList = (props: any) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-3 xl:grid-cols-4 ">
      {props.carsList.map((car: any) => (
        <div key={car.id}>
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
};

export default CarsList;
