"use client";

import UniForm from "@/components/uniComponents/UniForm";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const signUpSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const signUpInputs = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", placeholder: "Your email" },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Your password",
  },
  {
    name: "confirmPassword",
    label: "Confirm password",
    type: "password",
    placeholder: "Confirm your password",
  },
  { name: "button", text: "Sign Up", type: "submit" },
  { type: "link", label: "Already have an account? Sign in", href: "/sign-in" },
];

// export type SignUpSchema = z.infer<typeof signUpSchema>;

const SignUpForm = () => {
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleCredentialsSignUp = async (
    values: z.infer<typeof signUpSchema>
  ) => {
    console.log("Form submitted:", values);
    await authClient.signUp.email(
      {
        email: values.email,
        password: values.password,
        name: values.name,
      },
      {
        onRequest: () => {
          setPending(true);
          new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
            toast(
              "Your account has been created. Check your email for a verification link."
            )
          );
        },
        onSuccess: () => {
          toast(
            "Your account has been created. Check your email for a verification link."
          );
          setPending(false);
          router.replace(`/dashboard`);
        },
        onError: (ctx) => {
          console.log("error", ctx);
          toast(ctx.error.message ?? "Something went wrong.");
        },
      }
    );
    setPending(false);
  };

  const defaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }

  return (
    <UniForm
      inputs={signUpInputs}
      formSchema={signUpSchema}
	  defaultValues={defaultValues}
      inputForm={signUpForm}
      action={handleCredentialsSignUp}
      pending={pending}
    />
  );
};

export default SignUpForm;
