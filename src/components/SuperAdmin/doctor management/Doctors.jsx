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

const DoctorCard = ({ image, drName, specialist }) => {
  console.log(image, drName);

  return (
    <Card className="shadow-sm shadow-slate-600">
      <CardActionArea>
        <CardMedia
          component="img"
          height="80"
          image={image}
          alt="green iguana"
          className=""
        />
        <CardContent className="bg-gradient-to-r from-blue-500 to-blue-900 flex gap-[40px] text-white hover:text-white justify-between items-center">
          <div className="flex flex-col gap-1 justify-center items-center">
            <Typography
              style={{ fontSize: "15px", fontWeight: "700" }}
              className=""
            >
              {drName}
            </Typography>
            <Typography style={{ fontSize: "15px", fontWeight: "400" }}>
              {specialist}
            </Typography>
          </div>
          <div className="flex -mt-9 mr-2 text-xl gap-4 justify-center items-center">
            <FaEdit />
            <MdDeleteForever />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DoctorCard;
