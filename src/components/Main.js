import React from "react";
import Repos from "./Repos/Repos";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function Main(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [isEnglish, setIsEnglish] = React.useState(false);
  const [isSecret, setIsSecret] = React.useState(false);
  const [isPlatform, setIsPlatform] = React.useState(false);
  const [countClick, setCountClick] = React.useState(0);
  const [isTextDefault, setTextDefault] = React.useState(false);

  const [countFive, setCountFive] = React.useState(0);
  const [countNine, setCountNine] = React.useState(0);
  const [countSeven, setCountSeven] = React.useState(0);
  const [countTwo, setCountTwo] = React.useState(0);
  const [isSecretRevealed, setSecretReveled] = React.useState(false);

  const countF = (isF, isSecret) => {
    console.log("Libere o Cadeado: ");
    if (isSecret === true) {
      if (countFive > 5) {
        setCountFive(0);
      }
      setCountFive((countFive) => countFive + 1);
    }
    resultCount();
  };

  const countN = (isN, isSecret) => {
    console.log("Libere o Cadeado: ");
    if (isSecret === true) {
      if (countNine > 9) {
        setCountNine(0);
      }
      setCountNine((countNine) => countNine + 1);
      console.log(countNine);
    }
    resultCount();
  };

  const countS = (isS, isSecret) => {
    console.log("Libere o Cadeado: ");
    if (isSecret === true) {
      if (countSeven > 7) {
        setCountSeven(0);
      }
      setCountSeven((countSeven) => countSeven + 1);
      console.log(countSeven);
    }
    resultCount();
  };

  const countT = (isT, isSecret) => {
    console.log("Libere o Cadeado: ");
    if (isSecret === true) {
      if (countTwo > 2) {
        setCountTwo(0);
      }
      setCountTwo((countTwo) => countTwo + 1);
      console.log(countTwo);
    }
    resultCount();
  };

  function resultCount() {
    console.log(countFive, countNine, countSeven, countTwo);
    if (
      countFive === 5 &&
      countNine === 9 &&
      countSeven === 7 &&
      countTwo === 2
    ) {
      setSecretReveled(!isSecretRevealed);
      console.log("Fallen in love with someone from Slytherin");
    } else {
    }
  }

  function activateAllorNot(isDarkTheme) {
    console.log(isDarkTheme);
    if (isDarkTheme === false) {
      setIsSecret(!isSecret);
      setIsDarkTheme(!isDarkTheme);
    } else {
      setIsSecret(!isSecret);
    }
  }

  const closePopup = () => {
    setSecretReveled(false);
  };

  function count(isDarkTheme, isPlatform) {
    if (isPlatform === true) {
      setCountClick(countClick + 1);

      if (countClick === 2) {
        activateAllorNot(isDarkTheme);
        setTextDefault(!isTextDefault);
        window.scrollTo(0, 0);
      } else if (countClick > 2) {
        setCountClick(0);
        setIsSecret(false);
        setIsDarkTheme(false);
        setTextDefault(false);
        setIsPlatform(false);
      }
    }
  }

  const portugueseFrases = {
    fraseHarry1:
      "Desesperado, Harry perguntou pelo trem que partia às onze horas, mas o guarda disse que não havia nenhum. Ao fim, o guarda se afastou, resmungando contra pessoas que o faziam perder tempo. ",
    fraseHarry2:
      "Estava perdido no meio da estação com uma mala que mal podia levantar, o bolso cheio de dinheiro de bruxo e uma corujona. ",
    fraseHarry3: "5972",
    frase1:
      "Sou Full Stack Developer especializado em PHP, ReactJS, NodeJS. Em transição para Análise de Dados. Trabalhei com desenvolvimento de aplicações para Excel, desenvolvi partes de sistemas, manutenções, reuniões para saber a dor do cliente e suas implementações, desenvolvi lojas em Woocommerce, sites instituicionais, api's, bots, etc. ",
    frase2:
      "Além das empresas que passei e que me deram direcionamento, fui freelancer. Aprendi nesse momento, o que é ter senso de dono, assim como, ter gestão de tempo. ",
    frase3:
      "Participei ativamente durante esse tempo, em equipes de eSports, atuando como capitão e gerenciando pessoas. E cá estou, renovando conhecimento, me graduando em Ciência de Dados pela Fatec Rubens Lara Baixada Santista e migrando para a área de análise de dados. ",
  };

  const englishFrases = {
    fraseHarry1:
      "Desperate, Harry asked about the train that left at eleven o'clock, but the guard said there was none. In the end, the guard walked away, grumbling about people who made him waste time. ",
    fraseHarry2:
      "Harry was lost in the middle of the station with a suitcase he could barely lift, his wizard money-filled pocket, and a big owl. ",
    fraseHarry3: "5972",
    frase1:
      "I'm a Fullstack Developer specialized in PHP, ReactJS. In transition to Data Analysis. I have experience in developing Excel applications, building system components, performing maintenance tasks, conducting client meetings to understand their needs, and implementing solutions. I have also developed Woocommerce websites, institutional website,  APIs, bots, and more. ",
    frase2:
      "After that, I kept refining and improving myself. Besides the companies I worked for, which provided me with guidance, I freelanced for a while. It was during this time that I learned what it means to have a 'sense of ownership,' as well as the importance of time management. ",
    frase3:
      "I actively participated during this time, in eSports teams, serving as a captain and managing people. And here I am, renewing my knowledge, graduating in Data Science from Fatec Rubens Lara Baixada Santista and transitioning to the field of data analysis. ",
  };

  return (
    <>
      <Navbar
        isDarkTheme={isDarkTheme}
        isEnglish={isEnglish}
        isSecret={isSecret}
      />
      <main>
        <section className="relative">
          <div
            className="pt-32 pb-32 flex content-center items-center justify-center border-none"
            style={{
              minHeight: "75vh",
            }}
          >
            <div
              className={
                (isSecret ? "hidden " : "") +
                "absolute top-0 w-full h-full bg-center bg-cover"
              }
            >
              <video
                autoPlay
                loop
                muted
                className="z-10 top-0 w-full h-full object-cover full"
              >
                <source
                  className="hidden"
                  src="./assets/video/bg-capa.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div
              className={
                (isSecret ? "" : "hidden ") +
                "absolute top-0 w-full h-full bg-center bg-cover"
              }
            >
              <video
                autoPlay
                loop
                muted
                className="z-10 top-0 w-full h-full object-cover full"
              >
                <source src="./assets/wizards/huff.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <span
              id="blackOverlay"
              className={
                isDarkTheme
                  ? "w-full h-full  backdrop-brightness-50 absolute bg opacity-90 bg-neutral-900"
                  : "w-full h-full  backdrop-brightness-50 absolute bg opacity-90 bg-white"
              }
            ></span>
            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <h1
                    className={
                      isDarkTheme
                        ? "text-white text-5xl body-font font-poppins"
                        : "text-black text-5xl body-font font-poppins"
                    }
                  >
                    Renan Martins
                  </h1>
                  <div className="w-full px-1 lg:order-2 flex justify-center pt-24 pb-52">
                    <div className="relative">
                      <img
                        alt="..."
                        src={
                          isSecret
                            ? "./assets/wizards/portrait.png"
                            : "./assets/img/profile.png"
                        }
                        className={
                          (isSecret
                            ? "outline-orange-500 "
                            : "outline-sky-900 ") +
                          "shadow-xl  rounded-full h-auto align-middle outline-2 outline border-none absolute -m-16 -ml-32 lg:-ml-26"
                        }
                        style={{ maxWidth: "250px" }}
                      />
                    </div>
                  </div>
                  <div
                    className={
                      (isSecret ? "bg-orange-500 " : "bg-sky-900 ") +
                      " badge text-white"
                    }
                  >
                    <div className="text-uppercase">
                      {isSecret
                        ? "Aluno de Hogwarts \u2022 Duelist"
                        : "Fullstack Developer \u2022 Data Analyst"}
                    </div>
                  </div>

                  <div className="w-full px-1 lg:order-2 flex justify-center mt-6 text-center ">
                    <p
                      className={
                        isDarkTheme
                          ? "text-sm text-white body-font font-poppins"
                          : "text-sm text-black body-font font-poppins"
                      }
                      style={{ maxWidth: "450px" }}
                    >
                      {isSecret
                        ? "Olá, sou Renan, um orgulhoso membro da Casa Huffpuffle em Hogwarts. Tenho usado " +
                          "minhas habilidades mágicas para desenvolver soluções encantadoras para a Web, Mobile e " +
                          "Desktop. Contudo, recentemente, decidi me aventurar em uma nova área da magia, a " +
                          "Ciência de Dados. Estou ansioso para explorar esse campo mágico e descobrir como posso " +
                          "aplicar meus conhecimentos para criar feitiços de dados incríveis!"
                        : isEnglish
                        ? "Hi, I'm Renan. I develop solutions for Web, Mobile and Desktop. Currently, I am transitioning my career to the area of Data Science."
                        : "Olá, eu sou Renan. Desenvolvo soluções para Web, Mobile e Desktop. Atualmente, estou em transição de carreira para a área de Ciência de Dados."}
                    </p>
                  </div>
                  {isSecret ? (
                    <div className="mt-12 flex justify-center">
                      <div>
                        <button
                          onClick={() => setIsEnglish(!isEnglish)}
                          title="Hufflepuff"
                          className="w-14 h-14 bg-orange-500 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-10 inline-block text-center "
                        >
                          <img
                            src={"/assets/wizards/hufflepuff.svg"}
                            alt="Hufflepuff"
                            className="absolute -ml-3 -mt-7 w-14 h-14"
                          />
                        </button>
                        <p className="-ml-10 mt-3 text-white">
                          {isEnglish ? "House" : "Casa"}
                        </p>
                        <p className="-ml-10 text-white">
                          {isEnglish ? "Hufflepuff" : "Lufa-Lufa"}
                        </p>
                      </div>

                      <div>
                        <button
                          onClick={() => setIsEnglish(!isEnglish)}
                          title="Siberian Cat"
                          className="w-14 h-14 bg-orange-500 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-10 inline-block text-center "
                        >
                          <img
                            src={"/assets/wizards/siberian.webp"}
                            alt="Siberian Cat"
                            className="absolute -ml-14 -mt-16 w-32 h-32"
                          />
                        </button>
                        <p className="-ml-10 mt-3 text-white">
                          {isEnglish ? "Patronus" : "Patrono"}
                        </p>
                        <p className="-ml-10 text-white">
                          {isEnglish ? "Siberian Cat" : "Gato Siberiano"}
                        </p>
                      </div>

                      <div>
                        <button
                          onClick={() => setIsEnglish(!isEnglish)}
                          title="Aspen Wand"
                          className="w-14 h-14 bg-orange-500 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none inline-block text-center "
                        >
                          <img
                            src={"/assets/wizards/wand.webp"}
                            alt="Wand"
                            className="absolute -ml-4 -mt-8 w-16 h-16"
                          />
                        </button>
                        <p className="mt-3 text-white">
                          {isEnglish ? "Wand" : "Varinha"}
                        </p>
                        <p className="text-white">Aspen</p>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-6">
                      <a
                        href="https://medium.com/@renanmartinssantos"
                        target="_blank"
                      >
                        <i className="fab fa-medium text-blue-400 bg-white text-lightBlue-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/renanmartinssantos/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin text-blue-600 bg-white text-lightBlue-600 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
                      </a>
                      <a
                        href="https://github.com/renanmartinssantos"
                        target="_blank"
                      >
                        <i className="fab fa-github bg-white text-blueGray-800 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              className="top-auto left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              style={{ height: "70px", bottom: "-1px" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className={
                    isDarkTheme
                      ? "text-black fill-current"
                      : "text-white fill-current"
                  }
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </div>
        </section>

        <section
          className={
            isDarkTheme
              ? "relative py-20 pt-20 pb-48 border-none bottom-0 bg-black"
              : "relative py-20 pt-20 pb-48 border-none bottom-0"
          }
        >
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px", bottom: "-1px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className={
                  isDarkTheme
                    ? "text-black fill-current"
                    : "text-white fill-current"
                }
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={
                    isPlatform
                      ? "https://images.unsplash.com/photo-1586796676789-f6fe8cc276f7?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      : "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  }
                />
                {isSecret ? (
                  ""
                ) : (
                  <button
                    onClick={() => setIsPlatform(!isPlatform)}
                    title={isEnglish ? "This has a secret" : "Há um segredo"}
                    className="absolute z-90 -mt-12 ml-2 flex justify-center items-center
                  text-white text-4xl"
                  >
                    <i className="fa-solid fa-feather-pointed"></i>
                  </button>
                )}
              </div>
              <div className="w-full lg:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3
                    className={
                      isDarkTheme
                        ? "text-3xl font-semibold pt-10 text-white font-poppins"
                        : "text-3xl font-semibold pt-10 font-poppins"
                    }
                  >
                    {isSecret
                      ? isEnglish
                        ? "King’s Cross."
                        : "King’s Cross."
                      : isEnglish
                      ? "A little about me"
                      : "Um pouco sobre quem sou"}
                  </h3>
                  <p
                    className={
                      isDarkTheme
                        ? "mt-4 text-lg leading-relaxed text-gray-400 font-poppins"
                        : "mt-4 text-lg leading-relaxed text-gray-600 font-poppins"
                    }
                  >
                    {isSecret
                      ? isEnglish
                        ? englishFrases.fraseHarry1
                        : portugueseFrases.fraseHarry1
                      : isEnglish
                      ? englishFrases.frase1
                      : portugueseFrases.frase1}
                  </p>
                  <p
                    className={
                      isDarkTheme
                        ? "mt-4 text-lg leading-relaxed text-gray-400 font-poppins"
                        : "mt-4 text-lg leading-relaxed text-gray-600 font-poppins"
                    }
                  >
                    {isSecret
                      ? isEnglish
                        ? englishFrases.fraseHarry2
                        : portugueseFrases.fraseHarry2
                      : isEnglish
                      ? englishFrases.frase2
                      : portugueseFrases.frase2}
                  </p>
                  <p
                    className={
                      isDarkTheme
                        ? "mt-4 text-lg leading-relaxed text-gray-400 font-poppins"
                        : "mt-4 text-lg leading-relaxed text-gray-600 font-poppins"
                    }
                  >
                    {isSecret
                      ? isEnglish
                        ? englishFrases.fraseHarry3
                        : portugueseFrases.fraseHarry3
                      : isEnglish
                      ? englishFrases.frase3
                      : portugueseFrases.frase3}
                  </p>
                  <h4
                    className={
                      isDarkTheme
                        ? "text-2xl font-semibold mt-5 text-white font-poppins"
                        : "text-2xl font-semibold mt-5 font-poppins"
                    }
                  >
                    {isSecret
                      ? isEnglish
                        ? "Think you'are being funny, do ya?"
                        : "Você se acha engraçado?"
                      : isEnglish
                      ? "Some personal skills"
                      : "Algumas habilidades pessoais"}
                  </h4>
                  <ul className="flex flex-wrap">
                    <ul className="list-none mt-6 mr-4">
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span
                              onClick={() => countF("Five", isSecret)}
                              className={
                                (isSecret ? "bg-orange-400 " : "bg-sky-900 ") +
                                "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-50 bg-sky-900 mr-3"
                              }
                            >
                              <i className="far fa-circle-dot"></i>
                            </span>
                          </div>
                          <div>
                            <h4
                              className={
                                isDarkTheme
                                  ? "text-white font-poppins"
                                  : "text-gray-600 font-poppins"
                              }
                            >
                              {isEnglish ? "Self-learning" : "Autodidatismo"}
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span
                              onClick={() => countN("Nine", isSecret)}
                              className={
                                (isSecret ? "bg-orange-400 " : "bg-sky-900 ") +
                                "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-50 bg-sky-900 mr-3"
                              }
                            >
                              <i className="far fa-circle-dot"></i>
                            </span>
                          </div>
                          <div>
                            <h4
                              className={
                                isDarkTheme
                                  ? "text-white font-poppins"
                                  : "text-gray-600 font-poppins"
                              }
                            >
                              {isEnglish ? "Communication" : "Comunicação"}
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span
                              onClick={() => countS("Seven", isSecret)}
                              className={
                                (isSecret ? "bg-orange-400 " : "bg-sky-900 ") +
                                "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-50 bg-sky-900 mr-3"
                              }
                            >
                              <i className="far fa-circle-dot"></i>
                            </span>
                          </div>
                          <div>
                            <h4
                              className={
                                isDarkTheme
                                  ? "text-white font-poppins"
                                  : "text-gray-600 font-poppins"
                              }
                            >
                              {isEnglish
                                ? "Time Management"
                                : "Gestão de Tempo"}
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul className="list-none mt-6 mr-4">
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span
                              onClick={() => countT("Two", isSecret)}
                              className={
                                (isSecret ? "bg-orange-400 " : "bg-sky-900 ") +
                                "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-50 bg-sky-900 mr-3"
                              }
                            >
                              <i className="fa-brands fa-php"></i>
                            </span>
                          </div>
                          <div>
                            <h4
                              className={
                                isDarkTheme
                                  ? "text-white font-poppins"
                                  : "text-gray-600 font-poppins"
                              }
                            >
                              PHP
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span
                              className={
                                (isSecret ? "bg-orange-400 " : "bg-sky-900 ") +
                                "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-50 bg-sky-900 mr-3"
                              }
                            >
                              <i className="fa-brands fa-node-js"></i>
                            </span>
                          </div>
                          <div>
                            <h4
                              className={
                                isDarkTheme
                                  ? "text-white font-poppins"
                                  : "text-gray-600 font-poppins"
                              }
                            >
                              NodeJS
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span
                              className={
                                (isSecret ? "bg-orange-400 " : "bg-sky-900 ") +
                                "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-50 bg-sky-900 mr-3"
                              }
                            >
                              <i className="fa-brands fa-react"></i>
                            </span>
                          </div>
                          <div>
                            <h4
                              className={
                                isDarkTheme
                                  ? "text-white font-poppins"
                                  : "text-gray-600 font-poppins"
                              }
                            >
                              ReactJS
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul className="list-none mt-6 mr-4">
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span
                              className={
                                (isSecret ? "bg-orange-400 " : "bg-sky-900 ") +
                                "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-50 bg-sky-900 mr-3"
                              }
                            >
                              <i className="fa-brands fa-python"></i>
                            </span>
                          </div>
                          <div>
                            <h4
                              className={
                                isDarkTheme ? "text-white" : "text-gray-600"
                              }
                            >
                              Python
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span
                              className={
                                (isSecret ? "bg-orange-400 " : "bg-sky-900 ") +
                                "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-50 bg-sky-900 mr-3"
                              }
                            >
                              <i className="far fa-chart-bar"></i>
                            </span>
                          </div>
                          <div>
                            <h4
                              className={
                                isDarkTheme
                                  ? "text-white font-poppins"
                                  : "text-gray-600 font-poppins"
                              }
                            >
                              PowerBI
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <button
                              onClick={() => count(isDarkTheme, isPlatform)}
                              title={
                                isPlatform
                                  ? isSecret
                                    ? "P.9 3/4"
                                    : "P.9 #/4"
                                  : ""
                              }
                              className=""
                            >
                              <span
                                className={
                                  (isSecret
                                    ? "bg-orange-400 "
                                    : "bg-sky-900 ") +
                                  "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-50 bg-sky-900 mr-3"
                                }
                              >
                                <i className="far fa-circle-dot"></i>
                              </span>
                            </button>
                          </div>
                          <div>
                            <h4
                              className={
                                isDarkTheme
                                  ? "text-white font-poppins"
                                  : "text-gray-600 font-poppins"
                              }
                            >
                              {isTextDefault
                                ? isEnglish
                                  ? "Platform 9 3/4"
                                  : "Plataforma 9 3/4"
                                : "English B1 By TOEIC"}
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={
            (isSecret ? "bg-orange-500 " : "bg-sky-900 ") +
            "pb-20 relative block"
          }
        >
          <div
            className="top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
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
                className={
                  (isSecret ? "text-orange-500 " : "text-sky-900 ") +
                  "fill-current"
                }
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 pt-16 pb-12">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <h1 className="text-white sm:pt-16 lg:pt-3 text-5xl body-font font-poppins">
                {isSecret
                  ? isEnglish
                    ? "My Story"
                    : "Minha História"
                  : "Portfolio"}
              </h1>
            </div>
            <div className="mt-6 flex flex-wrap justify-center">
              <Repos isEnglish={isEnglish} isSecret={isSecret} />
            </div>
          </div>
        </section>
      </main>
      <Footer isDarkTheme={isDarkTheme} isSecret={isSecret} />
      <button
        onClick={() => setIsDarkTheme(!isDarkTheme)}
        title="Dark Mode"
        className="fixed z-90 top-28 left-5 bg-black hover:text-black w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center
        text-white text-4xl hover:bg-white hover:drop-shadow-2xl "
      >
        <i className="fa-solid fa-circle-half-stroke"></i>
      </button>
      <button
        onClick={() => setIsEnglish(!isEnglish)}
        title="English Mode"
        className="fixed z-90 top-40 left-5 bg-white hover:text-black w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center
        text-white text-4xl hover:bg-white hover:drop-shadow-2xl "
      >
        {isEnglish ? (
          <span className="fi fi-br w-4 h-4"></span>
        ) : (
          <span className="fi fi-us w-4 h-4"></span>
        )}
      </button>
      {isSecretRevealed && (
        <div className="popup justify-center items-center object-center text-center">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0px"
              y="0px"
              fill="none"
              viewBox="0 0 100 125"
              style={{ enableBackground: "new 0 0 100 100" }}
              strokeWidth="1"
              stroke="green"
              height="300px"
              width="300px"
            >
            <path 
              className="path" 
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M48.3586807,93.0787125L50,94.21241l1.6413193-1.1336975c1.689827-1.1664047,41.3871918-28.9492569,41.3871918-60.7096329  c0-10.7503586-2.9842682-18.4064636-8.8704605-22.7551117c-4.5037537-3.3281136-9.7417374-3.96208-13.768959-3.8044343  c0.0008469-0.0030317,0.0011292-0.0054288,0.001976-0.0084605c-0.0056458,0.0026088-0.0257339,0.0067682-0.0349045,0.0098  c-3.5930634,0.144814-6.2174835,0.9160509-6.4410477,0.9840865L61.6592178,7.59905  c-2.3495979,0.770391-4.5120049,2.0240817-6.3480568,3.6803479l-1.8859634,1.7013884l1.9455414,0.3766289  c2.9619865,0.5734043,6.0214119,0.3811417,8.8882179-0.5588808l1.8933029-0.6207819  c2.0147018-0.4796352,9.3018646-1.8376007,14.601326,2.1018476c4.3125534,3.2059307,6.4992828,9.2917843,6.4992828,18.0894794  c0,25.2943649-29.8556519,49.2226563-37.2539978,54.7614059c-7.4006004-5.5342407-37.2517395-29.4354553-37.2517395-54.7614059  c0-8.7976952,2.1867332-14.8835487,6.4992857-18.0894794c4.6311569-3.4440212,10.7915325-2.8382559,13.6132183-2.3114548  c0.899765,0.5328655,2.4516182,1.3877192,4.3617592,2.1774979c0.6646423,0.7079954,1.9382858,1.2842903,1.9382858,1.2842903  s3.2889824,2.8649769,4.6838226,6.5902348C44.5056,23.2878895,45.69767,22.0315895,45.69767,22.0315895  s0.1838036-0.2794056-0.015934-0.7507191c0.618103-0.316349,1.0010796-1.2186527,1.0010796-1.2186527  s-0.9872589,0.6080227-1.2192879,0.5564842c0.0266533-0.3943253-1.5432472-4.8522558-2.33218-5.7479315  c0.9924049,0.5405502,2.4734001,1.1362333,3.2920151,1.4247332s1.7725945,0.9272614,1.7725945,0.9272614  s0.1230316,1.2280979-1.1173363,2.1534557c0,0,1.457798-0.3967934,1.8125725-1.1719074  c1.045002,0.3654881,2.6906929-0.6033688,2.9777107-1.0733452c0.2869492-0.4699745,0.0759315-0.8903866-0.8482246-1.3891277  c-0.92416-0.4986706-3.57967-2.7960243-4.8732681-5.0579138c-1.2936668-2.2618198-3.6348724-1.767662-4.1323433-1.9047909  c-0.3776894-0.1041336-2.1964645-0.7808957-5.0602417-1.5339422l0.0014801-0.0028906  C36.8179779,7.1998596,35.68647,6.8473425,33.9475021,6.525424c-0.0060616-0.0012689-0.0112801-0.0026789-0.0173416-0.0039482  l-0.0002136,0.0007758c-4.2280178-0.7804022-12.0452232-1.373054-18.0879993,3.0917153  C9.95576,13.9626169,6.9714918,21.618721,6.9714918,32.3690796C6.9714918,64.1294556,46.6688538,91.9123077,48.3586807,93.0787125z   M44.6220016,12.4266291c-0.5022659-0.6718969-1.2047615-0.9479885-1.2047615-0.9479885s-0.380085-0.084322-0.7366905-0.843996  C44.3442879,11.0574532,44.6220016,12.4266291,44.6220016,12.4266291z"
            />
            <text x="15" y="110" fill="green" stroke="green" font-size="8px" className="text-center font-poppins">Fallen in love with</text>
            <text x="" y="120" fill="green" stroke="green" font-size="8px" className="font-poppins">someone from Slytherin</text>
            </svg>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="green"
              height="300px"
              width="300px"
            >
              <path
                className="path"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg> */}
          </div>
          <div className="">
          <a onClick={closePopup}>
          <div class="custom-button" id="closeButton">
            <div class="bar bar1"></div>
            <div class="bar bar2"></div>
          </div>
          </a>

          </div>
        </div>
      )}
      {/* {(isPlatform ?  :"")} */}
    </>
  );
}
