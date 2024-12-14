import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaTrashAlt } from "react-icons/fa";
import Sidebar from "../../Sidebar/Sidebar";

const AppointmentTable = () => {
  const [appointments, setAppointments] = useState([
    {
      _id: "1",
      patient: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "9876543210",
        gender: "Male",
        age: 28,
      },
      doctor: {
        name: "Dr. Emily Smith",
        category: "Cardiologist",
      },
      date: "2024-12-01",
      time: "10:00 AM",
      status: "Pending",
    },
    {
      _id: "2",
      patient: {
        name: "Jane Roe",
        email: "jane.roe@example.com",
        phone: "9876543211",
        gender: "Female",
        age: 32,
      },
      doctor: {
        name: "Dr. Michael Brown",
        category: "Dermatologist",
      },
      date: "2024-12-02",
      time: "2:00 PM",
      status: "Pending",
    },
    {
      _id: "3",
      patient: {
        name: "Paul Green",
        email: "paul.green@example.com",
        phone: "9876543212",
        gender: "Male",
        age: 40,
      },
      doctor: {
        name: "Dr. Sarah Lee",
        category: "Orthopedic",
      },
      date: "2024-12-03",
      time: "11:00 AM",
      status: "Accepted",
    },
    {
      _id: "4",
      patient: {
        name: "Mary White",
        email: "mary.white@example.com",
        phone: "9876543213",
        gender: "Female",
        age: 35,
      },
      doctor: {
        name: "Dr. James Wilson",
        category: "Neurologist",
      },
      date: "2024-12-04",
      time: "3:00 PM",
      status: "Rejected",
    },
    {
      _id: "5",
      patient: {
        name: "Tom Blue",
        email: "tom.blue@example.com",
        phone: "9876543214",
        gender: "Male",
        age: 29,
      },
      doctor: {
        name: "Dr. Angela Davis",
        category: "Pediatrician",
      },
      date: "2024-12-05",
      time: "9:00 AM",
      status: "Pending",
    },
    {
      _id: "6",
      patient: {
        name: "Lucy Black",
        email: "lucy.black@example.com",
        phone: "9876543215",
        gender: "Female",
        age: 26,
      },
      doctor: {
        name: "Dr. Kevin Adams",
        category: "Dentist",
      },
      date: "2024-12-06",
      time: "4:00 PM",
      status: "Pending",
    },
    {
      _id: "7",
      patient: {
        name: "Liam Gray",
        email: "liam.gray@example.com",
        phone: "9876543216",
        gender: "Male",
        age: 50,
      },
      doctor: {
        name: "Dr. Olivia Harris",
        category: "Ophthalmologist",
      },
      date: "2024-12-07",
      time: "12:00 PM",
      status: "Accepted",
    },
    {
      _id: "8",
      patient: {
        name: "Emma Pink",
        email: "emma.pink@example.com",
        phone: "9876543217",
        gender: "Female",
        age: 22,
      },
      doctor: {
        name: "Dr. William Clark",
        category: "Oncologist",
      },
      date: "2024-12-08",
      time: "5:00 PM",
      status: "Pending",
    },
    {
      _id: "9",
      patient: {
        name: "Mia Violet",
        email: "mia.violet@example.com",
        phone: "9876543218",
        gender: "Female",
        age: 45,
      },
      doctor: {
        name: "Dr. Chris Baker",
        category: "Gastroenterologist",
      },
      date: "2024-12-09",
      time: "8:00 AM",
      status: "Rejected",
    },
    {
      _id: "10",
      patient: {
        name: "Noah Yellow",
        email: "noah.yellow@example.com",
        phone: "9876543219",
        gender: "Male",
        age: 38,
      },
      doctor: {
        name: "Dr. Sophia Martin",
        category: "Endocrinologist",
      },
      date: "2024-12-10",
      time: "1:00 PM",
      status: "Pending",
    },
  ]);

  const handleAccept = (id) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment._id === id
          ? { ...appointment, status: "Accepted" }
          : appointment
      )
    );
  };

  const handleReject = (id) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment._id === id
          ? { ...appointment, status: "Rejected" }
          : appointment
      )
    );
  };

  const handleDelete = (id) => {
    setAppointments(
      appointments.filter((appointment) => appointment._id !== id)
    );
  };

  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full sm:h-screen sm:w-72 w-full">
        <Sidebar />
      </div>
      <div className="p-6 bg-gray-200 sm:ml-72 overflow-x-scroll flex-1 ml-0 max-sm:mt-16">
        <div className="bg-gray-200 w-full h-full">
          <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">Appointments</h1>
          <div className="overflow-x-scroll">
            <table className="min-w-full table-auto border-collapse border border-gray-300 ">
              <thead>
                <tr className="bg-blue-900 text-sm md:text-base  text-white">
                  <th className="border px-2 py-2 text-left">Patient Name</th>
                  <th className="border px-2 py-2 text-left">Email</th>
                  <th className="border px-2 py-2 text-left">Phone</th>
                  <th className="border px-2 py-2 text-left">Gender</th>
                  <th className="border px-2 py-2 text-left">Age</th>
                  <th className="border px-2 py-2 text-left">Doctor Name</th>
                  <th className="border px-2 py-2 text-left">Category</th>
                  <th className="border px-2 py-2 text-left">Date</th>
                  <th className="border px-2 py-2 text-left">Time</th>
                  <th className="border px-2 py-2 text-center">Status</th>
                  <th className="border px-2 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr
                    key={appointment._id}
                    className="bg-white hover:bg-gray-50 text-sm md:text-base"
                  >
                    <td className="border px-4 py-2">
                      {appointment.patient.name}
                    </td>
                    <td className="border px-4 py-2">
                      {appointment.patient.email}
                    </td>
                    <td className="border px-4 py-2">
                      {appointment.patient.phone}
                    </td>
                    <td className="border px-4 py-2">
                      {appointment.patient.gender}
                    </td>
                    <td className="border px-4 py-2">
                      {appointment.patient.age}
                    </td>
                    <td className="border px-4 py-2">
                      {appointment.doctor.name}
                    </td>
                    <td className="border px-4 py-2">
                      {appointment.doctor.category}
                    </td>
                    <td className="border px-4 py-2">{appointment.date}</td>
                    <td className="border px-4 py-2">{appointment.time}</td>
                    <td
                      className={`border px-4 py-2 font-bold text-center ${
                        appointment.status === "Accepted"
                          ? "text-green-500"
                          : appointment.status === "Rejected"
                          ? "text-red-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {appointment.status}
                    </td>
                    <td className="border px-4 py-2 flex justify-center items-center gap-2">
                      <button
                        onClick={() => handleAccept(appointment._id)}
                        className="text-green-500 hover:text-green-700"
                        title="Accept"
                      >
                        <FaCheckCircle size={25} />
                      </button>
                      <button
                        onClick={() => handleReject(appointment._id)}
                        className="text-red-500 hover:text-red-700"
                        title="Reject"
                      >
                        <FaTimesCircle size={25} />
                      </button>
                      <button
                        onClick={() => handleDelete(appointment._id)}
                        className="text-gray-500 hover:text-gray-700"
                        title="Delete"
                      >
                        <FaTrashAlt size={25} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;
