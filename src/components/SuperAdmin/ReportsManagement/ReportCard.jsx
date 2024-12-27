// import React from "react";

// const ErrorReportCard = ({ report }) => {
//   if (!report) {
//     return <div className="text-red-500">Error: Report data is missing</div>;
//   }

//   return (
//     <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {/* Doctor Name */}
//         <div>
//           <h3 className="font-semibold text-gray-900 mb-1">Doctor Name:</h3>
//           <p className="text-gray-700">{report.doctorName || "N/A"}</p>
//         </div>

//         {/* Email */}
//         <div className="max-w-xs">
//           <h3 className="font-semibold text-gray-900 mb-1">Email:</h3>
//           <p className="text-gray-700 break-words">{report.email || "N/A"}</p>
//         </div>

//         {/* Subject */}
//         <div>
//           <h3 className="font-semibold text-gray-900 mb-1">Subject:</h3>
//           <p className="text-gray-700">{report.subject || "N/A"}</p>
//         </div>

//         {/* Issue */}
//         <div>
//           <h3 className="font-semibold text-gray-900 mb-1">Issue:</h3>
//           <p className="text-gray-700">{report.issue || "N/A"}</p>
//         </div>

//         {/* Detailed Problem */}
//         <div className="col-span-full">
//           <h3 className="font-semibold text-gray-900 mb-1">
//             Detailed Problem:
//           </h3>
//           <p className="text-gray-700">{report.detailedProblem || "N/A"}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ErrorReportCard;


const ErrorOrUserCard = ({ report, userReport }) => {
    return (
      <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200 grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {report ? (
            <>
              {/* Doctor Name */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Doctor Name:</h3>
                <p className="text-gray-700">{report.doctorName || "N/A"}</p>
              </div>
  
              {/* Email */}
              <div className="max-w-xs">
                <h3 className="font-semibold text-gray-900 mb-1">Email:</h3>
                <p className="text-gray-700 break-words">{report.email || "N/A"}</p>
              </div>
  
              {/* Subject */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Subject:</h3>
                <p className="text-gray-700">{report.subject || "N/A"}</p>
              </div>
  
              {/* Issue */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Issue:</h3>
                <p className="text-gray-700">{report.issue || "N/A"}</p>
              </div>
  
              {/* Detailed Problem */}
              <div className="col-span-full">
                <h3 className="font-semibold text-gray-900 mb-1">Detailed Problem:</h3>
                <p className="text-gray-700">{report.detailedProblem || "N/A"}</p>
              </div>
            </>
          ) : userReport ? (
            <>
              {/* Full Name */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Full Name:</h3>
                <p className="text-gray-700">{userReport.fullName || "N/A"}</p>
              </div>
  
              {/* Email */}
              <div className="max-w-xs">
                <h3 className="font-semibold text-gray-900 mb-1">Email:</h3>
                <p className="text-gray-700 break-words">{userReport.email || "N/A"}</p>
              </div>
  
              {/* Phone */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone:</h3>
                <p className="text-gray-700">{userReport.phone || "N/A"}</p>
              </div>
  
              {/* Role */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Role:</h3>
                <p className="text-gray-700">{userReport.role || "N/A"}</p>
              </div>
  
              {/* Message */}
              <div >
                <h3 className="font-semibold text-gray-900 mb-1">Message:</h3>
                <p className="text-gray-700">{userReport.message || "N/A"}</p>
              </div>
            </>
          ) : (
            <div className="col-span-full text-gray-700">No data available</div>
          )}
        </div>
      </div>
    );
  };
  
  export default ErrorOrUserCard;
  