import { Box, Grid2 } from "@mui/material";
import React from "react";
import AddAdmin from "../../Form/AdminAddForm";
import DoctorSideCardDesign from "./SideDoctorCard";

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
            <span className="sticky top-0 text-xl font-semibold h-12 border-b-2 border-slate-400">
              Doctors List
            </span>
            <div className="overflow-y-auto h-[calc(490px-48px)] overflow-scroll">
              {DoctorData.map((value, index) => (
                <DoctorSideCardDesign
                  key={index}
                  {...value}
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