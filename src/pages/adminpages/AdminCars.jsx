import React from "react";
import { cars } from "../../data/carsData";
import AdminCarCard from "../../components/AdminCarCard";
import { Link } from "react-router-dom";

const AdminCars = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">
        Available Specs
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <Link to={`${car.id}`}>
            <AdminCarCard key={car.id} car={car} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminCars;
