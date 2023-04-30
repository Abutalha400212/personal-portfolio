import React from "react";

export default function Footer() {
  return (
    <div class="bg-transparent rounded-lg shadow dark:bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span class="flex justify-center items-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://www.linkedin.com/in/abutalha2022/"
            target="_blank"
            class="hover:underline">
            Abu Talha™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
