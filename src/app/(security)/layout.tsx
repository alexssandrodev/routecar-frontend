import Image from 'next/image';
import './security.css';
import { IconLock } from '@tabler/icons-react';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <section className="security__container">
      <div className='left'>

        <span className='icon-security'><IconLock stroke={1} size={40} /></span>
        <div className='logo'>
          <Image
            className='image-logo'
            src='/logo.png'
            width={170}
            height={55}
            alt='Logotipo'
          />
        </div>
        <div className='infos'>
          <h2>Entre no sistema</h2>
          <p>Faça login ou crie uma conta  ou crie uma contapara ter acesso aos recursos.</p>
        </div>
      </div>

      <div className='right'>
        {children}
      </div>
    </section>
  );
}

export default Layout;
