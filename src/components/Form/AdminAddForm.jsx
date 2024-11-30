// import React, { useState } from "react";
// import { blackColor, primaryColor, whiteColor } from "../Reusable Component/ColorSelector";

// const initialState = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phoneNumber: "",
//   category: "",
//   gender: "",
//   experience: "",
//   hospitalName: "",
// };

// const AddAdmin = () => {
//   const [adminData, setAdminData] = useState(initialState);

//   const handleOnChange = (e) => {
//     console.log(e);
//     setAdminData(e.target.value);
//   };

//   const handleOnSubmit = () => {
//     console.log(adminData);
//   }

//   return (

//       <div className={`min-h-[200px] px-14 py-8 bg-${whiteColor} flex flex-col rounded-xl justify-center items-center gap-6`}>
//         <h1 className="text-2xl font-bold">Add Admin</h1>
//         <form onSubmit={handleOnSubmit} className="w-full px-4 flex flex-col justify-center items-center gap-6">
//           <div className="w-full flex flex-row justify-between items-start gap-6 max-sm:flex-col">
//             <div className="flex flex-col justify-normal items-start gap-3">
//               <label>First Name*:</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={adminData.firstName}
//                 onChange={handleOnChange}
//                 placeholder="First Name"
//                 className={`bg-transparent border-b-2 border-${blackColor} border-opacity-65 focus:rounded pl-2 px-3 h-8 focus:outline-none focus:ring-1 focus:ring-${primaryColor} focus:border-none`}
//                 required
//               />
//             </div>

//             <div className="flex flex-col justify-normal items-start gap-3">
//               <label>Last Name*:</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={adminData.lastName}
//                 onChange={handleOnChange}
//                 placeholder="Last Name"
//                 className={`bg-transparent border-b-2 border-${blackColor} border-opacity-65 focus:rounded pl-2 px-3 h-8 focus:outline-none focus:ring-1 focus:ring-${primaryColor} focus:border-none`}
//                 required
//               />
//             </div>
//           </div>

//           <div className="w-full flex flex-row justify-between items-start gap-6 max-sm:flex-col">
//             <div className="flex flex-col justify-normal items-start gap-3">
//               <label>Email*:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={adminData.email}
//                 onChange={handleOnChange}
//                 placeholder="Email"
//                 className={`bg-transparent border-b-2 border-${blackColor} border-opacity-65 focus:rounded pl-2 px-3 h-8 focus:outline-none focus:ring-1 focus:ring-${primaryColor} focus:border-none`}
//                 required
//               />
//             </div>

//             <div className="flex flex-col justify-normal items-start gap-3">
//               <label>Phone Number*:</label>
//               <input
//                 type="number"
//                 name="phoneNumber"
//                 value={adminData.phoneNumber}
//                 onChange={handleOnChange}
//                 placeholder="Phone Number"
//                 className={`bg-transparent border-b-2 border-${blackColor} border-opacity-65 focus:rounded pl-2 px-3 h-8 focus:outline-none focus:ring-1 focus:ring-${primaryColor} focus:border-none`}
//                 required
//               />
//             </div>
//           </div>

//           <div className="w-full flex flex-row justify-between items-start gap-6 max-sm:flex-col">
//             <div className="flex flex-col justify-normal items-start gap-3">
//               <label>Category*:</label>
//               <select
//                 name="category"
//                 id=""
//                 value={adminData.category}
//                 onChange={handleOnChange}
//                 placeholder="Select Category"
//                 className={`bg-transparent border-b-2 border-${blackColor} border-opacity-65 focus:rounded pl-2 px-[49px] h-8 focus:outline-none focus:ring-1 focus:ring-${primaryColor} focus:border-none`}
//                 required
//               >
//                 <option>General Physician</option>
//                 <option>Eye Care</option>
//                 <option>Cardiologist</option>
//                 <option>Neurologist</option>
//                 <option>Gynecologist</option>
//                 <option>Orthopedic</option>
//                 <option>Urologist</option>
//                 <option>Dentist</option>
//                 <option>Psychotherapist</option>
//               </select>
//             </div>

