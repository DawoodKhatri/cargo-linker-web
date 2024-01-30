"use client";
import { STATIC_ROUTES } from "@/constants/routes";
import { USER_ROLES } from "@/constants/userRoles";
import httpRequest from "@/utils/httpRequest";
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [authStatus, setAuthStatus] = useState({
    isLoggedIn: false,
  });

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    const { success, data: { role } = { role: null } } = await httpRequest({
      url: "/auth/details",
    });
    if (success && role === USER_ROLES.admin) {
      setAuthStatus({ isLoggedIn: true });
      if (!STATIC_ROUTES.includes(pathname)) {
        if (pathname === "/admin") router.replace("/admin/verifications");
      }
    } else {
      setAuthStatus({ isLoggedIn: false });
      if (!STATIC_ROUTES.includes(pathname)) {
        if (pathname !== "/admin" && pathname.includes("/admin"))
          router.replace("/");
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...authStatus,
        checkAuthStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
