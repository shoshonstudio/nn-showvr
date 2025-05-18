"use client"

import React, { useTransition } from 'react'
import { Button } from './ui/button'
import { Loader2, Trash2 } from 'lucide-react'
import { deleteRecord } from '@/actions'

const DeleteButton = ({id}:{id:number}) => {
  const [pending, startTransition] = useTransition()
  return (
    <Button 
      variant="ghost" 
      className='cursor-pointer w-10 text-foreground flex justify-between p-0' 
      onClick={() => startTransition(() => {
        deleteRecord(id)
      })} 
      disabled={pending}
    >
      {pending
      ? <Loader2 className='animate-spin' /> 
      : <Trash2 />}
    </Button>
  )
}

export default DeleteButton