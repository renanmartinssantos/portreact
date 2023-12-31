import React from "react";
import { saveAs } from 'file-saver';

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const downloadFile = () => {
    saveAs(
        '/assets/files/RenanMartinsCV.pdf',
        'RenanMartinsCV.pdf'
      );
  };


  return (
    <nav
      className={
        (props.isDarkTheme
          ? "relative shadow-lg text-white bg-black shadow-lg flex flex-wrap items-center justify-between px-2 py-3"
          : "relative shadow-lg text-black bg-white shadow-lg flex flex-wrap items-center justify-between px-2 py-3" )
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              (props.isDarkTheme ? "text-white" : "text-black") +
              " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            href="mailto:contato@renanmartins.pro"
          >
           <img
              alt="..."
              src={(props.isSecret ? "./assets/img/logoHarry.png" : "./assets/img/logo512.png")}
              className="rounded-md"
              style={{ maxWidth: "50px" }}
            />
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.isDarkTheme ? "text-white" : "text-black") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            (props.isDarkTheme ? " lg:flex flex-grow items-center bg-black lg:bg-transparent lg:shadow-none " : " lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none ") +
            (navbarOpen ? " block rounded " : " hidden")
          }
          id="example-navbar-warning"
        >

          <ul className={(props.isDarkTheme
          ? "flex lg:flex-row list-none lg:ml-auto bg-black float-right"
          : "flex lg:flex-row list-none lg:ml-auto bg-white float-right")}
          >
          <li className="flex items-center">
              <button
                className={
                  (props.isDarkTheme
                    ? "bg-white text-gray-800 active:bg-gray-100 font-poppins"
                    : "bg-gray-100 text-gray-800 active:bg-gray-100 font-poppins") +
                  " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={downloadFile}
              >
               {(props.isEnglish ? "Download Resume" : "Download CV" )} 
              </button>
            </li>
            <li className="flex items-center">
              <a href="mailto:contato@renanmartins.pro">
              <button
                className={
                  (props.isSecret
                    ? "bg-orange-400 text-white active:bg-gray-100 font-poppins"
                    : "bg-sky-900 text-white active:bg-gray-100 font-poppins") +
                  " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                {(props.isSecret ? (props.isEnglish ? "Let's Duel!" : "Vamos Duelar!" ) : (props.isEnglish ? "Let's Talk!" : "Vamos Conversar!" ))}
              </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
