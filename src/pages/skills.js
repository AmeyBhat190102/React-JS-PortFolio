import React from 'react';

import { NextjsLine } from 'devicons-react';
import { ReactOriginalWordmark } from 'devicons-react';
import { NodejsOriginalWordmark } from 'devicons-react';
import { ExpressOriginalWordmark } from 'devicons-react';
import { ReduxOriginal } from 'devicons-react';
import { BootstrapPlainWordmark } from 'devicons-react';
import { TailwindcssPlain } from 'devicons-react';
import { MysqlOriginalWordmark } from 'devicons-react';
import { NumpyOriginal } from 'devicons-react';
import { PandasOriginalWordmark } from 'devicons-react';
import { PythonPlainWordmark } from 'devicons-react';
import { AnacondaOriginalWordmark } from 'devicons-react';
import { JavascriptOriginal } from 'devicons-react';
import { JavaOriginal } from 'devicons-react';
import { Css3OriginalWordmark } from 'devicons-react';
import { Html5OriginalWordmark } from 'devicons-react';
import { MongodbOriginalWordmark } from 'devicons-react';


import SkillComponent from '../components/SkillComponent';
export default function Skills() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="skills">
      <div className="text-4xl md:text-5xl text-center md:text-left font-medium text-gray-900 pb-4 mb-16">
        Skills, Languages, FrameWorks ...
      </div>

      <div className="flex flex-wrap justify-center items-center gap-7">
        {skills.map((skill) => {
          return (
              <SkillComponent icon ={skill.icon} skill={skill.skill} />
          );
        })}
      </div>
      
    </div>
  );
}

const skills = [
  
  {
    icon: <ReactOriginalWordmark size={100}/>,
    skill: 'ReactJS',
  },
  {
    icon: <NodejsOriginalWordmark size={100}/>,
    skill: 'Node JS',
  },
  {
    icon: <ExpressOriginalWordmark size={100}/>,
    skill: 'Express JS',
  },
  {
    icon: <ReduxOriginal size={100}/>,
    skill: 'Redux',
  },
  {
    icon: <BootstrapPlainWordmark size={100}/>,
    skill: 'Bootstrap',
  },
  {
    icon: <TailwindcssPlain size={100}/>,
    skill: 'Tailwind CSS',
  },
  {
    icon: <Css3OriginalWordmark size={100}/>,
    skill: 'CSS',
  },
  {
    icon: <AnacondaOriginalWordmark size={100}/>,
    skill: 'Anaconda',
  },
  {
    icon: <NextjsLine size={100}/>,
    skill: 'NextJS',
  },
  {
    icon: <JavaOriginal size={100}/>,
    skill: 'Java',
  },
  {
    icon: <JavascriptOriginal size={100}/>,
    skill: 'JavaScript',
  },
  {
    icon: <MongodbOriginalWordmark size={100}/>,
    skill: 'MongoDB',
  },
  {
    icon: <MysqlOriginalWordmark size={100}/>,
    skill: 'MySQL',
  },
  {
    icon: <PythonPlainWordmark size={100}/>,
    skill: 'Python',
  },
  {
    icon: <PandasOriginalWordmark size={100}/>,
    skill: 'Pandas',
  },
  {
    icon: <NumpyOriginal size={100}/>,
    skill: 'Numpy',
  },

  {
    icon: <Html5OriginalWordmark size={100}/>,
    skill: 'HTML',
  },
];
