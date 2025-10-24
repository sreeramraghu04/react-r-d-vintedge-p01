import React from "react";
import { Link, useParams } from "react-router-dom";
import { cars } from "../../../data/carsData";

const AdminCarDetails = () => {
  const { id } = useParams();
  const car = cars.find((item) => Number(item.id) === Number(id));

  return (
    <div className="flex">
      <div className="p-10">
        <img src={car.image} alt={car.name} className="rounded-xl w-80 mb-6" />
        <h2 className="text-4xl font-bold text-purple-400 mb-2">{car.name}</h2>
        <p className="text-gray-300 mb-4">{car.description}</p>
        <div className="text-lg">
          <p>
            Price: <span className="text-green-400">{car.price}</span>
          </p>
          <p>Range: {car.range}</p>
          <p className="mb-5">Year: {car.year}</p>
        </div>
        <Link
          to=".."
          relative="path"
          className="inline-block mt-4 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all"
        >
          Back to Cars List
        </Link>
      </div>
      <div className="w-[700px] p-10">
        <h3 className="text-2xl font-semibold text-purple-400 mb-4">
          Details Information
        </h3>
        <ul className="text-gray-300 space-y-2">
          <li>Cars Details: {car.details}</li>
          <li>Restoration Cost: ₹3,00,000</li>
          <li>Tax & Registration: ₹75,000</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminCarDetails;
