import React from "react";
import ProductAddForm from "../../Form/ProductAddForm";

const PharmAddProducts = () => {
    return(
        <div className="bg-white rounded-lg shadow-sm shadow-slate-600 flex flex-col justify-center items-center p-3">
            <h1 className="align-middle text-2xl font-semibold text-blue-900">Add Product</h1>
            <ProductAddForm/>
        </div>
    )
}

export default PharmAddProducts;