
import { IconBusinessplan, IconCertificate, IconCheck, IconDeviceDesktop } from '@tabler/icons-react';
import './benefits.css';

function Benefits() {
  return (
    <section className="benefits-container">
      <div className="benefits container">
        <h2>Beneficios</h2>
        <div className="benefit-card">
          <span><IconCheck size={40} /></span>
          <p>Veiculos revisados.</p>
        </div>
        <div className="benefit-card">
          <span><IconCheck size={40} /></span>
          <p>Tranferência por nossa conta.</p>
        </div>
        <div className="benefit-card">
          <span><IconCheck size={40} /></span>
          <p>Ipva grátis por 1 ano.</p>
        </div>
      </div>
    </section>
  );
}

export { Benefits }
