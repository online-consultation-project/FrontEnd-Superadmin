import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { RiAdminLine } from "react-icons/ri";
import DashboardCard from "../Reusable Component/DashboardCardCommponent";
import UserCard from "./user management/Usercard";

const UserComp = () => {

 const userData = [
  {
    profile:
      "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
    name: "Dr. Sathish",
    email: "drsathish@gmail.com",
    phone: "6374737942",
    gender: "Male"
  },
  {
    profile:
      "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
    name: "Dr. Sathish",
    email: "drsathish@gmail.com",
    phone: "6374737942",
    gender: "Male"
  },
  {
    profile:
      "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
    name: "Dr. Sathish",
    email: "drsathish@gmail.com",
    phone: "6374737942",
    gender: "Male"
  },
  {
    profile:
      "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
    name: "Dr. Sathish",
    email: "drsathish@gmail.com",
    phone: "6374737942",
    gender: "Male"
  },
  {
    profile:
      "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
    name: "Dr. Sathish",
    email: "drsathish@gmail.com",
    phone: "6374737942",
    gender: "Male"
  },
  {
    profile:
      "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
    name: "Dr. Sathish",
    email: "drsathish@gmail.com",
    phone: "6374737942",
    gender: "Male"
  },

 ]
  return (
    <div className="p-6 bg-gray-200 w-full h-full">
      <h1 className="text-2xl font-bold mb-7">User Management</h1>
      <div className="grid grid-cols-4 gap-3 max-sm:grid-cols-1 sm:max-[800px]:grid-cols-1 max-lg:grid-cols-2 lg:max-xl:grid-cols-3 max-[1200px]:grid-cols-2 max-[1550px]:grid-cols-4">
        {userData.map((value, index) => (
          <UserCard key={index} {...value}/>
        ))}
      </div>
    </div>
  );
};

export default UserComp;
