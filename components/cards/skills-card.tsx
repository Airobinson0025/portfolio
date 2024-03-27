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

    let colors = [
        "text-sky-300",
        "text-pink-300",
        "text-green-300",
        "text-yellow-300",
        "text-red-300",
        "text-purple-300",
        "text-blue-300",
        "text-indigo-300",
        "text-violet-300",
      ];
      const getRandomColorClass = () => {
        return colors[Math.floor(Math.random() * colors.length)];
      };

      const randomColorsClass = getRandomColorClass()

   return (
     <Card className="max-w-4xl">
        <div className="flex items-center">
            <CardHeader>
                <CardTitle className={`${randomColorsClass}`}>{skill.title}</CardTitle>
            </CardHeader>
            {/* <Icon size={30} className='text-primary'/> */}
        </div>
        <CardContent>
            <p>{skill.description}</p>
        </CardContent>
     </Card>
   )
 }

 export default SkillsCard