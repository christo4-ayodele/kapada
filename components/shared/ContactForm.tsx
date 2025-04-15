"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Input } from "@/components/ui/input";
import { contactSchema } from "@/lib/validator";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof contactSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      console.log("Message sent successfully", data);
    } catch (error) {
      console.error("Failed to send message", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="text-fun-green-900 flex flex-col">
          <div className="formfield justify-between lg:flex">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="max-lg:formfield lg:mr-10">
                  <FormLabel className="font-bold tracking-wider">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      className="input-field outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold tracking-wider">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      className="input-field outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="formfield">
                <FormLabel className="font-bold tracking-wider">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="you@email.com"
                    className="input-field outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="formfield">
                <FormLabel className="font-bold tracking-wider">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="xxx xxx xxx"
                    className="input-field outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="formfield">
                <FormLabel className="font-bold tracking-wider">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Leave us a message..."
                    className="input-field h-[200px] outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="radiotype"
            render={({ field }) => (
              <FormItem className="formfield">
                <FormLabel className="font-bold tracking-wider">
                  Service
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-y-0 space-x-3">
                      <FormControl>
                        <RadioGroupItem
                          value="freight"
                          className="text-fun-green-900"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Freight-forwarding
                      </FormLabel>
                    </FormItem>

                    <FormItem className="flex items-center space-y-0 space-x-3">
                      <FormControl>
                        <RadioGroupItem
                          className="text-fun-green-900"
                          value="agric"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Agricultural Services
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-y-0 space-x-3">
                      <FormControl>
                        <RadioGroupItem
                          value="plastic"
                          className="text-fun-green-900"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Plastic Recycling
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            className="formfield bg-fun-green-900 hover:bg-white-50 hover:text-sunset-orange-500 font-bold tracking-wider shadow-slate-800"
          >
            {form.formState.isSubmitting ? "Sending Message" : "Send Message"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
