import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

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
  const [updated, setUpdated] = useState(false);

  console.log(adminData);
  const { id } = useParams();
  //  console.log(id);

  const navigate = useNavigate();

  console.log(adminData);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAdminData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const authToken = localStorage.getItem("token");
    try {
      updated
        ? await axios
            .put(
              `http://localhost:7000/admin/addadmin/?objId=${id}`,
              adminData,
              {
                headers: { Authorization: `Bearer ${authToken}` },
              }
            )
            .then((res) => {
              toast.success(res.data.message);
              navigate("/doctors/doctorslist");
              setAdminData(initialState);
            })
            .catch((err) => {
              toast.error(err.response.data.message);
            })
        : await axios
            .post("http://localhost:7000/admin/addadmin", adminData)
            .then((res) => {
              toast.success(res.data.message);
              setAdminData(initialState);
            })
            .catch((err) => {
              console.error("Error Response:", err.response.data);
              toast.error(err.response.data.message);
            });
    } catch (error) {
      console.log(error);
    }
  };

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
          setAdminData(res.data);
          console.log(res.data);
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
    if (id) {
      console.log("update");
      getByUpdate(id);
      setUpdated(true);
    } else {
      setUpdated(false);
    }
  }, [id]);

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
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          marginBottom: "18px",
        }}
      >
        {updated ? "Update Doctor" : "Add Doctor"}
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
              type="tel"
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
              {updated ? "Update Admin" : "Add Admin"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddAdmin;
