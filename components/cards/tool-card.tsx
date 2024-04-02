import React from 'react'
import { IconType } from 'react-icons/lib'

type Tool = {
  icon: IconType
  name: string
  proficiency: string
}

type ToolCardProps = {
  tool: Tool
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const Icon = tool.icon
  return (
    <div className='flex flex-col items-center rounded-md py-6 border shadow-lg'>
      <Icon size={50} />
      <h3 className='text-lg font-bold mt-2'>{tool.name}</h3>
    </div>
  )
}

export default ToolCard