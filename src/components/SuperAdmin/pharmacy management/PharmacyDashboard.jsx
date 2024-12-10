
import React from "react";
import { FaUsers} from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import DashboardCard from "../../Reusable Component/DashboardCardCommponent";
import PharmacyChartComp from "./pharmacyChart";

const PharmDashboard = () => {

    const dashData= [
        {img: FaUsers, title: 'No of Customer', count: 300, date: new Date().toISOString().split("T")[0], color: "slate-600"},
        {img: AiOutlineProduct, title: 'Products', count: 100, date: new Date().toISOString().split("T")[0], color: "blue-500"},
        {img: GiMoneyStack, title: 'Revenue', count: "$ 1800", date: new Date().toISOString().split("T")[0], color: "slate-600"},
    ]

    return(
        <div className="">
           <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 md:max-lg:grid-cols-2 ">
            {dashData.map((value, index) => (
                <DashboardCard key={index} props={value}/>
            ))}
            </div> 
            <div>
                <PharmacyChartComp/>
            </div>
        </div>
    )
}

export default PharmDashboard;