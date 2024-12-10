import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../doctor management/SubCard";



const ProductCard = ({product}) => {

    console.log(product)
    
    return (
      <div className={`min-h-[300px] flex flex-col gap-2 p-1 justify-center bg-white shadow-sm shadow-slate-600 rounded-xl`}>
        <img
          src={`http://localhost:7000/upload/${product.productFileName}`}
          alt="user Profile"
          className="h-44 w-full rounded-lg"
        />
        <div className="flex h-auto flex-col justify-center p-2 items-start gap-2">
          <div className=" w-full flex flex-col justify-center rounded-xl items-start gap-2">
            <span className="font-bold text-blue-900">{product.productName}</span>
            <span className="font-semibold text-slate-600">{product.productCategory}</span>
            <span className="font-semibold text-slate-600">{`Qtd: ${product.stockQuantity}`}</span>
            <span className="font-bold text-slate-600">{`Rs. ${product.price}`}</span>
          </div>
          <div className="w-full flex justify-between items-center gap-1">
            <Link to={`/pharmacy/updateproduct/${product._id}`}>
              <Button btnName={"Edit"} />
            </Link>
            <Button btnName={"Delete"} />
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;