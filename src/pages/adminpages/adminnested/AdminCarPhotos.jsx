import React from "react";
import { useParams,Link } from "react-router-dom";
import { cars } from "../../../data/carsData";

const AdminCarPhotos = () => {
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
          Photo Gallery
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src={car.image}
            alt={car.name}
            className="rounded-xl w-64 h-48 object-cover mb-6 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminCarPhotos;
