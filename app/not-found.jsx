import Link from "next/link";
import React from "react";
import { FaExclamationTriangle, FaExclamation } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-64px)] flex flex-col justify-center items-center bg-[#eeeeee]">
      <FaExclamationTriangle className="text-9xl text-primary mb-2" />
      <p className="font-semibold text-2xl">Page not found</p>
      <p className="text-xl">The page you are looking for does not exist</p>
      <Link href="/">
        <button className="primary-button mt-8">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
