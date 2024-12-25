import React from "react";
import { MdAddCall, MdOutlineAttachEmail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

const AppointmentCard = ({ appointment }) => {
  if (!appointment) {
    return <div className="text-red-500">Error: Appointment data is missing</div>;
  }

  const getStatusColor = () => {
    switch (appointment.status) {
      case "Accepted":
        return "text-green-500";
      case "Rejected":
        return "text-red-500";
      case "Pending":
      case "pending":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-evenly bg-white p-4 rounded-lg shadow-md mb-4 gap-6">
      {/* Name Section */}
      <div className="text-center min-w-[150px]">
        <h4 className="font-semibold text-lg">{appointment.name || "No Name"}</h4>
      </div>

      <div className="flex flex-col items-center min-w-[170px]">
        <p className="font-medium text-gray-600">Consultation:</p>
        <p className="text-gray-950">{appointment.patientConsult || "Not Specified"}</p>
      </div>

      <div className="flex-1 flex flex-col max-md:items-center gap-2 min-w-[150px]">
        <div className="flex items-center gap-2">
          <MdOutlineAttachEmail />
          <p className="text-gray-600 break-all text-sm">{appointment.email || "No Email"}</p>
        </div>
        <div className="flex items-center gap-2">
          <MdAddCall />
          <p className="text-gray-600 text-sm">{appointment.phone || "No Phone"}</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center gap-2 min-w-[100px]">
        <div className="flex items-center gap-2">
          <p className="font-medium text-gray-600">Gender:</p>
          <p className="text-gray-600">{appointment.gender || "Unknown"}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium text-gray-600">Age:</p>
          <p className="text-gray-600">{appointment.age || "N/A"}</p>
        </div>
      </div>

      {/* Type and Date Section */}
      <div className="flex-1 flex flex-col gap-2 text-sm items-center justify-center min-w-[150px] text-left md:text-center">
        <p className="text-base font-medium">{appointment.type || "No Type"}</p>
        <div className="flex items-center justify-center text-center gap-2">
          <IoMdTime className="text-xl" />
          <p className="text-gray-600">{appointment.date || "No Date"}</p>
        </div>
      </div>

      {/* Status Section */}
      <div className="flex-1 flex flex-col justify-center items-center gap-2 min-w-[150px]">
        <h2 className="font-medium text-gray-700">Status</h2>
        <p className={`font-medium ${getStatusColor()}`}>
          {appointment.status === "pending" ? "Pending" : appointment.status || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default AppointmentCard;
