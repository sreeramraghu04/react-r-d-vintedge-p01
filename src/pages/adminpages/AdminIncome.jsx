import React from "react";
import { Link } from "react-router-dom";
import { cars } from "../../data/carsData";

export default function AdminIncome() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">
        Income Reference
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-black/40 p-4 rounded-2xl border border-purple-700 shadow-lg hover:scale-105 transition-all"
          >
            <img
              src={car.image}
              alt={car.name}
              className="rounded-xl mb-3 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-bold text-purple-300">{car.name}</h3>
            <p className="text-gray-400">{car.range}</p>
            <p className="text-green-400 font-semibold">
              Income: {car.income || "$0"}
            </p>
            <Link
              to={`${car.id}`}
              className="inline-block mt-3 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all"
            >
              View Income Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
