"use client"

import React, { useState, useTransition } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Edit } from 'lucide-react'
import NewPostForm from './NewPostForm'
import { updateRecord } from '@/actions'

const UpdateDialog = ({record}:{record?:any}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isPending, startTransition] = useTransition()

    const action = async (values: any) => {
        startTransition(async () => {
            const result = await updateRecord(record.id,values);
            if(result.success){
                console.log(result.success)
                setIsOpen(false)
            }
            if(result.error){
                console.log(result.error)
            }
        });
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" className='cursor-pointer w-10 text-foreground flex justify-between p-0'>
                    <Edit className='w-5 h-5'/>
                </Button>
            </DialogTrigger>
            <DialogContent className='w-full max-w-md'>
                <DialogHeader>
                    <DialogTitle>Edit Post</DialogTitle>
                    <DialogDescription>modify post</DialogDescription>
                </DialogHeader>
                <NewPostForm record={record} formAction={action} pending={isPending}/>
            </DialogContent>
        </Dialog> 
    )
}

export default UpdateDialog