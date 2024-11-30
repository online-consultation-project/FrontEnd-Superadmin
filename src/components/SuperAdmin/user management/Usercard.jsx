
import React from "react";
import { Button } from "../doctor management/SubCard";

const UserCard = ({profile, name, email, phone, gender}) => {
  return (
    <div className="min-h-[400px] p-2 flex flex-col gap-2 justify-center shadow-sm shadow-slate-600 rounded-xl ">
      <img src={profile} alt="user Profile" className="h-48 w-full bg-slate-600 rounded-lg"/>
      <div className="flex h-auto flex-col px-3 justify-center items-start gap-2">
        <div className=" w-full flex justify-start items-center gap-3">
          <span className="font-medium">Name   :</span>
          <span className="font-medium text-slate-600">{name}</span>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <span className="font-medium">Email  :</span>
          <span className="font-medium text-slate-600">{email}</span>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <span className="font-medium">Phone  :</span>
          <span className="font-medium text-slate-600">{phone}</span>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <span className="font-medium">Gender :</span>
          <span className="font-medium text-slate-600">{gender}</span>
        </div>
        <div className="w-full flex justify-around items-center gap-1">
          <Button btnName={"Edit"}/>
          <Button btnName={"Delete"}/>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
