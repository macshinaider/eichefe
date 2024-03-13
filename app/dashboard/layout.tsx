import HeaderDashboard from "@/components/dashboard/header/page";
import SideBarDashboard from "@/components/dashboard/sidebar/page";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex">
        <SideBarDashboard />
        <div className="flex flex-col w-screen">
          <HeaderDashboard />
          {children}
          
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
