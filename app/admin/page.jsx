"use client";
import { AuthContext } from "@/providers/authProvider";
import httpRequest from "@/utils/httpRequest";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const AdminLogin = () => {
  const { checkAuthStatus } = useContext(AuthContext);

  const adminLogin = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const fields = {
      username: e.target[0].value,
      password: e.target[1].value,
    };

    if (!fields.username || !fields.password) {
      return toast.error("Please fill all the fields");
    }

    try {
      const { success, message } = await httpRequest({
        url: "/admin/login",
        method: "POST",
        data: fields,
      });

      if (!success) {
        toast.error(message);
      } else {
        toast.success(message);
        checkAuthStatus();
      }
    } catch (error) {
      toast.error(error.toString());
    }
  };
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#eeeeee]">
      <div className="w-full m-5 max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-center text-3xl font-semibold mb-8">Admin Login</h1>
        <form className="flex flex-col gap-4" onSubmit={adminLogin}>
          <div>
            <label className="block mb-1">Username</label>
            <input placeholder="Enter username" name="username" />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              placeholder="Enter password"
              type="password"
              name="password"
            />
          </div>
          <button className="primary-button mt-5" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
