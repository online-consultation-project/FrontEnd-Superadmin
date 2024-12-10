import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import UserCard from "./user management/Usercard";

const UserComp = () => {
  const userData = [
    {
      profile:
        "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
      name: "Dr. Sathish",
      email: "drsathish@gmail.com",
      phone: "6374737942",
      gender: "Male",
    },
    {
      profile:
        "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
      name: "Dr. Sathish",
      email: "drsathish@gmail.com",
      phone: "6374737942",
      gender: "Male",
    },
    {
      profile:
        "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
      name: "Dr. Sathish",
      email: "drsathish@gmail.com",
      phone: "6374737942",
      gender: "Male",
    },
    {
      profile:
        "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
      name: "Dr. Sathish",
      email: "drsathish@gmail.com",
      phone: "6374737942",
      gender: "Male",
    },
    {
      profile:
        "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
      name: "Dr. Sathish",
      email: "drsathish@gmail.com",
      phone: "6374737942",
      gender: "Male",
    },
    {
      profile:
        "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
      name: "Dr. Sathish",
      email: "drsathish@gmail.com",
      phone: "6374737942",
      gender: "Male",
    },
  ];
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full sm:h-screen sm:w-72 w-full">
        <Sidebar />
      </div>
      <div className="p-6 bg-gray-200 sm:ml-72 overflow-x-scroll flex-1 ml-0 max-sm:mt-16">
        <div className=" bg-gray-200 w-full h-full">
          <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">User Management</h1>
          <div className="grid grid-cols-4 gap-3 max-[520px]:grid-cols-1 max-sm:grid-cols-2 sm:max-[800px]:grid-cols-1 max-lg:grid-cols-2 lg:max-xl:grid-cols-3 max-[1200px]:grid-cols-2 max-[1550px]:grid-cols-4">
            {userData.map((value, index) => (
              <UserCard key={index} {...value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComp;
