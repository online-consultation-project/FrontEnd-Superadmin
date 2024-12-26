import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaTrashAlt } from "react-icons/fa";
import Sidebar from "../../Sidebar/Sidebar";
import axios from "axios";
import AppointmentCard from "./AppoinmentCard";
import Loader from "../../Reusable Component/Loader"; // Import the Loader component

const AppointmentTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading



  const fecthAppointment = async () => {
    setLoading(true); // Set loading state to true when starting the fetch
    await axios
      .get("http://localhost:7000/api/appointment/fetchallappointment", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setAppointments(response.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Set loading to false in case of error
      });
  };

  useEffect(() => {
    fecthAppointment();
  }, []);

  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full sm:h-screen sm:w-72 w-full">
        <Sidebar />
      </div>
      <div className="p-6 bg-gray-200 sm:ml-72 overflow-x-scroll flex-1 ml-0 max-sm:mt-16">
        <div className="bg-gray-200 w-full h-screen">
          <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">
            Appointments
          </h1>
          
          {/* Display loader while data is loading */}
          {loading ? (
            <Loader />
          ) : (
            <div>
              {appointments.map((appointment) => (
                <AppointmentCard
                  key={appointment._id}
                  appointment={{
                    id: appointment._id,
                    name: appointment.patientName,
                    date: new Date(appointment.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }),
                    doctorFirstName:appointment.doctorFirstName,
                    email: appointment.patientEmail,
                    phone: appointment.patientPhone,
                    type: appointment.slot,
                    status: appointment.status,
                    patientConsult: appointment.patientConsult,
                    gender: appointment.patientGender,
                    age: appointment.patientAge,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;
