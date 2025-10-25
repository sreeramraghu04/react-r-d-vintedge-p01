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
