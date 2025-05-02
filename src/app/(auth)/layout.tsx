import UserSidebar from "@/components/Navigation/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <UserSidebar />
      <div className="w-full flex-grow">{children}</div>
    </SidebarProvider>
  );
}
