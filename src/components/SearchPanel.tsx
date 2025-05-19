import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const SearchPanel = () => {
  return (
    <Card className='flex gap-2 items-center text-background justify-center bg-white/30 backdrop-blur-sm border-none p-2'>
        <CardContent className='flex gap-2 items-center w-full'>
          <Search /><Input placeholder="Search" />
        </CardContent>
    </Card>
  )
}

export default SearchPanel