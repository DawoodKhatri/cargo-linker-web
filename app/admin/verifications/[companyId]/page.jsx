"use client";
import { SERVICE_TYPES } from "@/constants/serviceTypes";
import httpRequest from "@/utils/httpRequest";
import moment from "moment";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AdminCompanyVerificationPage = ({ params: { companyId } }) => {
  const router = useRouter();
  const [company, setCompany] = useState();
  const [remark, setRemark] = useState("");

  useEffect(() => {
    getCompanyDetails();
  }, []);

  const getCompanyDetails = async () => {
    try {
      const {
        success,
        message,
        data: { company } = {},
      } = await httpRequest({ url: `/admin/company/${companyId}` });

      if (success) {
        setCompany(company);
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const acceptCompany = async () => {
    try {
      const { success, message } = await httpRequest({
        url: `/admin/company/${companyId}/accept`,
        method: "POST",
      });

      if (success) {
        toast.success(message);
        router.replace("/admin/verifications");
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const rejectCompany = async () => {
    try {
      const { success, message } = await httpRequest({
        url: `/admin/company/${companyId}/reject`,
        method: "POST",
        data: { remark },
      });

      if (success) {
        toast.success(message);
        router.replace("/admin/verifications");
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (!company) return <></>;

  const { name, email, establishmentDate, registrationNumber, serviceType } =
    company;

  return (
    <div className="w-full min-h-[calc(100vh-64px)] flex flex-col justify-center items-center p-10 md:px-20">
      <div className="w-full max-w-lg flex flex-col justify-center itemc gap-10">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center">
          {name}
        </h1>

        <table className="w-full rounded-lg md:text-xl [&>tbody>tr>td]:p-2 [&>tbody>tr>td]:px-5 [&>tbody>tr>td:first-child]:max-w-24 [&>tbody>tr>td:first-child]:font-semibold [&>tbody>tr:nth-child(odd)]:bg-primary-light outline outline-2 outline-primary-dark">
          <tbody>
            <tr>
              <td>Email Address</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Established</td>
              <td>{moment(establishmentDate).format("Do MMM YYYY")}</td>
            </tr>
            <tr>
              <td>Registration Number</td>
              <td>{registrationNumber}</td>
            </tr>
            <tr>
              <td>Service Type</td>
              <td>
                <div className="w-fit mt-1 flex justify-center items-center gap-2">
                  <div className="bg-primary text-white rounded-full p-2 [&>svg]:text-base">
                    {SERVICE_TYPES[serviceType]?.icon}
                  </div>
                  <p>{SERVICE_TYPES[serviceType]?.label}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>License</td>
              <td>
                <button className="primary-button !py-1 !text-base">
                  View File
                </button>
              </td>
            </tr>
            <tr>
              <td>Bank Statement</td>
              <td>
                <button className="primary-button !py-1 !text-base">
                  View File
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center items-center gap-5">
          <input
            placeholder="Remark"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
          <button className="border-button" onClick={acceptCompany}>
            Accept
          </button>
          <button className="primary-button" onClick={rejectCompany}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCompanyVerificationPage;
