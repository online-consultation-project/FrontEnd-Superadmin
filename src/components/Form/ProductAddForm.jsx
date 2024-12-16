// import React, { useEffect, useState } from "react";
// import { Grid, TextField, Button, MenuItem, Typography } from "@mui/material";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate, useParams } from "react-router-dom";

// const categories = [
//   "Medications",
//   "Vitamins & Supplements",
//   "Personal Care",
//   "Mother & Baby Care",
//   "Medical Devices",
//   "Health & Wellness",
//   "Ayurvedic & Herbal Products",
//   "Fitness & Nutrition",
//   "Sexual Wellness",
//   "COVID-19 Essentials",
//   "Home Healthcare",
//   "Pet Care",
// ];

// const initialState = {
//   productName: "",
//   productCategory: "",
//   brandName: "",
//   strength: "",
//   price: "",
//   discount: "",
//   stockQuantity: "",
//   expireDate: "",
//   usageInstruction: "",
//   description: "",
//   image: null,
// };

// const fetchProduct = async (_id,setFormData) => {
//   const authToken = localStorage.getItem("token");
//   console.log("fetch");

//   try {
//     await axios
//       .get(`http://localhost:7000/pharmacy/productgetdata/?_id=${_id}`,{
//         headers: { Authorization: `Bearer ${authToken}`}
//       })
//       .then((res) => {
//         setFormData(res.data.findProduct);
//       })
//       .catch((err) => {
//         toast.error(err.response.data.message);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const ProductAddForm = () => {
//   const [formData, setFormData] = useState(initialState);

//   const [editData, setEditData] = useState(false);

//   const { _id } = useParams();

