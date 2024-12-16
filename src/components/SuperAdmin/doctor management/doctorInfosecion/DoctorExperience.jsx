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

    return <h2 className="text-xl font-bold">{`${doctorInfo.experience}`}</h2>;
  };
  
  export default Experience;
  