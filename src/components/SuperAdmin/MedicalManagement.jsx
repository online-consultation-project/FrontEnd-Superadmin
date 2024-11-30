import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { SubCard } from "./doctor management/SubCard";
import { ImInfo } from "react-icons/im";
import PharmDashboard from "./doctor management/pharmacy management/PharmacyDashboard";
import PharmAddProducts from "./doctor management/pharmacy management/PharmacyAddProduct";
import PharmAllProducts from "./doctor management/pharmacy management/PharmacyAllproducts";
import PharmOrders from "./doctor management/pharmacy management/PharmacyOrders";

export const DashboardSection =()=>{
  return (
    <PharmDashboard/>
  )
}

export const AddProductSection = () => {
  return(
    <PharmAddProducts/>
  )
}

export const AllProductsSection = () =>{
  return(
    <PharmAllProducts/>
  )
}

export const OrdersSection = () => {
  return(
    <PharmOrders/>
  )
}


const MedicalComp = () => {
  const location = useLocation();
  const pharmacyMenu = [
    {
      image: <ImInfo className="text-2xl font-semibold" />,
      title: "Dashboard",
      path: "/pharmacy",
    },
    {
      image: <ImInfo className="text-2xl font-semibold" />,
      title: "Add Product",
      path: "/pharmacy/addproducts",
    },
    {
      image: <ImInfo className="text-2xl font-semibold" />,
      title: "Products",
      path: "/pharmacy/products",
    },
    {
      image: <ImInfo className="text-2xl font-semibold" />,
      title: "Manage Orders",
      path: "/pharmacy/manageorders",
    },
  ];

  return (
    <div className="w-full min-h-screen gap-4">
      <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">Pharmacy Management</h1>
      <div className="grid grid-cols-4 gap-3 max-sm:grid-cols-1 sm:max-md:grid-cols-2 md:max-xl:grid-cols-3 mb-7">
        {pharmacyMenu.map((value, index) => (
          <Link to={value.path} key={index}>
            <SubCard
              props={{ ...value }}
              className={`${
                value.path === location.pathname
                  ? "bg-gradient-to-r from-blue-500 to-blue-900 text-white"
                  : "bg-white py-4 px-6 rounded-md shadow-sm justify-center sm:max-lg:gap-4 sm:max-lg:px-3 shadow-slate-600 flex gap-8 text-blue-900"
              }`}
            />
          </Link>
        ))}
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default MedicalComp;
