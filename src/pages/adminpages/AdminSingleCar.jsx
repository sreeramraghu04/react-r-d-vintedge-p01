import React from "react";
import { useParams } from "react-router-dom";
import { cars } from "../../data/carsData";
import { Link } from "react-router-dom";
import AdminCarLayout from "../../components/AdminCarLayout";

const AdminSingleCar = () => {
  const { id } = useParams();
  // console.log(params);
  const car = cars.find((item) => Number(item.id) === Number(id));
  console.log(car);

  return (
    <div>
      <div>
        <AdminCarLayout />
      </div>
    </div>
  );
};

export default AdminSingleCar;

/* import React from "react";
import { useParams } from "react-router-dom";
import { cars } from "../../data/carsData";
import AdminCarLayout from "../../components/AdminCarLayout";

const AdminSingleCar = () => {
  const { id } = useParams();
  const car = cars.find((item) => Number(item.id) === Number(id));

  if (!car) {
    return (
      <div className="p-10 text-center text-red-400 text-2xl">
        Car not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex">
      <div>
        <AdminCarLayout />
      </div>
      <div className="border-r border-red-700 p-6 sticky top-0 h-screen flex flex-col items-center text-center">
        <img
          src={car.image}
          alt={car.name}
          className="rounded-xl w-64 h-48 object-cover mb-6 shadow-lg"
        />

        <h2 className="text-3xl font-bold text-purple-400 mb-2">{car.name}</h2>
        <p className="text-gray-400 mb-3 italic">
          {car.tagline || "Vintage elegance redefined"}
        </p>

        <div className="text-gray-300 text-sm mb-6">
          <p>Year: {car.year}</p>
          <p>Engine: {car.engine || "V8 Classic"}</p>
          <p>Mileage: {car.mileage || "25,000 km"}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminSingleCar;
 */

{/* <div className="flex min-h-screen">
      <div className="">
        <AdminCarLayout />
      </div>
      <div className="">
        <div className="flex flex-col items-center text-center p-10 w-[800px] mt-35">
          <img
            src={car.image}
            alt={car.name}
            className="rounded-xl w-80 mb-6"
          />
          <h2 className="text-4xl font-bold text-purple-400 mb-2">
            {car.name}
          </h2>
          <p className="text-gray-300 mb-4">{car.description}</p>
          <div className="text-lg">
            <p>
              Price: <span className="text-green-400">{car.price}</span>
            </p>
            <p>Range: {car.range}</p>
            <p className="mb-5">Year: {car.year}</p>
            <Link
              to=".."
              relative="path"
              className=" px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg"
            >
              Back to Cars
            </Link>
          </div>
        </div>
      </div>
    </div> */}