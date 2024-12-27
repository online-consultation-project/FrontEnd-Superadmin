import React, { useEffect, useState } from "react";
import axios from "axios";

import Loader from "../../Reusable Component/Loader";
import ErrorReportCard from "./ReportCard";

const UserReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true); 

  console.log(reports);
  
  const fecthreport = async () => {
    setLoading(true); 
    await axios
      .get("http://localhost:7000/user/getcontactus", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setReports(response.data);
        setLoading(false); 
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); 
      });
  };

  useEffect(() => {
    fecthreport();
  }, []);

  return (
    <div>
      {/* Display loader while data is loading */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid gap-4">
          {reports.map((report) => (
            <ErrorReportCard key={report._id} userReport={report} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserReports;
