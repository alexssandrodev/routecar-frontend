
import { IconBrandInstagram, IconBrandFacebook, IconBrandWhatsapp, IconRegistered } from '@tabler/icons-react';
import './footer.css';
import Image from 'next/image';

function Footer() {
  const actualYear = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div className='footer container'>
        <div className='logo'>
          <Image
            src='/logo.png'
            className='logotipo'
            width={174}
            height={75}
            alt='Logotipo'
          />
        </div>
        <div className='socials'>
          <span><IconBrandInstagram size={20} /></span>
          <span><IconBrandWhatsapp size={20} /></span>
          <span><IconBrandFacebook size={20} /></span>
        </div>
        <p>Todos os direitos reservados routecar <IconRegistered stroke={1} /> {actualYear} - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export { Footer }
