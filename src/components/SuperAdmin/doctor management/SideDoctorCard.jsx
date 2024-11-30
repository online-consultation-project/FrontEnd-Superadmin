import React from "react";

const DoctorSideCardDesign = ({image, drName, specialist, experience})=>{
    return(
        <div className="p-3 flex justify-start items-start gap-5">
            <img src={image} alt="doctor image" className="w-24 h-1w-24" />
            <div className="flex flex-col justify-around items-start">
                <h2 className="text-xl font-semibold">{drName}</h2>
                <p className="text-[1.1rem] font-semibold text-slate-600">{specialist}</p>
                <p className="text-[1.1rem] font-semibold text-slate-600">{experience}</p>
            </div>
        </div>
    )
}

export default DoctorSideCardDesign;