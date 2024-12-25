import React, { useEffect, useState } from "react";
import DoctorCard from "./Doctors";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../../Reusable Component/Loader"; // Import the Loader component

const DoctorsMain = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading status

  const fetchDoctors = async () => {
    try {
      setLoading(true); // Set loading to true before the request starts
      await axios
        .get("http://localhost:7000/admin/addadmin")
        .then((res) => {
          setDoctors(res.data);
          setLoading(false); // Set loading to false once data is fetched
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          setLoading(false); // Set loading to false in case of an error
        });
    } catch (error) {
      console.log(error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-200">
      {/* Show loader while data is loading */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-4 gap-4 p-3 max-[810px]:grid-cols-1 max-lg:grid-cols-2 lg:max-xl:grid-cols-3 xl:grid-cols-4">
          {doctors.map((value, index) => (
            <DoctorCard
              key={index}
              image={
                "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitioner-1421526856614w2jt9.png"
              }
              {...value}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorsMain;
