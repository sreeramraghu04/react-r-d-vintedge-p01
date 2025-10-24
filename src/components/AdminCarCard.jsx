import { Link } from "react-router-dom";

export default function AdminCarCard({ car }) {
  return (
    <div className="bg-black/40 p-4 rounded-2xl border border-purple-700 shadow-lg hover:scale-105 transition-all">
      <img
        src={car.image}
        alt={car.name}
        className="rounded-xl mb-3 w-full h-48 object-cover"
      />
      <h3 className="text-xl font-bold text-purple-300">{car.name}</h3>
      <p className="text-gray-400">{car.range}</p>
      <p className="text-green-400 font-semibold">{car.price}</p>
      <Link
        to={`${car.id}`}
        className="inline-block mt-3 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all"
      >
        View Details
      </Link>
    </div>
  );
}
