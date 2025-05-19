import { Filter } from 'lucide-react'
import React from 'react'
import { Card, CardContent } from './ui/card'

const FilterPanel = () => {
  return (
    <Card className='flex gap-2 items-center text-background justify-center bg-white/30 backdrop-blur-sm border-none p-2'>
        <CardContent className='flex gap-2 items-center w-full'>
          <Filter />
        </CardContent>
    </Card>
  )
}

export default FilterPanel