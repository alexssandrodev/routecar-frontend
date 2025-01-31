'use client';

import './sidebar.css';
import { IconCertificate, IconHome, IconLogout, IconMenu, IconUser, IconX } from '@tabler/icons-react';
import { useContext, useState } from 'react';
import Link from 'next/link';
import { AuthContext } from '@/data/contexts/AuthContext';
import Image from 'next/image';
import { IconChevronsLeft } from '@tabler/icons-react';

function Sidebar() {
  const [active, setActive] = useState<boolean>(false);

  const { signOut, account } = useContext(AuthContext);

  return (
    <nav className={`container__sidebar`}>
      <span className='icon-close'></span>
      <div className={`sidebar_box ${active ? 'active' : 'deactive'}`}>
        <div className="box_sidebar">
          <section className="sidebar">
            <div className="logo">
              <span onClick={() => setActive((state) => !state)} className='icon_menu'>{active ? <IconX /> : <IconMenu />}</span>
              <div className="user">
                <p>{account?.accountPayload.name}</p>
              </div>
              <Image className='logo__piramide' src='/logo.png' width={100} height={100} alt='Logotipo pirâmide' />
            </div>
          </section>
          <ul className={`menu ${active ? 'active' : 'deactive'}`}>
            <Link href={'/dashboard'}> <li><IconHome /> <span>Página inicial</span></li></Link>
            <Link href={'/courses'}> <li><IconCertificate /> <span>Cursos</span></li></Link>
            <Link href={'/userr-details'}><li><IconUser /> <span>Minha conta</span></li></Link>
          </ul>
        </div>
        <button onClick={signOut} className='btn__signout'><IconLogout /> <span>Sair</span></button>
      </div>
    </nav>
  );
}

export { Sidebar }
