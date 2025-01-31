import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import './main-page.css';
import { Banner } from "@/components/Banner";

interface MainPageProps {
  children: React.ReactNode;
}

function MainPage({ children }: MainPageProps) {
  return (
    <div className="container__layout">
      <Header />
      <Banner />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export { MainPage };
