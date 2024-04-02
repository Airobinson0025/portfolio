import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"


type Skill = {
    title: string
    subtitle: string
    description: string
}

type SkillsCardProps = {
    skill: Skill;
}


 const SkillsCard: React.FC<SkillsCardProps>  = ({ skill }) => {

   return (
     <Card className="max-w-4xl shadow-lg hover:bg-primary hover:text-secondary transition duration-300">
       <CardHeader>
            <CardTitle className="">{skill.title}</CardTitle>
            <CardDescription>{skill.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
            <p>{skill.description}</p>
        </CardContent>
     </Card>
   )
 }

 export default SkillsCard