import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-2xl mt-10">
        I am a meticulous fullstack web developer living in Toronto, Ontario. I got my interests in Programming from 12th standard, That's why I did my Graduation and Post-graduation in computer science. Now, Coding has become my passion and I love seeing the results of my efforts.
        </p>

        <br />

        <p className="text-2xl">
          Moreover, I have worked as a web developer and having hands-on experience with Html,Css,Javascript,Reactjs etc. I have worked on several projects individually as well as in team and built user-friendly UI components. I am passionate for developing user friendly, responsive and reactive solutions for clients.
        </p>
      </div>
    </div>
  );
};

export default About;
