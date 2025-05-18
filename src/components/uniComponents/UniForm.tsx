"use client";

import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getDefaultsFromSchema } from "@/utils/zodActions";
import UniInput from "./UniInput";

export default function UniForm2({
  inputs,
  formSchema,
  inputForm,
  defaultValues,
  pending,
  action,
}: {
  inputs: any;
  formSchema: any;
  inputForm?: any;
  defaultValues?: any;
  pending?: boolean;
  action: any;
}) {
  let form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: defaultValues ?? getDefaultsFromSchema(formSchema),
  });

  if(inputForm){
    form = inputForm
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(action)} className="flex flex-col gap-2">
        {inputs.map((item: any, index: number) => {
          switch (item.type) {
            case "link":
              return (
                <Link
                  key={index}
                  href={item.href}
                  className="text-xs hover:underline block text-center"
                >
                  {item.label}
                </Link>
              );
            default:
              return (
                <FormField
                  key={index}
                  control={form.control}
                  name={item.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{item.label}</FormLabel>
						          {item.description && (<FormDescription className="text-xs p-0">{item.description}</FormDescription>)}
                      <FormControl>
                        <UniInput
                          item={item}
                          form={form}
                          field={field}
                          pending={pending}
                        />
                      </FormControl>
                      <FormMessage className="text-xs p-0"/>
                    </FormItem>
                  )}
                />
              );
          }
        })}
      </form>
    </Form>
  );
}
