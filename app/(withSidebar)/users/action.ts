"use server";

import prisma from "@/lib/prisma";
import { User } from "@prisma/client";

export async function updateUser(user: User): Promise<User> {
  return await prisma.user.update({
    where: { id: user.id },
    data: {
      ...user,
    },
  });
}
