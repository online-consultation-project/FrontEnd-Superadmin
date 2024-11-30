import React from "react";
import { primaryColor, whiteColor } from "../../Reusable Component/ColorSelector";

export const Button = ({btnName}) => {

    return(
        <button className={`w-24 rounded-md font-medium p-2 bg-blue-900 hover:bg-blue-500 text-${whiteColor}`}>{btnName}</button>
    )
}

export const SubCard = ({props}) => {
    return(
        <div className="bg-white py-4 px-6 rounded-md shadow-sm justify-center sm:max-lg:gap-4 sm:max-lg:px-3 shadow-slate-600 flex gap-8 text-blue-900">
            <h2>{props.image}</h2>
            <p>{props.title}</p>
        </div>
    )
}
