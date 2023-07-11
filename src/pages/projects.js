import React from 'react';
import { useState } from 'react';


export default function Projects() {

  const images = ["",
  "https://media.istockphoto.com/id/1321147829/photo/word-bmi-on-chalkboard-fruits-vegetables-and-measuring-tape-healthy-diet-concept.webp?b=1&s=170667a&w=0&k=20&c=YW_RaruWrbXfdsFBOld7ddzlC51hjzQIaI3aiMaWuzs=",
  "https://plus.unsplash.com/premium_photo-1684179639963-e141ce2f8074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
  "https://media.istockphoto.com/id/1097434736/photo/tourist-in-olinda-pernambuco.webp?b=1&s=170667a&w=0&k=20&c=SaV-CSg2tKUPoGdN0OgA7UasHW6l32iwFGo2uoi0IcY=",
  "https://media.istockphoto.com/id/1388643874/photo/checklist.jpg?s=612x612&w=0&k=20&c=GDmE3YwpDxEIlovAFPDrFH2FZAVFZm0u7qNGrme802I=",
  "https://media.istockphoto.com/id/1178548493/photo/senior-healthcare-house-call.jpg?s=612x612&w=0&k=20&c=awvDWcSTduzL3iie4-1Gl5-4xhRElv2OeNhAPIqzsS8=",
  "https://media.istockphoto.com/id/1308840590/photo/business-woman-using-calculator-to-manage-finance.jpg?s=612x612&w=0&k=20&c=m0i72iNCGJ5XRtMiwkbWC7kjAks3iTiobnhHrmbEDOQ=",
  "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2l0aHVifGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
  "https://media.istockphoto.com/id/1193831054/photo/woman-hand-holding-model-house.jpg?s=612x612&w=0&k=20&c=hdheVy7Bn42rb2fDzTnuQYm07Zvf8Q9osURgm4Li_cU=",
  "https://media.istockphoto.com/id/1134890323/photo/woman-using-smartphone-the-concept-of-using-the-phone-is-essential-in-everyday-life.jpg?s=612x612&w=0&k=20&c=jthweCexMc9qz5DWse2ij_gsJDG9guIu4UyOiliMvJI=",
  ]
  
  const projects = [
    { id: 1, title: 'BMI Calculator', category: 'javascript', githubLink: 'https://github.com/AmeyBhat190102/BMICalculator', demoLink: 'https://ameybhat190102.github.io/BMICalculator/' },
    { id: 2, title: 'Full Stack Ecommerce App', category: 'react', githubLink: 'https://github.com/AmeyBhat190102/TechZoneFrontEnd', demoLink: 'http://melodious-bombolone-538c0d.netlify.app/' },
    { id: 3, title: 'Visit Goa', category: 'react', githubLink: 'https://github.com/AmeyBhat190102/VisitGoa', demoLink: 'https://melodious-salmiakki-f06e1f.netlify.app/' },
    { id: 4, title: 'Task Manager', category: 'javascript', githubLink: 'https://github.com/AmeyBhat190102/TaskManagerChanges', demoLink: 'https://ameybhat190102.github.io/TaskManagerChanges/' },
    { id: 5, title: 'Health Insurance Cross Sell Prediction', category: 'data-analytics', githubLink: 'https://github.com/AmeyBhat190102/Health-Insurance-Cross-Sell-Prediction', demoLink: 'https://github.com/AmeyBhat190102/Health-Insurance-Cross-Sell-Prediction' },

    { id: 6, title: 'Expense Manager', category: 'react', githubLink: 'https://github.com/AmeyBhat190102/Expense-Manager', demoLink: 'https://demo.project5' },
    { id: 7, title: 'GitHub Finder', category: 'react', githubLink: 'https://github.com/AmeyBhat190102/GitHub-Finder', demoLink: 'https://serene-arithmetic-3ec974.netlify.app/' },
    { id: 8, title: 'Real Estate App', category: 'react', githubLink: 'https://github.com/AmeyBhat190102/Real-Estate-Site-React-Beginner', demoLink: 'https://earnest-griffin-58a3b7.netlify.app/' },
    { id: 9, title: 'Mobile Price Prediction', category: 'data-analytics', githubLink: 'https://github.com/AmeyBhat190102/Mobile-Price-Prediction-Using-Classification-Algorithms', demoLink: 'https://github.com/AmeyBhat190102/Mobile-Price-Prediction-Using-Classification-Algorithms' },



  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className=" relative overflow-hidden" id="projects">
      <div className=" max-w-6xl mx-auto p-5 py-20" id="experience">
        <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-900 pb-4 mb-8">
          Projects
        </div>
        


        <div className="relative inline-block w-full mb-4">
          <select
            id="category"
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">All Projects</option>
            <option value="javascript">JavaScript Projects</option>
            <option value="react">React Projects</option>
            <option value="data-analytics">Data Analytics Projects</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm12-2a5 5 0 11-10 0 5 5 0 0110 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <br/><br/>


        <div id="project-list" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-gray-900 rounded-2xl shadow-md p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img src={images[project.id]} alt={project.title} className="mb-4 w-full" />
              <h2 className="text-white text-lg font-semibold mb-2">{project.title}</h2>
              <p className="mb-4 text-white">Category: {project.category}</p>
              <div className="flex flex-wrap gap-2">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Demo</a>
              </div>
            </div>
          ))}
        </div>
        <br/><br/><br/>

        <p className='flex justify-center items-center text-2xl md:text-4xl'>And Much More....</p>
    </div>
  </div>
  )}
