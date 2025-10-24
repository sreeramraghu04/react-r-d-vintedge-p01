import React from "react";
import { Helmet } from "react-helmet";
import AdminLayout from "../components/AdminLayout";

const Admin = () => {
  return (
    <div>
      <Helmet>
        <title>admin-vintedge</title>
      </Helmet>
      <div>
        <AdminLayout />
      </div>
    </div>
  );
};

export default Admin;
