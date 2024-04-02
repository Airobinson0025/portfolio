"use client"
import React from 'react'
import { IconType } from 'react-icons/lib'
import ToolCard from '../cards/tool-card'
import { FaHtml5, FaReact } from 'react-icons/fa'
import { SiDjango, SiJavascript, SiNextdotjs, SiPostgresql, SiPrisma, SiPython, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'




type Tool = {
    icon: IconType
    name: string
    proficiency: string
}

const Tools: React.FC = () => {
  const toolsArray: Tool[] = [
    {
      icon: FaHtml5,
      name: 'HTML5',
      proficiency: 'profiecient'
    },
    {
      icon: SiTailwindcss,
      name: 'Tailwind CSS',
      proficiency: 'profiecient'
    },
    {
      icon: SiJavascript,
      name: 'JavaScript',
      proficiency: 'profiecient'
    },
    {
      icon: SiTypescript,
      name: 'TypeScript',
      proficiency: 'profiecient'
    },
    {
      icon: FaReact,
      name: 'React.js',
      proficiency: 'profiecient'
    },
    {
      icon: SiNextdotjs,
      name: 'Next.js',
      proficiency: 'profiecient'
    },
    {
      icon: SiDjango,
      name: 'Django',
      proficiency: 'learning'
    },
    {
      icon: SiPython,
      name: 'Python',
      proficiency: 'learning'
    },
    {
      icon: SiPostgresql,
      name: 'PostgreSQL',
      proficiency: 'profiecient'
    },
    {
      icon: SiPrisma,
      name: 'Prisma',
      proficiency: 'profiecient'
    }
  ]

  const proficientTools = toolsArray.filter(tool => tool.proficiency === 'profiecient')
  // console.log(proficientTools)
  const learningTools = toolsArray.filter(tool => tool.proficiency === 'learning')
  // console.log(learningTools)

  return (
    <section className='mt-32 flex flex-col items-center' id='tools'>
        <h1 className='text-center mb-10'>Tools and Technology</h1>
        <Tabs defaultValue='proficient' className='w-[400px] sm:w-[550px] md:w-[700px] lg:w-[850px] h-[750px] md:h-[600px]'>
          <TabsList className='grid w-full grid-cols-2 shadow-sm'>
            <TabsTrigger value='proficient'>Proficient</TabsTrigger>
            <TabsTrigger value='learning'>Learning</TabsTrigger>
          </TabsList>
          <TabsContent value='proficient' className='mt-8'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12'>
              {proficientTools.map((tool, index) => (
                <ToolCard key={index} tool={tool} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value='learning' className='mt-8'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-12'>
              {learningTools.map((tool, index) => (
                <ToolCard key={index} tool={tool} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
    </section>
  )
}

export default Tools