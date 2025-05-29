import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Overview = () => {
  const { _id } = useParams()
  const [doctorInfo, setDoctorInfo] = useState([]);

  console.log(doctorInfo);
  

  const getByUpdate = async (_id) => {
    console.log("getupdate : ",_id);
    const authToken = localStorage.getItem("token");
    console.log("token",authToken);
    
    try {
      console.log("getupdate");
      
      await axios.get(`http://localhost:7000/admin/getadmin/?_id=${_id}`,{
        headers: {Authorization : `Bearer ${authToken}`}
      })
      .then((res) => {
        console.log(res.data);
        setDoctorInfo(res.data)
        
      })
      .catch((err) => {
        // toast.error(err.response.data.message)
        console.log(err.response.data.Message);
        
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (_id) {  // Check if _id is available before calling getByUpdate
      getByUpdate(_id);
    }
  }, [_id]);
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Overview</h2>
        <p className="text-gray-700">
          {`${doctorInfo.about}`}
        </p>
        <h3 className="text-lg font-bold mt-6">Specialties:</h3>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Women's health services</li>
          <li>Pregnancy care</li>
          <li>Surgical procedures</li>
          <li>Specialty care</li>
          <li>Conclusion</li>
        </ul>
      </div>
    );
  };
  
  export default Overview;
  