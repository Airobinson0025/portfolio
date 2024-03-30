import React from "react"
import { IconType } from "react-icons"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"


interface Skill {
    title: string
    description: string
    icon: IconType
}

interface SkillsCardProps {
    skill: Skill
}


 const SkillsCard: React.FC<SkillsCardProps>  = ({ skill }) => {
    const Icon = skill.icon

   return (
     <Card className="max-w-4xl">
        <div className="flex items-center justify-between xl:justify-normal">
            <CardHeader>
                <CardTitle className="">{skill.title}</CardTitle>
            </CardHeader>
            <div className="hidden lg:inline">
                <Icon size={33} className='text-primary mr-4'/>
            </div>
        </div>
        <CardContent>
            <p>{skill.description}</p>
        </CardContent>
     </Card>
   )
 }

 export default SkillsCard