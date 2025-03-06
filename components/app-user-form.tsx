"use client";

import { useUser } from "@/context/UserContext";
import IUser from "@/types/User";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import ImageUpload from "./image-upload";

const MAX_FILE_SIZE = 50000000;
const ACCEPTED_IMAGE_TYPES = [
  "data/image",
  "image/jpg",
  "image/png",
  "image/webp",
];

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  avatar: z.any(),
});

const AppUserForm = () => {
  const userContext = useUser();
  const { user }: { user: IUser } = userContext;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("values", values);
    authClient
      .updateUser({
        name: values.name,
        image: values.avatar,
      })
      .then((responseData) => {
        if (!responseData.error) {
          userContext.updateUser({
            ...user,
            name: values.name,
            avatar: values.avatar,
          });
        }
      });
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            disabled
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="avatar"
            disabled
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ImageUpload {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AppUserForm;
