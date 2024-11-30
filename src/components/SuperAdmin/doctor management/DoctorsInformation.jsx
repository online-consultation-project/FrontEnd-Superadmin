import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Overview from "./doctorInfosecion/DoctorOverview";

// const DoctorOverview = () => {
//   return <Overview />;
// };

const DoctorInfoMain = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="bg-blue-500 p-6 rounded-t-lg text-white flex items-center">
        <img
          src="https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png" // Replace with an actual image URL
          alt="Doctor Profile"
          className="h-24 w-24 rounded-full border-4 border-white"
        />
        <div className="ml-6">
          <h1 className="text-2xl font-bold">Dr. Calvin Carlo</h1>
          <p className="text-lg">Orthopedic</p>
        </div>
      </div>

      <div className="bg-white">
        <nav className="flex justify-around border-b border-gray-200">
          {[
            { path: "/doctors/doctorsinfo", label: "Overview" },
            { path: "/doctors/doctorsinfo/experience", label: "Experience" },
            { path: "/doctors/doctorsinfo/reviews", label: "Reviews" },
            { path: "/doctors/doctorsinfo/timetable", label: "Time Table" },
            { path: "/doctors/doctorsinfo/settings", label: "Settings" },
          ].map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              end
              className={({ isActive }) =>
                `text-lg px-6 py-4 ${
                  isActive
                    ? "border-b-4 border-blue-500 text-blue-900"
                    : "text-gray-500 hover:text-black"
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="bg-white p-6 rounded-b-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default DoctorInfoMain;
