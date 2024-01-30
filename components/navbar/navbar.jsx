"use client";

import { AuthContext } from "@/providers/authProvider";
import httpRequest from "@/utils/httpRequest";
import { useContext } from "react";
import toast from "react-hot-toast";

const AppNavbar = () => {
  const { checkAuthStatus, isLoggedIn } = useContext(AuthContext);

  const logout = async () => {
    try {
      const { success, message } = await httpRequest({
        url: "/auth/logout",
        method: "POST",
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
    <nav className="bg-[#eeeeee] text-primary px-5 py-3 md:px-20">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-2xl tracking-wider my-1">
          CARGO LINKER
        </h4>
        {isLoggedIn && (
          <button className="primary-button" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default AppNavbar;
