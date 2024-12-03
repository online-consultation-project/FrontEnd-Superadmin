import { Box, Grid2 } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddAdmin from "../../Form/AdminAddForm";
import DoctorSideCardDesign from "./SideDoctorCard";
import axios from "axios";
import { toast } from "react-toastify";

const AdminForm = () =>{

    const DoctorData = [
        {
          image:
            "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
          drName: "Dr. Sathish",
          specialist: "Eye Care",
          experience: "10 Years",
        },
        {
          image:
            "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
          drName: "Dr. Sathish",
          specialist: "Eye Care",
          experience: "10 Years",
        },
        {
          image:
            "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
          drName: "Dr. Sathish",
          specialist: "Eye Care",
          experience: "10 Years",
        },
        {
          image:
            "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
          drName: "Dr. Sathish",
          specialist: "Eye Care",
          experience: "10 Years",
        },
        {
          image:
            "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
          drName: "Dr. Sathish",
          specialist: "Eye Care",
          experience: "10 Years",
        },
        {
          image:
            "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
          drName: "Dr. Sathish",
          specialist: "Eye Care",
          experience: "10 Years",
        },
        {
          image:
            "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
          drName: "Dr. Sathish",
          specialist: "Eye Care",
          experience: "10 Years",
        },
        {
          image:
            "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
          drName: "Dr. Sathish",
          specialist: "Eye Care",
          experience: "10 Years",
        },
      ];

      const [doctorsSide, setDoctorsSide] = useState([]);

      const fetchAdminByDashboard = async () => {
        try {
          await axios.get("http://localhost:7000/admin/addadmin")
          .then((res) => {
            setDoctorsSide(res.data);
          })
          .catch((err) => {
            toast.error(err.response.data.message)
          })
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(() => {
        fetchAdminByDashboard();
      })

    return(
        <Box>
        <Grid2 container spacing={2}>
          <Grid2 size={8}>
            <AddAdmin />
          </Grid2>
          <Grid2
            size={4}
            className="bg-white rounded-lg p-5 grid grid-cols-1 h-[519px] shadow-sm shadow-slate-600"
          >
            <span className="sticky top-0 text-xl mb-2 font-semibold h-12 border-b-2 border-slate-400">
              Doctors List
            </span>
            <div className="overflow-y-auto flex flex-col gap-2 overflow-scroll">
              {doctorsSide.map((value, index) => (
                <DoctorSideCardDesign
                  key={index}
                  {...value}
                  image={"https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png"}
                  className="relative mt-12"
                />
              ))}
            </div>
          </Grid2>
        </Grid2>
      </Box>
    )
}

export default AdminForm;