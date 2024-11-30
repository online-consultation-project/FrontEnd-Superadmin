// 404Page.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
// import ErrorImage from "../../images/error-404.png"

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center gap-3"
      style={{ textAlign: "center" }}
    >
      <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="error 404"  className="w-[650px] h-[350px]"/>
      <p className="text-2xl mt-4">Oops! The page you're looking for doesn't exist.</p>
      <button
        className="bg-green-800 py-2 px-2 rounded-md text-white drop-shadow-xl"
        onClick={handleGoHome}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFoundPage;