//             <div className="flex flex-col justify-normal items-start gap-3">
//               <label>Gender*:</label>
//               <select
//                 name="gender"
//                 id=""
//                 value={adminData.gender}
//                 onChange={handleOnChange}
//                 placeholder="Select Gender"
//                 className={`bg-transparent border-b-2 border-${blackColor} border-opacity-65 focus:rounded pl-2 px-[120px] h-8 focus:outline-none focus:ring-1 focus:ring-${primaryColor} focus:border-none`}
//                 required
//               >
//                 <option>Male</option>
//                 <option>Female</option>
//                 <option>Other</option>
//               </select>
//             </div>
//           </div>

//           <div className="w-full flex flex-row justify-between items-start gap-6 max-sm:flex-col">
//             <div className="flex flex-col gap-3">
//               <label>Experience*:</label>
//               <input
//                 type="number"
//                 name="experience"
//                 value={adminData.experience}
//                 onChange={handleOnChange}
//                 placeholder="Enter Experience"
//                 className={`bg-transparent border-b-2 border-${blackColor} border-opacity-65 focus:rounded pl-2 px-3 h-8 focus:outline-none focus:ring-1 focus:ring-${primaryColor} focus:border-none`}
//                 required
//               />
//             </div>

//             <div className="flex flex-col justify-normal items-start gap-3">
//               <label>Hospital Name*:</label>
//               <input
//                 type="text"
//                 name="hospitalName"
//                 value={adminData.hospitalName}
//                 onChange={handleOnChange}
//                 placeholder="Enter Hospital Name"
//                 className={`bg-transparent border-b-2 border-${blackColor} border-opacity-65 focus:rounded pl-2 px-3 h-8 focus:outline-none focus:ring-1 focus:ring-${primaryColor} focus:border-none`}
//                 required
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className={`mt-3 w-full  bg-blue-500 text-${whiteColor} text-[1.5rem] py-2 px-3 rounded`}
//           >
//             Add Admin
//           </button>
//         </form>
//       </div>

//   );
// };

// export default AddAdmin;

import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,
  Box,
} from "@mui/material";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  category: "",
  gender: "",
  experience: "",
  hospitalName: "",
};

const AddAdmin = () => {
  const [adminData, setAdminData] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAdminData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(adminData);
  };

  return (
    <Box
      sx={{
        minHeight: "200px",
        p: 4,
        bgcolor: "white",
        borderRadius: "16px",
        boxShadow: 3,
        
      }}
    >
      <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px",marginBottom: "18px", }}>
        Add Admin
      </h1>
      <form onSubmit={handleOnSubmit}>
        <Grid container spacing={4}>
          {/* First Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={adminData.firstName}
              onChange={handleOnChange}
              required
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={adminData.lastName}
              onChange={handleOnChange}
              required
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              name="email"
              value={adminData.email}
              onChange={handleOnChange}
              required
            />
          </Grid>

          {/* Phone Number */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              label="Phone Number"
              name="phoneNumber"
              value={adminData.phoneNumber}
              onChange={handleOnChange}
              required
            />
          </Grid>

          {/* Category */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Category*</InputLabel>
              <Select
                name="category"
                value={adminData.category}
                onChange={handleOnChange}
                required
              >
                <MenuItem value="General Physician">General Physician</MenuItem>
                <MenuItem value="Eye Care">Eye Care</MenuItem>
                <MenuItem value="Cardiologist">Cardiologist</MenuItem>
                <MenuItem value="Neurologist">Neurologist</MenuItem>
                <MenuItem value="Gynecologist">Gynecologist</MenuItem>
                <MenuItem value="Orthopedic">Orthopedic</MenuItem>
                <MenuItem value="Urologist">Urologist</MenuItem>
                <MenuItem value="Dentist">Dentist</MenuItem>
                <MenuItem value="Psychotherapist">Psychotherapist</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Gender */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Gender*</InputLabel>
              <Select
                name="gender"
                value={adminData.gender}
                onChange={handleOnChange}
                required
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Experience */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              label="Experience"
              name="experience"
              value={adminData.experience}
              onChange={handleOnChange}
              required
            />
          </Grid>

          {/* Hospital Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Hospital Name"
              name="hospitalName"
              value={adminData.hospitalName}
              onChange={handleOnChange}
              required
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ fontSize: "1.2rem", py: 1 }}
            >
              Add Admin
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddAdmin;
