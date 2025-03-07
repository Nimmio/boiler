import { auth } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seedAdminUser() {
  console.log("Starting to Seed Admin User");
  await auth.api.signUpEmail({
    body: {
      email: "admin@admin.com",
      password: "password123",
      name: "Admin",
    },
  });
}

const seedAdminGroup = async () => {
  await prisma.group.upsert({
    where: { name: "Admins" },
    update: {},
    create: {
      name: "Admins",
      users: {
        create: [
          {
            assignedBy: "Seed",
            user: {
              connect: {
                email: "admin@admin.com",
              },
            },
          },
        ],
      },
    },
  });
};

async function setSuperadmin() {
  await prisma.user.update({
    where: {
      email: "admin@admin.com",
    },
    data: {
      superadmin: true,
    },
  });
}

async function seedAdditionalUser() {
  await auth.api.signUpEmail({
    body: {
      email: "alice@test.com",
      password: "alice123",
      name: "Alice",
    },
  });

  await auth.api.signUpEmail({
    body: {
      email: "bob@test.com",
      password: "bob12345",
      name: "Bob",
    },
  });
}

async function main() {
  const admin = await prisma.user.findFirst({
    where: { email: "admin@admin.com" },
  });

  if (!admin) await seedAdminUser();
  await seedAdminGroup();
  await setSuperadmin();
  await seedAdditionalUser();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
