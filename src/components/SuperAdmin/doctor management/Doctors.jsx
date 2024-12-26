import React from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const DoctorCard = ({
  firstName,
  lastName,
  category,
  _id,
  phoneNumber,
  profileFileName,
  handleDelete, // Receive the delete handler
}) => {
  const name = `${firstName} ${lastName}`;

  return (
    <div className="min-h-[300px] flex flex-col gap-2 justify-center shadow-sm shadow-slate-600 rounded-xl">
      <img
        src={`http://localhost:7000/upload/${profileFileName}`}
        alt="user Profile"
        className="h-44 w-full bg-slate-600 rounded-lg"
      />
      <div className="flex h-auto flex-col justify-center p-3 items-start gap-2">
        <div className="w-full flex flex-col justify-center rounded-xl items-start gap-2">
          <span className="font-bold text-blue-900">{name}</span>
          <span className="font-semibold text-slate-600">{category}</span>
          <span className="font-semibold text-slate-600">{phoneNumber}</span>
        </div>
        <div className="w-full flex justify-between items-center gap-1 mt-1">
          <Link to={`/doctors/doctorsinfo/${_id}`}>
            <button className="text-[15px] border border-blue-900 text-blue-900 rounded-lg p-1">
              Read More
            </button>
          </Link>

          <div className="flex justify-between items-center gap-4">
            <Link to={`/doctors/update/${_id}`}>
              <FaEdit className="text-2xl text-blue-500" />
            </Link>
            <MdDelete
              className="text-2xl text-red-500 cursor-pointer"
              onClick={() => handleDelete(_id)} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
