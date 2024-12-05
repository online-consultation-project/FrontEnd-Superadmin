import React, { useState } from "react";
import { Grid, TextField, Button, MenuItem, Typography } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const categories = [
  "Medications",
  "Vitamins & Supplements",
  "Personal Care",
  "Mother & Baby Care",
  "Medical Devices",
  "Health & Wellness",
  "Ayurvedic & Herbal Products",
  "Fitness & Nutrition",
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
  description: "",
  image: null,
};

const ProductAddForm = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({ ...formData, 
      [name]: type === "file" ? files[0] : value });
  };

  // const handleFileChange = (e) => {
  //   setFormData({ ...formData, image: e.target.files[0] });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData2 = new FormData();
    Object.keys(formData) .forEach((key) => {formData2.append(key, formData[key])})

    try {
      await axios
        .post("http://localhost:7000/pharmacy/product", formData2,{
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then((res) => {
          toast.success(res.data.message);
          setFormData(initialState);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
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
              //   label="Expire Date"
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
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              className="bg-blue-500 w-full h-12"
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ProductAddForm;
