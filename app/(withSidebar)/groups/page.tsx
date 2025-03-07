import React from "react";

import AppPageWithSidebarWrap from "@/components/app-page-with-sidebar-wrap";

const Groups = async () => {
  return (
    <AppPageWithSidebarWrap
      breadcrumbs={[{ title: "Admin" }, { title: "Groups" }]}
    >
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-8">
        Groups
      </div>
    </AppPageWithSidebarWrap>
  );
};

export default Groups;
