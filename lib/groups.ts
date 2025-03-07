import prisma from "./prisma";

export const userIsAdmin = async (id: string | null): boolean => {
  if (!id) return false;
  const groups = await prisma.group.findMany({
    where: {
      name: "Admins",
      users: {
        some: {
          user: {
            id,
          },
        },
      },
    },
  });
  return groups.length > 0;
};
