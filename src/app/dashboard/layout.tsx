import './layout.css';
import { HeaderDashboard } from "@/components/dashboard/HeaderDashboard";
import { Sidebar } from '@/components/Sidebar';
import { MainPage } from "@/components/template/MainPage";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="dashlayout-container">
      <div className="content-layout">
        <Sidebar />
        <div className="content">
          {children}
        </div>
      </div>
    </main>
  );
}
