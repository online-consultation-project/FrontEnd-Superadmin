import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import Overview from "./doctorInfosecion/DoctorOverview";
import axios from "axios";

const DoctorInfoMain = () => {
  const { _id } = useParams();
  const [doctorInfo, setDoctorInfo] = useState([]);

  console.log(doctorInfo);

  const getByUpdate = async (_id) => {
    console.log("getupdate : ", _id);
    const authToken = localStorage.getItem("token");
    console.log("token", authToken);

    try {
      console.log("getupdate");

      await axios
        .get(`http://localhost:7000/admin/getadmin/?_id=${_id}`, {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((res) => {
          console.log(res.data);
          setDoctorInfo(res.data);
        })
        .catch((err) => {
          // toast.error(err.response.data.message)
          console.log(err.response.data.Message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (_id) {
      // Check if _id is available before calling getByUpdate
      getByUpdate(_id);
    }
  }, [_id]);

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="bg-blue-500 p-6 rounded-t-lg text-white flex items-center">
        <img
          src={`http://localhost:7000/upload/${doctorInfo.profileFileName}`} // Replace with an actual image URL
          alt="Doctor Profile"
          className="h-24 w-24 rounded-full border-4 border-white"
        />
        <div className="ml-6">
          <h1 className="text-2xl font-bold">{`${doctorInfo.firstName} ${doctorInfo.lastName}`}</h1>
          <p className="text-lg">{`${doctorInfo.category}`}</p>
        </div>
      </div>

      <div className="bg-white">
        <nav className="flex justify-around border-b border-gray-200">
          {[
            {
              path: `/doctors/doctorsinfo/${doctorInfo._id}`,
              label: "Overview",
            },
            {
              path: `/doctors/doctorsinfo/${doctorInfo._id}/experience`,
              label: "Experience",
            },
            {
              path: `/doctors/doctorsinfo/${doctorInfo._id}/reviews`,
              label: "Education",
            },
            {
              path: `/doctors/doctorsinfo/${doctorInfo._id}/timetable`,
              label: "Time Table",
            },
            
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
