'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(pathname === '/');
  }, [pathname]);

  return (
    <>
      <header className={`main-header header-style-two ${!isHome ? 'alternate' : ''}`}>
        {/* Header Lower */}
        <div className="header-lower">
          <div className="auto-container">
            <div className="inner-container">
              <div className="d-flex align-items-center justify-content-between flex-wrap">

                <div className="nav-outer d-flex align-items-center flex-wrap">
                  <div className="logo-box">
                    <div className="logo">
                      <Link href="/">
                        <img src="/assets/images/logo.svg" alt="" title="" />
                      </Link>
                    </div>
                  </div>
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md">
                    <div className="navbar-header">
                      {/* Toggle Button */}
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                    </div>

                    <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                      <ul className="navigation clearfix">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                      </ul>
                    </div>
                  </nav>
                </div>

                {/* Main Menu End */}
                <div className="outer-box d-flex align-items-center flex-wrap">

                  {/* Button Box */}
                  <div className="main-header_buttons">
                    <a href="#" className="template-btn btn-style-two">
                      <span className="btn-wrap">
                        <span className="text-one">Login</span>
                        <span className="text-two">Login</span>
                      </span>
                    </a>
                    <a href="#" className="template-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Join now</span>
                        <span className="text-two">Join now</span>
                      </span>
                    </a>
                  </div>

                  {/* Mobile Navigation Toggler */}
                  <div className="mobile-nav-toggler">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 6l16 0" />
                      <path d="M4 12l16 0" />
                      <path d="M4 18l16 0" />
                    </svg>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
        {/* End Header Lower */}

        {/* Mobile Menu */}
        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn"><span className="icon fa-solid fa-xmark fa-fw"></span></div>

          <nav className="menu-box">
            <div className="nav-logo"><Link href="/"><img src="/assets/images/logo.svg" alt="" title="" /></Link></div>
            <div className="menu-outer">{/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}</div>
          </nav>
        </div>
        {/* End Mobile Menu */}

      </header>
    </>
  );
}
