import { useParams, Link } from "react-router-dom";
import { cars } from "../data/carsData";
import AdminCarLayout from "../components/AdminCarLayout";

export default function ProductDetails() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl text-red-400">Car not found!</h2>
        <Link to="/cars" className="text-purple-400 underline mt-4 block">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center p-8">
      <div className="mb-5">
      </div>
      <img src={car.image} alt={car.name} className="rounded-xl w-80 mb-6" />
      <h2 className="text-4xl font-bold text-purple-400 mb-2">{car.name}</h2>
      <p className="text-gray-300 mb-4">{car.description}</p>
      <div className="text-lg">
        <p>
          Price: <span className="text-green-400">{car.price}</span>
        </p>
        <p>Range: {car.range}</p>
        <p>Year: {car.year}</p>
      </div>
      <Link
        to=".."
        relative="path"
        className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg"
      >
        Back to Cars
      </Link>
    </div>
  );
}
