import AppPageWithSidebarWrap from "@/components/app-page-with-sidebar-wrap";
import AppUserForm from "@/components/app-user-form";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";

const UserView = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const isCurrentUser = user?.id === session?.user.id;

  return (
    <AppPageWithSidebarWrap
      breadcrumbs={[
        { title: "Admin" },
        { title: "Users", link: "/users" },
        { title: "View" },
        { title: user?.name || "" },
      ]}
    >
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-8">
        {user && <AppUserForm user={user} isCurrentUser={isCurrentUser} />}
      </div>
    </AppPageWithSidebarWrap>
  );
};
export default UserView;
