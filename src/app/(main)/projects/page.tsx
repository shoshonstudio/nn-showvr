import BackLink from '@/components/BackLink'
import FilterPanel from '@/components/FilterPanel'
import ProjectList from '@/components/ProjectList'
import SearchPanel from '@/components/SearchPanel'
import React from 'react'

const LibraryPage = () => {
  return (
    <main className='h-screen font-[family-name:var(--font-audiowide)] space-y-2 container m-auto'>
        <SearchPanel />
        <FilterPanel />
        <ProjectList />
        <div className='group text-background/80 tracking-widest drop-shadow-md text-xl fixed top-2 left-2 flex gap-2 items-center'>
            <BackLink /><span className='opacity-0 group-hover:opacity-100 transition-all'>wróć</span>
        </div>
    </main>
  )
}

export default LibraryPage