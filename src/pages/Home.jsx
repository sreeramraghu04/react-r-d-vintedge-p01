import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
/* import { cars } from "../data/carsData";
import CarCard from "../components/CarCard"; */
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("type"));

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <Helmet>
        <title>home-vintedge</title>
      </Helmet>
      <h2 className="text-5xl font-extrabold mb-4 text-purple-400">
        Welcome to VintEdge⚡
      </h2>
      <p className="text-gray-400 max-w-2xl mb-8">
        Experience the past in motion. Explore legendary vintage cars —
        restored, refined, and reimagined for today.
      </p>
      <Link
        to="/cars"
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all"
      >
        Explore Cars
      </Link>
     {/*  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div> */}
    </div>
  );
}
