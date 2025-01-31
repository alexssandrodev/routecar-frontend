import Image from "next/image";
import './logo.css';

function Logo() {
  return (
    <section className="logo-container">
      <Image className="logo" src='/logo.png' width={90} height={90} alt="Logotipo" />
    </section>
  );
}

export { Logo }
