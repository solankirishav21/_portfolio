// eslint-disable-next-line no-unused-vars
import React from 'react'
import googledocs from "../assets/Projects/googledocs.png"
import mikart from "../assets/Projects/mikart.png"
import newsman from "../assets/Projects/newsman.png"
import textutils from "../assets/Projects/textutils.png"
import cricketquiz from "../assets/Projects/cricketquiz.png"
import carprice from "../assets/Projects/carprice.png"
import snake from "../assets/Projects/snake.png"
import emoji from "../assets/Projects/emoji.png"
import banana from "../assets/Projects/banana.png"

const Projects = () => {
    const projectArray = [
        {
            id:1,
            title:'Google Docs Clone',
            src:googledocs,
            href1: "https://google-docs-clone-solankirishav21.vercel.app/" ,
            href2: "https://github.com/solankirishav21/googleDocs-Clone" ,

        },
        {
            id:2,
            title:'Mi Kart',
            src:mikart,
            href1: "https://vimeo.com/750874712" ,
            href2: "https://github.com/solankirishav21/MI-KART" ,

        },
        {
            id:3,
            title:'New-Man',
            src:newsman,
            href1: "https://github.com/solankirishav21/News-Man" ,
            href2: "https://github.com/solankirishav21/News-Man" ,

        },
        {
            id:4,
            title:'Text-Utils',
            src:textutils,
            href1: "https://solankirishav21.github.io/text-utils/" ,
            href2: "https://github.com/solankirishav21/text-utils" ,

        },
        {
            id:5,
            title:'Indian Cricket Quiz(A Cli Game)',
            src:cricketquiz,
            href1: "https://replit.com/@Rishav-SinghSin/end-game?embed=1&output=1#index.js" ,
            href2: "https://github.com/solankirishav21/CLI-Indian-Cricket-Quiz" ,

        },
        {
            id:6,
            title:'Car Price Predictor',
            src:carprice,
            href1: "https://github.com/solankirishav21/TECH-A-THON-CAR-PRICE-PREDICTOR/tree/main" ,
            href2: "https://github.com/solankirishav21/TECH-A-THON-CAR-PRICE-PREDICTOR/tree/main" ,

        },
        {
            id:7,
            title:'Emoji Guesser',
            src:emoji,
            href1: "https://dtr7q.csb.app/" ,
            href2: "https://github.com/solankirishav21/emoji-guesser" ,

        },
        {
            id:8,
            title:'Snake Game',
            src:snake,
            href1: "https://solankirishav21.github.io/snake-game/" ,
            href2: "https://github.com/solankirishav21/snake-game" ,

        },
        {
            id:9,
            title:'Talk Banana',
            src:banana,
            href1: "https://talkbanana-rishavsinghsolanki.netlify.app/" ,
            href2: "https://github.com/solankirishav21/talk-banana" ,

        },
        
    ]
    return (
        <div
          name="projects"
          className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
        >
          <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <h2 className=' text-yellow-400 text-4xl font-semibold text-center underline decoration-gray-300 decoration-4 '>
           Projects
           </h2>
              <p className="py-6 text-center">Check out some of my work right here</p>
            </div>
    
            <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {projectArray.map(({ id, title, src, href1, href2 }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <h5 className='text-white text-center pt-2 font-base font-semibold'>{title}</h5>
                  <div className="flex items-center justify-center">
                    <a href={href1} target='_blank' rel="noreferrer">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                    </a>
                    <a href ={href2} target='_blank' rel="noreferrer">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Code
                    </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Projects