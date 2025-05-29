import React from "react";
import { Doughnut } from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip,  Legend} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    const data = {
        labels: ["Admins", "users", "Customers", "Products"],
        datasets : [
            {
                label: 'Data',
                data: [300, 250, 500, 650],
                backgroundColor: [
                    "#FF6384", 
                    "#36A2EB", 
                    "#FFCE56", 
                    "#4BC0C0", 
                    "#9966FF", 
                  ],
                  hoverOffset: 4
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            Legend:{
                position: 'top',
            },
            Tooltip:{
                enabled: true
            }
        }
    }
    return(
        <div className="w-[550px] h-[350px] m-auto flex flex-col items-center">
            <h3>Dashboard Chart</h3>
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default DoughnutChart;