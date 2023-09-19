import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6 justify-end flex flex-col">
      <hr className="my-6 border-blueGray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-6/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © <span id="get-current-year">2023</span>
            <a
              href="https://www.creative-tim.com/product/notus-js"
              className="text-blueGray-500 hover:text-gray-800"
              target="_blank"
            >
              {" "}
              created by Khash-Erdene Bolor-Erdene.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
