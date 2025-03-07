"use client";
import IUser from "@/types/User";
import React from "react";
import AppUserForm from "./app-user-form";
import { useUser } from "@/context/UserContext";
import prisma from "@/lib/prisma";

const AppCurrenUserForm = () => {
  const userContext = useUser();
  const { user }: { user: IUser } = userContext;
  const dbUser = await prisma.user.findFirst({
    where: {
      id: user.id,
    },
  });
  return <AppUserForm user={dbUser}></AppUserForm>;
};

export default AppCurrenUserForm;
