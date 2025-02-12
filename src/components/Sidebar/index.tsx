'use client';

import './sidebar.css';
import Image from 'next/image';
import Link from 'next/link';
import { IconChevronCompactRight, IconHome, IconList, IconLogout, IconPlus, IconUser } from '@tabler/icons-react';
import { useContext, useState } from 'react';
import { AuthContext } from '@/data/contexts/AuthContext';

function Sidebar() {

  const [open, setOpen] = useState<boolean>(false);
  const { signOut } = useContext(AuthContext);

  return (
    <nav className={`container__sidebar ${open ? 'active' : ''}`}>
      <span onClick={() => setOpen((state) => !state)} className='icon_close'><IconChevronCompactRight stroke={3} /></span>
      <div className="box_sidebar">
        <div className='profile'>
          <span><IconUser stroke={2} /></span>
          <div>
            <h2 className='closed'>Minas car</h2>
            <p className='closed'>minascar@gmail.com</p>
          </div>
        </div>
        <section className="sidebar">
        </section>
        <ul className='menu'>
          <Link href={'/dashboard'}> <li><IconHome /> <span className='closed'>Página inicial</span></li></Link>
          <Link href='/dashboard/add-car'> <li><IconPlus /> <span className='closed'>Cadastrar veiculo</span></li></Link>
          <Link href='/add-banner'> <li><IconList /> <span className='closed'>Adicionar banner</span></li></Link>
          <Link href={'/'}><li><IconUser /> <span className='closed'>Minha conta</span></li></Link>
        </ul>
      </div>
      <button onClick={signOut} className='btn__signout'><IconLogout /> <span className='closed'>Sair</span></button>
    </nav>
  );
}

export { Sidebar }
