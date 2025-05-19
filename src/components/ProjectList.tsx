import React from 'react'
import { Card, CardContent } from './ui/card'
import { Folder } from 'lucide-react'
import ProjectThumb from './ProjectThumb'

const projects = [
    {Name:'project1',Icon:<Folder />},
    {Name:'project2',Icon:<Folder />},
    {Name:'project3',Icon:<Folder />},
    {Name:'project4',Icon:<Folder />},
    {Name:'project5',Icon:<Folder />},
    {Name:'project6',Icon:<Folder />},
    {Name:'project7',Icon:<Folder />},
    {Name:'project8',Icon:<Folder />},
    {Name:'project9',Icon:<Folder />},
    {Name:'project10',Icon:<Folder />},
    {Name:'project11',Icon:<Folder />},
    {Name:'project12',Icon:<Folder />},
    {Name:'project13',Icon:<Folder />},
    {Name:'project14',Icon:<Folder />},
    {Name:'project15',Icon:<Folder />},
    {Name:'project16',Icon:<Folder />},
    {Name:'project17',Icon:<Folder />},
    {Name:'project18',Icon:<Folder />},
    {Name:'project19',Icon:<Folder />},
    {Name:'project20',Icon:<Folder />},
]

const ProjectList = () => {
  return (
    <Card className='flex gap-2 items-center text-background justify-center bg-white/30 backdrop-blur-sm border-none p-2'>
        <CardContent className='p-2 gap-2 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {projects.map((project,i) => <div key={i} className='flex gap-2 items-center'>
                <ProjectThumb project={project} />
            </div>)}
        </CardContent>
    </Card>
  )
}

export default ProjectList