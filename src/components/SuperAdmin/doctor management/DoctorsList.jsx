import React, { useEffect, useState } from "react";
import DoctorCard from "./Doctors";
import axios from "axios";
import { toast } from "react-toastify";



const DoctorsMain = () => {
  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = async () => {
    try {
      // const authToken = localStorage.getItem("token")
      await axios.get("http://localhost:7000/admin/addadmin")
      .then((res) => {
        setDoctors(res.data)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })  
    } catch (error) {
      console.log(error);
      
    }
  }

useEffect(() => {
  fetchDoctors()
}, [])

  return (
   <div className="min-h-screen w-full bg-gray-200">
     <div className="grid grid-cols-4 gap-4 p-3 max-[810px]:grid-cols-1 max-lg:grid-cols-2 lg:max-xl:grid-cols-3 xl:grid-cols-4 ">
      {doctors.map((value, index) => (
        <DoctorCard key={index} image={"https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png"} {...value}/>
      ))}
    </div>
   </div>
  );
};

export default DoctorsMain;
