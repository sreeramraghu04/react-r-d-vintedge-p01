import React from "react";
import { useParams } from "react-router-dom";
import { cars } from "../../data/carsData";
import AdminCarNavbar from "../../components/AdminCarNavbar";

const AdminCarsSingle = () => {
  const { id } = useParams();
  // console.log(params);
  const car = cars.find((item) => Number(item.id) === Number(id));
  console.log(car);

  return (
    <div>
      <div>
        <AdminCarNavbar />
      </div>
    </div>
  );
};

export default AdminCarsSingle;
