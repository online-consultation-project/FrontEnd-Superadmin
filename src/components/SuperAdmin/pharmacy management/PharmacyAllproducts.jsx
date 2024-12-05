import axios from "axios";
import React, { useEffect, useState } from "react";

import ProductCard from "./productCard";
import { toast } from "react-toastify";
import { Button } from "../doctor management/SubCard";
import { Link } from "react-router-dom";

const PharmAllProducts = () => {
  const [products, setProducts] = useState([]);
  const authToken = localStorage.getItem("token");

  const fetchProducts = async () => {
    try {
      await axios
        .get("http://localhost:7000/pharmacy/product", {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((res) => {
          setProducts(res.data.findProduct);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="flex justify-end mr-3">
        <Link to={"/pharmacy/addproducts"}>
          <Button btnName={"+ Add Product"} />
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4 p-3 max-[810px]:grid-cols-1 max-lg:grid-cols-2 lg:max-xl:grid-cols-3 xl:grid-cols-4 ">
        {products.map((value) => (
          <ProductCard key={value._id} product={value} />
        ))}
      </div>
    </div>
  );
};

export default PharmAllProducts;
