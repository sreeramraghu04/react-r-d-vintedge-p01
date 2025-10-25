import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  return (
    <div className="bg-black/40 p-4 sm:p-6 rounded-2xl border border-purple-700 shadow-lg transform hover:scale-105 transition-all duration-300">
      <img
        src={car.image}
        alt={car.name}
        className="rounded-xl mb-3 w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
      />
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-300">
        {car.name}
      </h3>
      <p className="text-sm sm:text-base text-gray-400">{car.range}</p>
      <p className="text-sm sm:text-base text-green-400 font-semibold">
        {car.price}
      </p>
      <Link
        to={`/cars/${car.id}`}
        className="inline-block mt-3 px-4 py-2 sm:px-5 sm:py-2.5 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all text-sm sm:text-base font-medium"
      >
        View Details
      </Link>
    </div>
  );
}
