import { Contact } from "../../components/Contact";
import { Courses } from "../../components/Vehicles";
import { Depoiments } from "../../components/Depoiments";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";


function Home() {
    return (
        <main className="main__container">
            <Header />
            <Courses />
            <Depoiments />
            <Contact />
            <Footer />
        </main>
    );
}

export { Home }
