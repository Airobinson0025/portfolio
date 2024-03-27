import React from 'react'
import { IconType } from 'react-icons'
import  { FaCode, FaReact } from 'react-icons/fa'
import SkillsCard from '../cards/skills-card'
import { SiPostgresql } from 'react-icons/si'

interface Skill {
    title: string
    description: string
    icon: IconType
}

const Skills: React.FC = () => {

    const skillsArray: Skill[] = [
        {
            title: 'UI/UX Design',
            description: 'I love designing experiences that fun and intuitive for users. Experiences that are easy to use and visually appealing.',
            icon: FaCode

        },
        {
            title: 'Frontend Development',
            description: 'I develop the frontend of my apps using React.js. Im profiecient utilizing react hooks and fetching data from APIs.',
            icon: FaReact

        },
        {
            title: 'Backend Development',
            description: 'PostgreSQL is my go to database for my backend development. I use it to store and manage data for my applications.',
            icon: SiPostgresql

        }
    ]
 
    return (
    <section className='px-8 mt-14'>
        <h1 className='mb-10'>My skills as a fullstack developer.</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {skillsArray.map((skill) => (
            <SkillsCard key={skill.title} skill={skill} />
        ))}
        </div>
    </section>
  )
}

export default Skills