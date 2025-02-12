'use client';

import { Benefits } from "@/components/Benefits";
import { Contact } from "@/components/Contact";
import { Vehicles } from "@/components/Vehicles";
import { Depoiments } from "@/components/Depoiments";
import { MainPage } from "@/components/template/MainPage";
import { useRouter } from "next/navigation";
import { Search } from "@/components/Search";

function Home() {
  const router = useRouter();
  // imagem na cloud https://ibb.co/3s3wLM0
  // https://ibb.co/GCNXHsM

  return (
    <div className="container__homer">
      <MainPage>
        <Vehicles />
        <Benefits />
      </MainPage>
    </div>
  );

}

export default Home;
