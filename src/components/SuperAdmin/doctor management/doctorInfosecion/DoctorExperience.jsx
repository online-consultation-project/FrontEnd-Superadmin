import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";


const Experience = () => {
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
      <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2 text-gray-800">Experience : {doctorInfo.experience}</h2>
      <div>
        <p className="text-gray-600 font-semibold mb-1">Experience At:</p>
        <ul className="list-disc list-inside space-y-1">
          <li className="text-gray-700">{doctorInfo.experience1}</li>
          <li className="text-gray-700">{doctorInfo.experience2}</li>
          <li className="text-gray-700">{doctorInfo.hospitalName}</li>
        </ul>
      </div>
    </div>
    
    );
  };
  
  export default Experience;
  