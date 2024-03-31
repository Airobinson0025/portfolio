import React from 'react'
import SkillsCard from '../cards/skills-card'

type Skill = {
    title: string
    description: string
    subtitle: string
}

const Skills: React.FC = () => {

    const skillsArray: Skill[] = [
        {
            title: 'UI/UX Design',
            subtitle: 'Designing Intuitive Experiences',
            description: 'I love designing experiences that fun and intuitive for users. Experiences that are easy to use and visually appealing.',
        

        },
        {
            title: 'Frontend Development',
            subtitle: 'React.js Expertise',
            description: 'I develop the frontend of my apps using React.js. Im profiecient utilizing react hooks and fetching data from APIs.',
            

        },
        {
            title: 'Backend Development',
            subtitle: 'PostgreSQL Database Management',
            description: 'PostgreSQL is my go to database for my backend development. I use it to store and manage data for my applications.',

        },
        {
            title: 'Version Control',
            subtitle: 'Utilizing Github',
            description: 'I utilize Github for version control and collaboration on projects. I use it to manage my code and keep track of changes.',
            

        },
        {
            title: 'Research',
            subtitle: 'Staying Up to Date',
            description: 'I stay up to date with the latest technologies and trends in the industry. I love learning new things and expanding my knowledge.',
            

        }
    ]
 
    return (
    <section className='px-4 md:px-8 mt-14'>
        <h1 className='mb-14 pl-4'>My skills as a fullstack developer</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {skillsArray.map((skill, index) => (
            <SkillsCard key={index} skill={skill} />
        ))}
        </div>
    </section>
  )
}

export default Skills