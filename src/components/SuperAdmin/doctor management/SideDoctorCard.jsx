import React from "react";

const DoctorSideCardDesign = ({image, firstName, lastName, category, experience})=>{
    const name = `${firstName} ${lastName}`
    return(
        <div className="p-3 flex justify-start items-start border-2 border-gray-300 rounded-lg gap-5">
            <img src={image} alt="doctor image" className="w-24 h-1w-24" />
            <div className="flex flex-col justify-around items-start">
                <h2 className="text-[16px] font-semibold">{name}</h2>
                <p className="text-[16px] font-semibold text-slate-600">{category}</p>
                <p className="text-[16px] font-semibold text-slate-600">{`${experience} years`}</p>
            </div>
        </div>
    )
}

export default DoctorSideCardDesign;