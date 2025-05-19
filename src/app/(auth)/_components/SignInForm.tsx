"use client"

import UniForm from '@/components/uniComponents/UniForm';
import { authClient } from '@/lib/auth-client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const signInSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(1, "Password is required"),
});

// type TProps = {
//     inputs: z.infer<typeof inputsSchema>	
// }

const signInInputs = [
    {name:"email", label:"Email", type:"email", placeholder:"Your email"},
    {name:"password", label:"Password", type:"password", placeholder:"Your password"},
    {name:"button", text:"Sign In", type:"submit"},
    {type:'link', label: "Don't have an account? Sign up", href: "/sign-up"}
  ]

const SignInForm = () => {
    const [pending, setPending] = useState(false);
    const router = useRouter()

    const signInForm = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
    });

	const handleCredentialsSignIn = async (values: z.infer<typeof signInSchema>) => {
		await authClient.signIn.email(
			{
				email: values.email,
				password: values.password,
			},
			{
				onRequest: () => {
					setPending(true);
				},
				onSuccess: () => {
					toast("Login successful. Redirecting to dashboard...");
					// router.replace('/verify-email?email='+values.email)
					router.replace(`/dashboard`)
				},
				onError: (ctx) => {
					console.log("error", ctx);
					toast(ctx.error.message ?? "Something went wrong.");
				},
			}
		);
		setPending(false);
	};
  
	return (
		<UniForm 
			inputs={signInInputs}
			formSchema={signInSchema}
			inputForm={signInForm}
			action={handleCredentialsSignIn} 
			pending={pending}
		/>
	)
}

export default SignInForm