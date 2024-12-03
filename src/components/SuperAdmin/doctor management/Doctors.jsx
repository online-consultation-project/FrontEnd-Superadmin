import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "./SubCard";
// import { Link } from "react-router-dom";

const DoctorCard = ({ image, firstName, lastName, category, _id,phoneNumber,hospitalName,experience }) => {
  const name = `${firstName} ${lastName}`;
  return (
    <div className="min-h-[300px] flex flex-col gap-2 justify-center shadow-sm shadow-slate-600 rounded-xl ">
      <img
        src={image}
        alt="user Profile"
        className="h-44 w-full bg-slate-600 rounded-lg"
      />
      <div className="flex h-auto flex-col justify-center p-3 items-start gap-2">
        <div className=" w-full flex flex-col justify-center rounded-xl items-start gap-2">
          <span className="font-bold text-blue-900">{name}</span>
          <span className="font-semibold text-slate-600">{category}</span>
          <span className="font-semibold text-slate-600">{phoneNumber}</span>
        </div>
        <div className="w-full flex justify-around items-center gap-1">
          <Link to={`/doctors/update/${_id}`}>
            <Button btnName={"Edit"} />
          </Link>
          <Button btnName={"Delete"} />
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
