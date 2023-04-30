import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-transparent rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="flex justify-center items-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link
            href="https://www.linkedin.com/in/abutalha2022/"
            target="_blank"
            className="hover:underline">
            Abu Talha™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
