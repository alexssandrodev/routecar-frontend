'use client';

import './header.css';
import { IconClockHour3, IconMapPin2, IconMenu, IconX } from "@tabler/icons-react";
import { useContext, useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '../Logo';
import { IconPin, IconBrandWhatsapp } from '@tabler/icons-react';

function Header() {
  const [active, setActive] = useState<boolean>(false);

  function activeMenu() {
    setActive((state) => !state);
  }

  return (
    <header className="header__container">
      <div className="menu__header container">

        <div className='box-menu'>

          <div className="header_logo">
            <div className="logo">
              <Logo />
            </div>
            <span onClick={activeMenu} className="icon_menu"><IconMenu size={30} /></span>
          </div>

          <nav className={`menu ${active ? 'active' : 'deactive'}`}>
            <span onClick={activeMenu} className="icon_x"><IconX size={30} /></span>
            <div className="list_menu">
              <Image className='logo_icon' src='/logo.png' width={100} height={100} objectFit='cover' alt='Logotipo pirâmide' />
              <Link className='link' href='/'><span>Inicio</span></Link>
              <Link className='link' href='/stock'><span>Sobre</span></Link>
              <Link className='link' href='/whomi'><span>Estoque</span></Link>
              <Link className='link whomi' href=''>Contato</Link>
            </div>
          </nav>
        </div>

        <section className='busines-infos'>
          <div className='box'>
            <span><IconMapPin2 stroke={1} /></span>
            <div className='info'>
              <h3>Av. Manoel silva, 20</h3>
              <p>Tirol Natal</p>
            </div>
          </div>

          <div className='box'>
            <span><IconBrandWhatsapp stroke={1} /></span>
            <div className='info'>
              <h3>(84) 96734-2316</h3>
              <p>Whatsapp</p>
            </div>
          </div>

          <div className='box'>
            <span><IconClockHour3 stroke={1} /></span>
            <div className='info'>
              <h3>Seg - Sex: 8h ás 16h</h3>
              <p>Sab: 8h ás 14h</p>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

export { Header }
