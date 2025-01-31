
import { Title } from "@/components/Title";
import { IconDashboard } from '@tabler/icons-react';
import Skeleton from "react-loading-skeleton";

export default function Home() {
  return (
    <main className="container__main">
      <Title icon={IconDashboard} primary="Estatisticas" secondary="informações da oficina" />
    </main>
  );
}