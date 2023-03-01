import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import NavItem from '../NavItem';
import logo from './assets/logo.svg';

const MENU_LIST = [
  { text: 'Discover', href: '/' },
  { text: 'What we do', href: '/' },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header style={{ backgroundColor: 'black' }}>
      <nav
        className={`nav`}
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div className="left-side">
          <Link href={'/'} legacyBehavior>
            <a>
              <Image src={logo} height={22} alt="logo paisanos" />
              <h1 className="logo">NFPaisanos</h1>
            </a>
          </Link>
          <div
            onClick={() => setNavActive(!navActive)}
            className={`nav__menu-bar`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div
            className={`${navActive ? 'active' : ''} nav__menu-list`}
          >
            {MENU_LIST.map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                className={`nav__item`}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </div>
            ))}
          </div>
        </div>
        <div className="right-side">
          <Link href={'/'} legacyBehavior>
            <a className="connectButton">Connect wallet</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
