"use client";
import CompanyCard from "@/components/verifications/companyCard";
import httpRequest from "@/utils/httpRequest";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AdminVerificationsPage = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getPendingVerifications();
  }, []);

  const getPendingVerifications = async () => {
    try {
      const {
        success,
        message,
        data: { companies } = {},
      } = await httpRequest({ url: "/admin/pendingVerificationCompanies" });

      if (success) {
        setCompanies(companies);
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="w-full min-h-[calc(100vh-64px)] p-10 md:px-20 bg-[#eeeeee]">
      {companies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
          {companies.map((company, index) => (
            <Link key={index} href={`/admin/verifications/${company._id}`}>
              <CompanyCard {...company} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl">
          No Companies Pending for Verifications
        </p>
      )}
    </div>
  );
};

export default AdminVerificationsPage;
