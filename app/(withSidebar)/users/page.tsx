import React from "react";

import AppPageWithSidebarWrap from "@/components/app-page-with-sidebar-wrap";
import prisma from "@/lib/prisma";
import AppUserTable from "@/components/app-user-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Users = async () => {
  const users = await prisma.user.findMany({});

  return (
    <AppPageWithSidebarWrap
      breadcrumbs={[{ title: "Admin" }, { title: "Users" }]}
    >
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-8">
        <Link href="/users/add">
          <Button>Add</Button>
        </Link>
        <AppUserTable users={users} />
      </div>
    </AppPageWithSidebarWrap>
  );
};

export default Users;
