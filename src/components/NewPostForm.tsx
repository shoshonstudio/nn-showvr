"use client"

import React, { useTransition } from 'react'
import { z } from 'zod'
import UniForm from './uniComponents/UniForm'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { addData } from '@/actions'

const postInputs = [
    { name: 'title', type: 'text', placeholder: 'Title' },
    { name: 'content', type: 'textarea', placeholder: 'Content' },
    { type: 'submit', text: 'Submit', name: 'submit' },
]

const NewPostForm = ({record,formAction,pending}:{record?:any,formAction?:any,pending?:boolean}) => {
    const [isPending, startTransition] = useTransition()

    const formSchema = z.object({
        title: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        content: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
    })

    let form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: record ?? {
            title: '',
            content: '',
        },
    });

    let action = null

    if(formAction){
        action = formAction
    } else {   
        action = async (values: any) => {
            console.log(values)
            startTransition(async () => {
                const result = await addData('post',values);
                if(result.success){
                    form.reset();
                }
                if(result.error){
                    console.log(result.error)
                }
            });
        }
    }
        
    return (
        <UniForm inputs={postInputs} inputForm={form} formSchema={formSchema} pending={pending ?? isPending} action={action} />
    )
}
export default NewPostForm