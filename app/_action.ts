"use server"

import { FormDataSchema } from "@/lib/schema"

export async function addEntry(state:any,formData:FormData){
    const result = FormDataSchema.safeParse({
        name:formData.get('name'),
        message:formData.get('message'),
    })
    await new Promise(resolve => setTimeout(resolve, 1000))
    if(result.success){
        return {data:result.data}
    }
    if(result.error){
        return {error:result.error.format()}
    }
}