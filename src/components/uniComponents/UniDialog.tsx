"use client"

import { memo, ReactNode, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

type TProps = {
    title:string
    open?:boolean
    trigger:ReactNode
    children:ReactNode
    description?:string
}

const UniDialog = ({children, open, trigger, title, description}:TProps) => {
    const [openState, setOpen] = useState(false)
    return (
        <Dialog open={open ?? openState} onOpenChange={() => setOpen(!openState)}>
            <DialogTrigger className='cursor-pointer'>
                {trigger}
            </DialogTrigger>
            <DialogContent className='bg-background/50 backdrop-blur-sm border-none shadow-lg'>
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogDescription className='text-background' hidden={!description}>{description}</DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default memo(UniDialog)