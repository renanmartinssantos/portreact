import React from "react";

export default function Repos(props) {
    var reposList = [
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

    var harryList = [
        {
            image: '/assets/wizards/acceptanceletter.png',
            title: 'Quando fui chamado',
            descriptionBR: 'A sensação de abrir a carta e deparar com o brasão de Hogwarts, o convite para ingressar em uma escola de magia, e a oportunidade de vivenciar um mundo completamente diferente e encantador, seriam emocionantes.',
            descriptionUS: 'The feeling of opening the letter and coming across the Hogwarts crest, the invitation to join a school of magic, and the opportunity to experience a completely different and enchanting world would be exciting.',
            link: ''
        },
        {
            image: '/assets/wizards/setbooks.jpg',
            title: 'Minha primeira compra',
            descriptionBR: 'Receber a lista de compras de Hogwarts é algo realmente emocionante. No início, eu fiquei surpreso e até um pouco confuso. No entanto, a ideia de que estou prestes a entrar em um mundo repleto de magia e mistérios é absolutamente fascinante.',
            descriptionUS: "Receiving the Hogwarts shopping list is truly exciting. At first, I was surprised and even a bit confused. However, the idea that I'm about to enter a world full of magic and mysteries is absolutely fascinating.",
            link: ''
        },
        {
            image: '/assets/wizards/brickwall.jpg',
            title: 'Meu primeiro desafio',
            descriptionBR: 'À primeira vista, parecia uma parede sólida, e eu me perguntava se eu tinha entendido corretamente como fazer a travessia.Com um misto de determinação e empolgação, respirei fundo e, com minha varinha na mão, segui as instruções que havia recebido.',
            descriptionUS: 'At first glance, it seemed like a solid wall, and I wondered if I had understood correctly how to make the crossing. With a blend of determination and excitement, I took a deep breath and, with my wand in hand, followed the instructions I had received.',
            link: ''
        },
    ]
    var changeList = []
    {(props.isSecret ? changeList = harryList : changeList = reposList)}

    return (
        <>
        
        {changeList.map((repo) => (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-5 mt-5">
                <a href={repo.link} > 
                    <img className="rounded-t-lg" src={repo.image} alt="" />
                </a>
                <div className="p-5">
                    <a href={repo.link} target="_blank">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-poppins">{repo.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-poppins">{props.isEnglish ? repo.descriptionUS : repo.descriptionBR }</p>
                    {(props.isSecret ? ""
                     : <a href={repo.link} target="_blank" className="font-poppins inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-950 rounded-lg hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
                     {props.isEnglish ? "Find out more" : "Saiba mais" }
                         <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                         </svg>
                     </a> )}
                </div>
            </div>
        ))}
        </>
    )
}
