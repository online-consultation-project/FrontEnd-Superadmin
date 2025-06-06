import React, { useEffect, useState } from "react";
import axios from "axios";
import AppointmentCard from "./AppoinmentCard";
import Loader from "../../Reusable Component/Loader";

const OfflineAppoitnment = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true); 

  const fecthAppointment = async () => {
    setLoading(true); 
    await axios
      .get("http://localhost:7000/api/appointment/fetchallappointment", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setAppointments(response.data);
        setLoading(false); 
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); 
      });
  };

  useEffect(() => {
    fecthAppointment();
  }, []);

  return (
    <div>
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
                doctorFirstName: appointment.doctorFirstName,
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
  );
};

export default OfflineAppoitnment;
