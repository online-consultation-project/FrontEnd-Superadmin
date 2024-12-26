import React, { useEffect, useState } from "react";
import DoctorCard from "./Doctors";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../../Reusable Component/Loader";

const DoctorsMain = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:7000/admin/addadmin");
      setDoctors(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error fetching doctors");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/admin/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("Doctor deleted successfully!");
      setDoctors(doctors.filter((doctor) => doctor._id !== id));
    } catch (error) {
      toast.error(error.response?.data?.message || "Error deleting doctor");
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-200">
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-4 gap-4 p-3 max-[810px]:grid-cols-1 max-lg:grid-cols-2 lg:max-xl:grid-cols-3 xl:grid-cols-4">
          {doctors.map((value) => (
            <DoctorCard
              key={value._id}
              {...value}
              handleDelete={handleDelete} // Pass the delete handler
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorsMain;