//   const navigate = useNavigate()

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData({ ...formData, [name]: type === "file" ? files[0] : value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData2 = new FormData();
//     Object.keys(formData).forEach((key) => {
//       formData2.append(key, formData[key]);
//     });

//     try {
//       editData ? await axios.put(`http://localhost:7000/pharmacy/product/?_id=${_id}`,formData2 ,{
//       headers: {
//         "Content-Type": "multipart/form-data",
//         Authorization : `Bearer ${localStorage.getItem("token")}`}
//     })
//     .then((res) => {
//       toast.success(res.data.message)
//       navigate("/pharmacy/products")
//       setFormData(initialState)
//     })
//     .catch((err) => {
//       toast.error(err.response.data.message)
//     }) : await axios
//         .post("http://localhost:7000/pharmacy/product", formData2, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         })
//         .then((res) => {
//           toast.success(res.data.message);

//           setFormData(initialState);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (_id) {
//       fetchProduct(_id,setFormData);
//       setEditData(true);
//       console.log("true");

//     } else {
//       setEditData(false);
//     }
//   }, [_id]);

//   return (
//     <div className="p-4">
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Product Name"
//               name="productName"
//               value={formData.productName}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               select
//               fullWidth
//               label="Product Category"
//               name="productCategory"
//               value={formData.productCategory}
//               onChange={handleChange}
//               required
//             >
//               {categories.map((category) => (
//                 <MenuItem key={category} value={category}>
//                   {category}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Brand Name"
//               name="brandName"
//               value={formData.brandName}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Strength"
//               name="strength"
//               value={formData.strength}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               type="number"
//               label="Price (in Rs)"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               type="number"
//               label="Discount (%)"
//               name="discount"
//               value={formData.discount}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               type="number"
//               label="Stock Quantity"
//               name="stockQuantity"
//               value={formData.stockQuantity}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               type="date"
//               //   label="Expire Date"
//               name="expireDate"
//               value={formData.expireDate}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Usage Instruction"
//               name="usageInstruction"
//               value={formData.usageInstruction}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <input
//               type="file"
//               name="image"
//               accept="image/*"
//               onChange={handleChange}
//               required
//               className="mt-4"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Description"
//               name="description"
//               multiline
//               rows={4}
//               value={formData.description}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               type="submit"
//               className="bg-blue-500 w-full h-12"
//             >
//              {editData ? 'Update' : 'Add'}
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </div>
//   );
// };

// export default ProductAddForm;

import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const categories = [
  "Medications",
  "Vitamins and Supplements",
  "Personal Care",
  "Mother and Baby Care",
  "Medical Devices",
  "Health and Wellness",
  "Ayurvedic and Herbal Products",
  "Fitness and Nutrition",
  "Sexual Wellness",
  "COVID-19 Essentials",
  "Home Healthcare",
  "Pet Care",
];

const initialState = {
  productName: "",
  productCategory: "",
  brandName: "",
  strength: "",
  price: "",
  discount: "",
  stockQuantity: "",
  expireDate: "",
  usageInstruction: "",
  subDescription:"",
  description: "",
  ratings:"",
  image: null,
  additionalFields: [], // Array to store dynamic input field data
};

const fetchProduct = async (_id, setFormData) => {
  const authToken = localStorage.getItem("token");

  try {
    await axios
      .get(`http://localhost:7000/pharmacy/productgetdata/?_id=${_id}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((res) => {
        setFormData(res.data.findProduct);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};

const ProductAddForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [editData, setEditData] = useState(false);

  const { _id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({ ...formData, [name]: type === "file" ? files[0] : value });
  };

  const handleAdditionalChange = (index, value) => {
    const updatedFields = [...formData.additionalFields];
    updatedFields[index] = value;
    setFormData({ ...formData, additionalFields: updatedFields });
  };

  const addAdditionalField = () => {
    setFormData((prevState) => ({
      ...prevState,
      additionalFields: [...prevState.additionalFields, ""],
    }));
  };

  const removeAdditionalField = (index) => {
    const updatedFields = formData.additionalFields.filter((_, i) => i !== index);
    setFormData({ ...formData, additionalFields: updatedFields });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData2 = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "additionalFields") {
        formData2.append(key, JSON.stringify(formData[key])); // Convert array to JSON string
      } else {
        formData2.append(key, formData[key]);
      }
    });

    try {
      editData
        ? await axios
            .put(
              `http://localhost:7000/pharmacy/product/?_id=${_id}`,
              formData2,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            )
            .then((res) => {
              toast.success(res.data.message);
              navigate("/pharmacy/products");
              setFormData(initialState);
            })
            .catch((err) => {
              toast.error(err.response.data.message);
            })
        : await axios
            .post("http://localhost:7000/pharmacy/product", formData2, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then((res) => {
              toast.success(res.data.message);
              setFormData(initialState);
            });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (_id) {
      fetchProduct(_id, setFormData);
      setEditData(true);
    } else {
      setEditData(false);
    }
  }, [_id]);

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Main Input Fields */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Product Name"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Product Category"
              name="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
              required
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {/* Other Inputs (similar to above)... */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand Name"
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Strength"
              name="strength"
              value={formData.strength}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              label="Price (in Rs)"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              label="Discount (%)"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              label="Stock Quantity"
              name="stockQuantity"
              value={formData.stockQuantity}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="date"
              name="expireDate"
              value={formData.expireDate}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Usage Instruction"
              name="usageInstruction"
              value={formData.usageInstruction}
              onChange={handleChange}
              required
            />
          </Grid>
          {/* File Upload */}
          <Grid item xs={12} sm={6}>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
              className="mt-4"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Sub Description"
              name="subDescription"
              value={formData.subDescription}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              label="Ratings"
              name="ratings"
              value={formData.ratings}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Dynamic Additional Fields */}
          <Grid item xs={12}>
            <Typography variant="h6">Additional Fields</Typography>
          </Grid>
          {formData.additionalFields.map((field, index) => (
            <Grid container spacing={4} key={index} alignItems="center">
              <Grid item xs={10}>
                <TextField
                  fullWidth
                  label={`Field ${index + 1}`}
                  value={field}
                  onChange={(e) => handleAdditionalChange(index, e.target.value)}
                  required
                  className=""
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  color="error"
                  onClick={() => removeAdditionalField(index)}
                >
                  <IoIosRemoveCircleOutline />
                </IconButton>
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="outlined"
              onClick={addAdditionalField}
              startIcon={<IoIosAddCircleOutline />}
            >
              Add Field
            </Button>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              className="bg-blue-900 w-full h-12"
            >
              {editData ? "Update" : "Add"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ProductAddForm;
