import React from "react";

export default function Footer(prop) {
  return (
    <footer className={(prop.isDarkTheme ? "relative bg-black pt-2 pb-6" : "relative bg-white pt-2 pb-6")}>
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute -bottom-1 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className={(prop.isDarkTheme ? "text-black fill-current" : "text-white fill-current")}
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "}{" "}
              <a
                href="https://www.github.com/renanmartinssantos"
                className={(prop.isDarkTheme ? "text-white hover:text-gray-100" : "text-black hover:text-gray-100")}
              >
                Renan Martins
              </a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}