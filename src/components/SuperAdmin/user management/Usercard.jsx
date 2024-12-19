import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify"; // Import toast for notifications

const UserCard = ({ user, onDelete }) => {
  // Handle delete action
  const handleDelete = async () => {
    try {
      const authToken = localStorage.getItem("token");

      // Sending DELETE request
      const response = await axios.delete(
        `http://localhost:7000/user/delete/${user._id}`, // Use user._id here
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );

      if (response.status === 200) {
        toast.success("User deleted successfully!");
        onDelete(user._id); // Notify parent to remove user from the state
      }
    } catch (error) {
      toast.error("Failed to delete user.");
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="min-h-[400px] p-2 flex flex-col gap-2 justify-center shadow-sm shadow-slate-600 rounded-xl">
      <img
        src={`http://localhost:7000/upload/${user.profileFileName}`}
        alt="User Profile"
        className="h-48 w-full bg-slate-600 rounded-lg"
      />
      <div className="flex h-auto flex-col px-2 justify-center items-start gap-2">
        <div className="w-full flex justify-start items-center gap-3">
          <span className="text-sm">Name :</span>
          <span className="font-medium text-slate-600">{user.username}</span>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <span className="text-sm">Email :</span>
          <span className="text-sm font-semibold text-slate-600">{user.email}</span>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <span className="text-sm">Phone :</span>
          <span className="font-medium text-slate-600">{user.mobile}</span>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <span className="text-sm">Gender :</span>
          <span className="font-medium text-slate-600">{user.gender}</span>
        </div>
        <div className="w-full flex justify-between items-center gap-1 mt-1">
          <div>
            <button className="text-[15px] border border-blue-900 text-blue-900 rounded-lg p-1">
              Read More
            </button>
          </div>
          <div className="flex justify-between items-center gap-4">
            <FaEdit className="text-2xl text-blue-500" />
            <MdDelete
              className="text-2xl text-red-500 cursor-pointer"
              onClick={handleDelete} // Trigger delete function
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
