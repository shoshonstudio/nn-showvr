"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const formSchema = z.object({
  email: z.string().email().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const EmailSignInForm = () => {
  const [btn, setBtn] = useState<any>(null)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  // useEffect(() => {
  //   form.setFocus('email')
  // },[])

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values, btn)
  }

  return (
    <Form {...form}>
      <form id="form" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center gap-2 text-sm">
                <FormLabel className="pt-1">Username</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="Email" {...field} className="bg-background border-2"/>
              </FormControl>
              
            </FormItem>
          )}
        />
        <div className="flex gap-2 mt-2 [&>*]:flex-1">
        <Button onClick={() => setBtn('first')}>Wyslij kod</Button>
        <Button onClick={() => setBtn('second')}>Wyślij link</Button>
        </div>
      </form>
    </Form>
  )
}

export default EmailSignInForm