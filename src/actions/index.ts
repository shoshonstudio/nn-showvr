"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache";

export const getData = async (table:string, id?:string):Promise<any> => {
    try {
        const data = await prisma.post.findMany()
        return data;
    } catch (error) {
        console.error(error)
        return {error: error};
    }
}

export const addData = async (table:string, values:any):Promise<any> => {   
    console.log(table,values)
    try {
        await prisma.post.create({
            data:values
        });  
        revalidatePath('/post')
    } catch (error) {
        console.error(error)
        return {error: error};
    }
    return {success:"Item added successfully!"};
}

export const updateRecord = async (id:number, values:any):Promise<any> => {
    try {
        await prisma.post.update({
            where:{
                id:id
            },
            data:values
        });  
        revalidatePath('/post')
    } catch (error) {
        console.error(error)
        return {error: error};
    }
    return {success:"Item updated successfully!"};
}

export const deleteRecord = async (id:number):Promise<any> => {
    try {
        await prisma.post.delete({
            where:{
                id:id
            }
        });
        revalidatePath('/post')
        return {success:"Item deleted successfully!"};
    }
    catch(error){
        console.error(error)
        return {error:error};
    }
}