import React from 'react'

const ProjectThumb = ({project}:{project:any}) => {
  return (
    <div className='flex flex-col gap-2 bg-amber-400 p-2 rounded-md w-full'>
      {project.Icon}
      <span className='text-xl font-bold'>{project.Name}</span>
      <span className='text-xs'>{project.Description}</span>
      <span className='text-xs'>{project.Date}</span>
    </div>
  )
}

export default ProjectThumb