
import { Title } from "@/components/Title";
import { IconDashboard } from '@tabler/icons-react';

export default function Home() {

  return (
    <main className="container__main">
      <Title icon={IconDashboard} primary="Estatisticas" secondary="informações do site" />
    </main>
  );
}
