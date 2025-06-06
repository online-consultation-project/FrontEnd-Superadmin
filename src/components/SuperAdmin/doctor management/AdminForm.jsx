import { Box, Grid2 } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddAdmin from "../../Form/AdminAddForm";
import DoctorSideCardDesign from "./SideDoctorCard";
import axios from "axios";
import { toast } from "react-toastify";

const AdminForm = () => {
  const [doctorsSide, setDoctorsSide] = useState([]);

  const fetchAdminByDashboard = async () => {
    try {
      await axios
        .get("http://localhost:7000/admin/limitedgetadmin", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setDoctorsSide(res.data.getLimitData);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdminByDashboard();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-12 gap-4">
        {/* Add Admin Section */}
        <div className="col-span-12 lg:col-span-8">
          <div className="rounded-lg p-5">
            <AddAdmin />
          </div>
        </div>

        {/* Doctors List Section */}
        <div className="col-span-12 lg:col-span-4 mt-5">
          <div className="bg-white rounded-lg p-5 shadow-md h-[519px] flex flex-col">
            <span className="sticky top-0 text-xl mb-3 font-semibold h-12 border-b-2 border-slate-400">
              Doctors List
            </span>
            <div className="overflow-y-auto flex flex-col gap-2 overflow-scroll">
              {doctorsSide.map((value, index) => (
                <DoctorSideCardDesign
                  key={index}
                  {...value}
                  image={
                    "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png"
                  }
                  className="relative mt-12"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminForm;
