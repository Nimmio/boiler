"use server";

import { authClient } from "@/lib/auth-client";

interface LoginParams {
  email: string;
  password: string;
}

export const login = async (params: LoginParams) => {
  const { email, password } = params;
  const session = await authClient.signIn.email({
    email,
    password,
  });

  console.log(session);
};
