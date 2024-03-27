import React from 'react'
import { Boxes } from './background-boxes'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'


type Props = {}

const Hero = (props: Props) => {
  return (
    <section className=''>
          <div className="h-[750px] relative w-full overflow-hidden bg-background flex flex-col items-start justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
    
          <Boxes />
          <h1 className={cn("lg:text-[5.25rem] md:text-7xl text-6xl relative z-20 px-4 md:px-8")}>
            Aaron Robinson
          </h1>
          <h3 className="mt-2 relative z-20 px-4 md:px-8">
            Fullstack Developer
          </h3>
          <h4 className='text-slate-500 z-20 px-4 md:px-8'>Transforming ideas into interactive wonders.</h4>
          <a href='/' download className='px-4 md:px-8'>
            <Button className='relative mt-4 hover:scale-105 transition duration-300 text-md z-20 ' size='lg'>Download My Resume</Button>   
          </a>
          </div>
      </section>
  )
}

export default Hero