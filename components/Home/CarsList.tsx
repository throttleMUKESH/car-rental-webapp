import CarCard from "./CarCard";

const CarsList = (props: any) => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 xl:grid-cols-5">
      {props.carsList.map((car: any) => (
        <div key={car.id}>
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
};

export default CarsList;
