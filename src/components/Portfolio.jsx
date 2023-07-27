import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      vercel:'https://react-food-app-beige.vercel.app/',
      github:'https://github.com/sunil-dhi/React-Food-App',
    },
    {
      id: 2,
      src: reactParallax,
      vercel:'https://stopwatch-umber-seven.vercel.app/',
      github:'https://github.com/sunil-dhi/Stopwatch',
    },
    {
      id: 3,
      src: navbar,
      vercel:'https://react-p-portfolio-updated.vercel.app/',
      github:'https://github.com/sunil-dhi/ReactPPortfolioUpdated',
    },
    {
      id: 4,
      src: reactSmooth,
      vercel:'',
      github:'',
    },
    {
      id: 5,
      src: installNode,
      vercel:'https://ecommerce-frontend-eosin.vercel.app/',
      github:'https://github.com/sunil-dhi/EcommerceFrontend',
    },
    {
      id: 6,
      src: reactWeather,
      vercel: 'https://react-js-quiz-app-delta.vercel.app',
      github: 'https://github.com/sunil-dhi/ReactJs_Quiz-App'
    },
  ];

  return (
    <div
    name="portfolio"
    className="bg-gradient-to-b pt-[50px] from-black to-gray-800 w-full text-white md:h-screen"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src,vercel,github }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <a href={vercel}><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button></a>
              <a href={github}><button onClick={vercel} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code
              </button></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Portfolio;
