import React from 'react';
import myself from '../images/myself.jpg'

export default function About() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="about">
      <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-black pb-4 mb-16">
        About Me
      </div>
      <div className="md:flex items-center space-y-8 md:space-y-0">
        <div className="md:order-last basis-2/3 h-full">
          <img
            src={myself}
            className=" h-2/3 w-2/3 rounded-full mx-auto"
            alt=""
          ></img>
        </div>
        <div className="basis-2/3 space-y-4">
          <span className="text-gray-900 text-xl">Hi, I am </span>
          <div className="text-cyan-900 text-4xl font-bold">Amey Bhat</div>
          <div className="text-xl text-gray-900 font-semibold">Web Developer And Data Analyst</div>
          <div className="font-medium text-gray-900">
            <p>Highly skilled Full Stack MERN 
          (MongoDB, Express.js, React.js, Node.js) 
          Developer with a proven track record of
           delivering innovative solutions. Combining a 
           deep understanding of the MERN stack with 
           exceptional problem-solving abilities, I am
            dedicated to crafting robust and user-centric 
            web applications. Seeking a challenging role
             where I can leverage my technical expertise, 
             passion for problem-solving, and collaborative
              nature to drive meaningful impact and 
              contribute to the success of a dynamic 
              organization.</p><br></br><br></br>

            <p>Also I am a Passionate Problem Solver looking for new ways to increase my problem solving abilities 
              by teaming you with similiar minded people
            </p>
                    </div>
        </div>
      </div>
      <div className="md:flex justify-between">
        <div className="py-10 flex items-center space-x-4 justify-center">
          {social.map((link) => {
            return (
              <a
                href={link.link}
                target={'_blank'}
                rel="noreferrer"
                className="relative rounded-full"
              >
                <img src={link.icon} className="h-10 w-10" alt=""></img>
              </a>
            );
          })}
        </div>
        <a
          className="p-2 cursor-pointer rounded-lg relative px-10 w-max flex items-center m-auto space-x-4 border bg-slate-200"
          href={'https://drive.google.com/file/d/1oRKYcPTk1-efkc4s_fnDW04mG7NVZTIi/view?usp=sharing'}
          target={'_blanck'}
          rel="noreferrer"
        >
          <div>Resume</div>
          <img
            className="h-6 w-6"
            alt=""
            src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
          ></img>
        </a>
      </div>
    </div>
  );
}

const social = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    link: 'https://www.linkedin.com/in/amey-bhat-6981801b5/',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    link: 'https://github.com/AmeyBhat190102',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384063.png',
    link: 'https://www.instagram.com/ameyzing_1901/',
  },
];
