import { cars } from "../data/carsData";
import CarCard from "../components/CarCard";

export default function Product() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">
        Available E-Cars
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}
