import React from "react";
import Repos from "./Repos/Repos";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function Main(props) {
  
  const [isDarkTheme, setIsDarkTheme] = React.useState(props.isDarkTheme);
  const [isEnglish, setIsEnglish] = React.useState(false);

  return (
    <>
      <Navbar isDarkTheme={isDarkTheme} isEnglish={isEnglish}/>
      <main>
        <section className="relative">
        <div className="pt-32 pb-32 flex content-center items-center justify-center border-none"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover ">
            <video
              autoPlay
              loop
              muted
              className="z-10 top-0 w-full h-full object-cover full"
            >
              <source
                src="./assets/video/bg-capa2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            
          </div>
          
          <span id="blackOverlay" className={(isDarkTheme ? "w-full h-full  backdrop-brightness-50 absolute bg opacity-90 bg-neutral-900" : 
          "w-full h-full  backdrop-brightness-50 absolute bg opacity-90 bg-white")}></span>
          <div className="container relative mx-auto">
            
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <h1 className={(isDarkTheme ? "text-white text-5xl body-font font-poppins" : 
                                                  "text-black text-5xl body-font font-poppins")}>
                      Renan Martins
                    </h1>
                    <div className="w-full px-1 lg:order-2 flex justify-center pt-24 pb-52">
                        <div className="relative">
                            <img
                              alt="..."
                              src={"./assets/img/profile.png"}
                              className="shadow-xl  rounded-full h-auto align-middle outline-2 outline outline-sky-900 border-none absolute -m-16 -ml-32 lg:-ml-26"
                              style={{ maxWidth: "250px" }}
                            />
                        </div>
                    </div>
                    <div className="badge bg-sky-900 text-white"><div className="text-uppercase">Fullstack Developer &middot; Data Analyst</div></div>

                    <div className="w-full px-1 lg:order-2 flex justify-center mt-6 text-center ">
                      <p className={(isDarkTheme ? "text-sm text-white body-font font-poppins" : 
                                                  "text-sm text-black body-font font-poppins")} style={{ maxWidth: "450px" }}>
                      {(isEnglish ? 
                      'Hi, I am Renan. I develop solutions for Web, Mobile and Desktop. Currently, I am transitioning my career to the area of Data Science.' : 
                      'Olá, eu sou Renan. Desenvolvo soluções para Web, Mobile e Desktop. Atualmente, estou em transição de carreira para a área de Ciência de Dados.')}
                      </p>
                    </div>
                    <div className="mt-6">
                      <a href="https://medium.com/@renanmartinssantos" target="_blank"><i className="fab fa-medium text-blue-400 bg-white text-lightBlue-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i></a>
                      <a href="https://www.linkedin.com/in/renanmartinssantos/"  target="_blank"><i className="fab fa-linkedin text-blue-600 bg-white text-lightBlue-600 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i></a>
                      <a href="https://github.com/renanmartinssantos" target="_blank"><i className="fab fa-github bg-white text-blueGray-800 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i></a>
                    </div>
                </div>
              </div>
          </div>
          <div
            className="top-auto left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", bottom: "-1px"}}
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          
        </div>
        
        </section>


        <section className={(isDarkTheme ? "relative py-20 pt-20 pb-48 border-none bottom-0 bg-black" : 
          "relative py-20 pt-20 pb-48 border-none bottom-0")}>
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" , bottom: "-1px"}}
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
                className={(isDarkTheme ? "text-black fill-current" : 
                "text-white fill-current")}
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className={(isDarkTheme ? "text-3xl font-semibold pt-10 text-white" : 
                "text-3xl font-semibold pt-10")}>
                  {(isEnglish ? 
                      'A little about me' : 
                      'Um pouco sobre quem sou')}
                  </h3>
                  <p className={(isDarkTheme ? "mt-4 text-lg leading-relaxed text-gray-400" : 
                "mt-4 text-lg leading-relaxed text-gray-600")}>

                  {(isEnglish ? "I am a Fullstack Developer specialized in PHP, ReactJS. In transition to Data Analysis."+
                                "I worked with development of applications for Excel, I developed parts of a room reservation system and did maintenance." : 
                                "Sou Fullstack Developer especializado em PHP, ReactJS. Em transição para Análise de Dados." +
                                "Trabalhei com desenvolvimento de aplicações para Excel, desenvolvi partes de um sistema de reserva de sala e fiz manutenções.")}
                 
                  </p>
                  <p className={(isDarkTheme ? "mt-4 text-lg leading-relaxed text-gray-400" : 
                "mt-4 text-lg leading-relaxed text-gray-600")}>

                  {(isEnglish ? "After that, I kept refining and improving myself. Besides the companies I worked for, which provided me with guidance. " +
                                "I freelanced for a while. It was during this time that I learned what it means to have a 'sense of ownership,' " + 
                                "as well as the importance of time management. " : 
                                "Após isso, fui me aprimorando e melhorando. Além das empresas que passei e que me deram direcionamento, por um tempo, fui freelancer. " +
                                "Aprendi nesse momento, o que é ter senso de dono, assim como, ter gestão de tempo.")}
                  
                  </p>
                  <p className={(isDarkTheme ? "mt-4 text-lg leading-relaxed text-gray-400" : 
                "mt-4 text-lg leading-relaxed text-gray-600")}>
                  {(isEnglish ? "I actively participated during this time, in eSports teams, serving as a captain and managing people. " +
                                "And here I am, renewing my knowledge, graduating in Data Science from Fatec Rubens Lara Baixada Santista "+
                                "and transitioning to the field of data analysis." : 
                                "Participei ativamente durante esse tempo, em equipes de eSports, atuando como capitão e gerenciando pessoas. " +
                                "E cá estou, renovando conhecimento, me graduando em Ciência de Dados pela Fatec Rubens Lara Baixada Santista "+
                                "e migrando para área de análise de dados.")}  
                  </p>
                  <h4 className={(isDarkTheme ? "text-2xl font-semibold mt-5 text-white" : 
                "text-2xl font-semibold mt-5")}>
                  {(isEnglish ? "Some personal skills" : "Algumas habilidades pessoais")}
                  </h4>
                  <ul className="flex flex-wrap">
                  <ul className="list-none mt-6 mr-4">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-50 bg-sky-900 mr-3">
                            <i className="far fa-circle-dot"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className={(isDarkTheme ? "text-white" : "text-gray-600")}>
                            {(isEnglish ? "Self-learning" : "Autodidatismo")}
                            
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-50 bg-sky-900 mr-3">
                          <i className="far fa-circle-dot"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className={(isDarkTheme ? "text-white" : "text-gray-600")}>	
                          {(isEnglish ? "Communication" : "Comunicação")}
                          
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-50 bg-sky-900 mr-3">
                            <i className="far fa-circle-dot"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className={(isDarkTheme ? "text-white" : "text-gray-600")}>
                          {(isEnglish ? "Time Management" : "Gestão de Tempo")}
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="list-none mt-6 mr-4">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-50 bg-sky-900 mr-3">
                            <i className="fa-brands fa-php"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className={(isDarkTheme ? "text-white" : 
                "text-gray-600")}>
                            PHP
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-50 bg-sky-900 mr-3">
                          <i className="fa-brands fa-node-js"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className={(isDarkTheme ? "text-white" : 
                "text-gray-600")}>	
                          NodeJS
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-50 bg-sky-900 mr-3">
                            <i className="fa-brands fa-react"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className={(isDarkTheme ? "text-white" : 
                "text-gray-600")}>
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
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-50 bg-sky-900 mr-3">
                            <i className="fa-brands fa-python"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className={(isDarkTheme ? "text-white" : 
                "text-gray-600")}>
                          Python
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-50 bg-sky-900 mr-3">
                          <i className="far fa-chart-bar"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className={(isDarkTheme ? "text-white" : 
                "text-gray-600")}>	
                          PowerBI
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-50 bg-sky-900 mr-3">
                            <i className="far fa-circle-dot"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className={(isDarkTheme ? "text-white" : "text-gray-600")}>
                          English B1 By TOEIC
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

        <section className={(isDarkTheme ? "pb-20 relative block bg-sky-950" : "pb-20 relative block bg-sky-950")}>
          <div
            className="top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px"}} 
          >
            <svg
              className="absolute -bottom-4 overflow-hidden" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className={(isDarkTheme ? "text-sky-950 fill-current" : "text-sky-950 fill-current")}
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-12">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <h1 className="text-white sm:pt-16 lg:pt-3 text-5xl body-font font-poppins">
                    Portfolio
                  </h1>
              </div>
              <div className="mt-6 flex flex-wrap justify-center">          
                <Repos isEnglish={isEnglish}/>
              </div>  
          </div>
        </section>
        {/* Criar dois botões flutuantes para assim colocar darkmode e também mudar do Inglês para o Português e vice-versa */}
      </main>
      <Footer isDarkTheme={isDarkTheme}/>
      <button onClick={() => setIsDarkTheme(!isDarkTheme)} title="Dark Mode"
        className="fixed z-90 top-36 left-10 bg-black hover:text-black w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center
        text-white text-4xl hover:bg-white hover:drop-shadow-2xl "><i className="fa-solid fa-circle-half-stroke" ></i>
      </button>
      <button onClick={() => setIsEnglish(!isEnglish)} title="English Mode"
        className="fixed z-90 top-48 left-10 bg-white hover:text-black w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center
        text-white text-4xl hover:bg-white hover:drop-shadow-2xl ">{(isEnglish ? <span class="fi fi-br w-4 h-4"></span> : <span class="fi fi-us w-4 h-4"></span> )}
      </button>
    </>
  );
}
