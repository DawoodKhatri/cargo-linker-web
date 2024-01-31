import { SERVICE_TYPES } from "@/constants/serviceTypes";
import moment from "moment";
import React from "react";

const CompanyCard = ({ name, email, establishmentDate, serviceType }) => {
    console.log(establishmentDate);
  return (
    <div className="bg-white rounded-lg p-5 shadow hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-300">
      <p className="text-primary font-semibold text-2xl">{name}</p>
      <p className="text-lg">Email: {email}</p>
      <p className="text-lg">
        Establishmen: {moment(establishmentDate).format("Do MMM YYYY")}
      </p>
      <div className="w-fit mt-1 flex justify-center items-center gap-2">
        <div className="bg-primary text-white rounded-full p-2">
          {SERVICE_TYPES[serviceType].icon}
        </div>
        <p>{SERVICE_TYPES[serviceType].label}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
