import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./productCard";
import { toast } from "react-toastify";
import { Button } from "../doctor management/SubCard";
import { Link } from "react-router-dom";

const PharmAllProducts = () => {
  const [products, setProducts] = useState([]);
  const authToken = localStorage.getItem("token");

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:7000/pharmacy/product", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setProducts(response.data.findProduct);
    } catch (error) {
      toast.error("Failed to fetch products.");
    }
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product._id !== productId));
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
      <div className="grid grid-cols-4 gap-4 p-3 max-[810px]:grid-cols-1 max-lg:grid-cols-2 lg:max-xl:grid-cols-3 xl:grid-cols-4">
        {products.map((value) => (
          <ProductCard
            key={value._id}
            product={value}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default PharmAllProducts;
