import React from "react";
import DoctorCard from "./Doctors";

const DoctorsMain = () => {
  const DoctorsData = [
    {
      image:
        "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
      drName: "Dr. Sathish",
      specialist: "Eye Care",
      experience: "10 Years",
      email: "drsathish@gmail.com",
    },
    {
      image:
        "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
      drName: "Dr. Sathish",
      specialist: "Eye Care",
      experience: "10 Years",
      email: "drsathish@gmail.com",
    },
    {
      image:
        "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
      drName: "Dr. Sathish",
      specialist: "Eye Care",
      experience: "10 Years",
      email: "drsathish@gmail.com",
    },
    {
      image:
        "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
      drName: "Dr. Sathish",
      specialist: "Eye Care",
      experience: "10 Years",
      email: "drsathish@gmail.com",
    },
    {
      image:
        "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
      drName: "Dr. Sathish",
      specialist: "Eye Care",
      experience: "10 Years",
      email: "drsathish@gmail.com",
    },
    {
      image:
        "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png",
      drName: "Dr. Sathish",
      specialist: "Eye Care",
      experience: "10 Years",
      email: "drsathish@gmail.com",
    },
  ];

  return (
   <div className="min-h-screen w-full bg-gray-200">
     <div className="grid grid-cols-4 gap-4 p-3 max-sm:grid-cols-1">
      {DoctorsData.map((value, index) => (
        <DoctorCard key={index} {...value}/>
      ))}
    </div>
   </div>
  );
};

export default DoctorsMain;
