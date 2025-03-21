import AppPageWithSidebarWrap from "@/components/app-page-with-sidebar-wrap";
import AppUserForm from "@/components/app-user-form";

const UsersAdd = async () => {
  return (
    <AppPageWithSidebarWrap
      breadcrumbs={[
        { title: "Admin" },
        { title: "Users", link: "/users" },
        { title: "Add" },
      ]}
    >
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-8">
        <AppUserForm user="new" />
      </div>
    </AppPageWithSidebarWrap>
  );
};
export default UsersAdd;
