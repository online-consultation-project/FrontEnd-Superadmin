import React from "react";
import { SubCard } from "./doctor management/SubCard";
import { FaAddressCard } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { ImInfo } from "react-icons/im";
import { Link, Outlet } from "react-router-dom";
import AdminForm from "./doctor management/AdminForm";
import DoctorsMain from "./doctor management/DoctorsList";
import DoctorInfoMain from "./doctor management/DoctorsInformation";

export const FormSection = () => {
  return <AdminForm />;
};

export const DoctorSection = () => {
  return <DoctorsMain />;
};

export const DoctorInfo = () => {
  return <DoctorInfoMain/>
}

const DoctorComp = () => {
  return (
    
    <div className="p-6 bg-gray-200 w-full h-full">
      <h1 className="text-2xl font-bold mb-7">Doctor Management</h1>
      <div className=" align-middle grid grid-cols-3 gap-8 w-full sm:max-lg:gap-5 max-sm:grid-cols-1 sm:max-[770px]: sm:max-lg:grid-cols-2 mb-7">
        <Link to={"/doctors"}>
          <SubCard
            props={{
              image: <FaAddressCard className="text-2xl font-semibold" />,
              title: "Add Doctors",
            }}
          />
        </Link>
        <Link to={"/doctors/doctorslist"}>
          <SubCard
            props={{
              image: <FaUserDoctor className="text-2xl font-semibold" />,
              title: "Doctors",
            }}
          />
        </Link>
        <Link to={"/doctors/doctorsinfo"}>
          <SubCard
            props={{
              image: <ImInfo className="text-2xl font-semibold" />,
              title: "Profile",
            }}
          />
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DoctorComp;
