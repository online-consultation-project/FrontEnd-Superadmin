import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Experience = () => {
  const { _id } = useParams();
  const [doctorInfo, setDoctorInfo] = useState([]);

  console.log(doctorInfo);

  const getByUpdate = async (_id) => {
    console.log("getupdate : ", _id);
    const authToken = localStorage.getItem("token");
    console.log("token", authToken);

    try {
      console.log("getupdate");

      await axios
        .get(`http://localhost:7000/admin/getadmin/?_id=${_id}`, {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((res) => {
          console.log(res.data);
          setDoctorInfo(res.data);
        })
        .catch((err) => {
          // toast.error(err.response.data.message)
          console.log(err.response.data.Message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (_id) {
      // Check if _id is available before calling getByUpdate
      getByUpdate(_id);
    }
  }, [_id]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
      <div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Post Graduate
          </h3>
          <ul className="list-disc list-inside space-y-1 pl-5">
            <li className="text-gray-700">{doctorInfo.PgCompletedAt}</li>
            <li className="text-gray-700">{doctorInfo.PgDegree}</li>
            <li className="text-gray-700">{doctorInfo.Pgyear}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Under Graduate
          </h3>
          <ul className="list-disc list-inside space-y-1 pl-5">
            <li className="text-gray-700">{doctorInfo.UgCompletedAt}</li>
            <li className="text-gray-700">{doctorInfo.UgDegree}</li>
            <li className="text-gray-700">{doctorInfo.Ugyear}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
