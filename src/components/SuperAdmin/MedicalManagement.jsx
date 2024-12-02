import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { SubCard } from "./doctor management/SubCard";
import { ImInfo } from "react-icons/im";
import PharmDashboard from "./pharmacy management/PharmacyDashboard";
import PharmAddProducts from "./pharmacy management/PharmacyAddProduct";
import PharmAllProducts from "./pharmacy management/PharmacyAllproducts";
import PharmOrders from "./pharmacy management/PharmacyOrders";
import Sidebar from "../Sidebar/Sidebar";

export const DashboardSection = () => {
  return <PharmDashboard />;
};

export const AddProductSection = () => {
  return <PharmAddProducts />;
};

export const AllProductsSection = () => {
  return <PharmAllProducts />;
};

export const OrdersSection = () => {
  return <PharmOrders />;
};

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
    <div className="flex">
      <div className="fixed top-0 left-0 h-full sm:h-screen sm:w-72 w-full">
        <Sidebar />
      </div>
      <div className="p-6 bg-gray-200 sm:ml-72 overflow-x-scroll flex-1 ml-0 max-sm:mt-16">
        <div className="w-full min-h-screen gap-4">
          <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">
            Pharmacy Management
          </h1>
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
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalComp;
