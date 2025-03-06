import React from "react";

import AppPageWithSidebarWrap from "@/components/app-page-with-sidebar-wrap";
import AppUserForm from "@/components/app-user-form";

const Account = async () => {
  return (
    <AppPageWithSidebarWrap breadcrumbs={[{ title: "Home" }]}>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-8">
        <AppUserForm />
      </div>
    </AppPageWithSidebarWrap>
  );
};

export default Account;
