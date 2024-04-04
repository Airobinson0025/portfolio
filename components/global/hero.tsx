import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { useToast } from '../ui/use-toast'
import { ToastAction } from '@radix-ui/react-toast'



const Hero: React.FC = () => {
  const { toast } = useToast()
  
  return (
    <section className=''>
          <div className="h-[700px] relative w-full dark:bg-background bg-background  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex flex-col items-start justify-center">
          <div className="absolute pointer-events-none inset-0 flex flex-col items-center justify-center dark:bg-background bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <h1 className="lg:text-[5rem] md:text-7xl text-6xl relative z-20 pl-4 md:pl-8 pt-12">
            Aaron Robinson
          </h1>
          <h3 className="mt-2 relative z-20 pl-4 md:pl-8">
            Fullstack Developer
          </h3>
          <h4 className='text-primary z-20 pl-4 md:pl-8'>Transforming ideas into interactive wonders.</h4>
          <a href='/' download className='pl-4 md:pl-8'>
            <Button onClick={() => {
              toast({
                title: 'Thanks for downloading my resume!',
                description: 'I hope you find it helpful.',
                
              
              })
            }} className='relative mt-4 hover:scale-105 transition duration-300 text-md z-20 ' size='lg'>Download My Resume</Button>   
          </a>
          </div>
      </section>
  )
}

export default Hero