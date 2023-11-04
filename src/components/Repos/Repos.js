import React from "react";

export default function Repos(props) {
    const reposList = [
        {
            image: '/assets/img/IncidentesBrasil2023.png',
            title: 'Incidentes Brasil 2023',
            descriptionBR: 'A ideia do projeto  foi identificar quais são os acidentes causados no Brasil e o Por que. Além de treinar habilidades em Python e suas bibliotecas para Ciência de Dados.',
            descriptionUS: 'The idea of the project was to identify what are the accidents caused in Brazil and Why. In addition to training skills in Python and its libraries for Data Science.',
            link: 'https://github.com/RenanMartinssantos/IncidentesBrasil2023'
        },
        {
            image: '/assets/img/whatspy.png',
            title: 'Whatspy',
            descriptionBR: 'Automação de Mensagem via Whatsapp diariamente puxando dados de uma planilha Excel, como mensagem e contatos.',
            descriptionUS: 'Daily Whatsapp Message Automation pulling data from an Excel spreadsheet, such as message and contacts.',
            link: 'https://github.com/renanmartinssantos/whatspy'
        },
        {
            image: '/assets/img/GarciaChanllange.png',
            title: 'Desafio Change RGB',
            descriptionBR: 'Desafio feito para que pudessemos treinar nossas habilidades de Matriz alterando cores em fotos.',
            descriptionUS: 'Challenge done so that we could train our Matrix skills by changing colors in photos.',
            link: 'https://github.com/renanmartinssantos/DesafioGarcia'
        },
    ]

    return (
        <>
        {reposList.map((repo) => (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-5 mt-5">
                <a href={repo.link} > 
                    <img className="rounded-t-lg" src={repo.image} alt="" />
                </a>
                <div className="p-5">
                    <a href={repo.link} target="_blank">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-poppins">{repo.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-poppins">{props.isEnglish ? repo.descriptionUS : repo.descriptionBR }</p>
                    <a href={repo.link} target="_blank" className="font-poppins inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-950 rounded-lg hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    {props.isEnglish ? "Find out more" : "Saiba mais" }
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        ))}
        </>
    )
}
