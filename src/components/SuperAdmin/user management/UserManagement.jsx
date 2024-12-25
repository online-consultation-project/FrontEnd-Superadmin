import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../Sidebar/Sidebar";
import UserCard from "./Usercard";
import { toast } from "react-toastify"; 
import Loader from "../../Reusable Component/Loader";

const UserComp = () => {
  const [userData, setUserData] = useState([]); 
  const [page, setPage] = useState(1); 
  const [loading, setLoading] = useState(false);

  const authToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true); 
      try {
        const response = await axios.get(
          `http://localhost:7000/user/getalluserdata`,
          {
            params: {
              page: page,
              limit: page === 1 ? 12 : 12,
            },
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );
        setUserData((prevData) => [...prevData, ...response.data]); 
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchUsers(); 
  }, [page, authToken]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); // Increment page to load more users
  };

  // Handle deletion and remove the user from state
  const handleDeleteProduct = (userId) => {
    setUserData((prevData) => prevData.filter((user) => user._id !== userId));
  };

  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full sm:h-screen sm:w-72 w-full">
        <Sidebar />
      </div>
      <div className="p-6 bg-gray-200 sm:ml-72 overflow-x-scroll flex-1 ml-0 max-sm:mt-16">
        <div className=" bg-gray-200 w-full h-full">
          <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">
            User Management
          </h1>
          <div className="grid grid-cols-4 gap-3 max-[520px]:grid-cols-1 max-sm:grid-cols-2 sm:max-[800px]:grid-cols-1 max-lg:grid-cols-2 lg:max-xl:grid-cols-3 max-[1200px]:grid-cols-2 max-[1550px]:grid-cols-4">
            {userData.map((value) => (
              <UserCard
                key={value._id}
                user={value} // Pass the user object to UserCard
                onDelete={handleDeleteProduct} // Pass the delete function to UserCard
              />
            ))}
          </div>
          {/* Load More Button */}
          <div className="flex justify-center mt-4">
            {!loading && (
              <button
                onClick={handleLoadMore}
                className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-lg"
              >
                Load More
              </button>
            )}
            {loading && <Loader/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComp;

