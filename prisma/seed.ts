import { auth } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seedAuthUser() {
  console.log("Starting to Seed Admin User");
  const data = await auth.api.signUpEmail({
    body: {
      email: "admin@admin.com", // user email address
      password: "password123", // user password -> min 8 characters by default
      name: "Admin", // user display name
    },
  });
  console.log("Data", data);
}

async function main() {
  const admin = await prisma.user.findFirst({ where: { name: "Admin" } });
  if (!admin) await seedAuthUser();
  /*
Add additonal seeds here
*/
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
