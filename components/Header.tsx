'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isHome, setIsHome] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsHome(pathname === '/');
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <>
      <header
        className={`main-header header-style-two transition-all duration-300 ${isHome
          ? (isScrolled ? 'fixed-header bg-transparent' : 'absolute w-full top-0 bg-transparent')
          : 'alternate sticky-header'
          }`}
        style={{ position: isHome ? 'fixed' : undefined, width: '100%', top: 0, zIndex: 999 }}
      >
        {/* Header Lower */}
        <div className={`header-lower ${isScrolled ? '!bg-black/60 !backdrop-blur-xl !border-b !border-white/5 shadow-sm' : 'transition-all duration-300'}`}>
          <div className="auto-container">
            <div className="inner-container">
              <div className="d-flex align-items-center justify-content-between flex-wrap">

                <div className="logo-box">
                  <div className="logo">
                    <Link href="/">
                      <img src="/assets/images/logo.svg" alt="" title="" className="w-[140px]" />
                    </Link>
                  </div>
                </div>

                <div className="nav-outer mx-auto">
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

                    <div className="navbar-collapse clearfix" id="navbarSupportedContent">
                      <ul className="navigation clearfix">
                        <li className={pathname === '/' ? "current" : ""}><Link href="/">Home</Link></li>
                        <li className={pathname === '/about' ? "current" : ""}><Link href="/about">About</Link></li>
                        <li className={`dropdown ${pathname?.startsWith('/products') ? "current" : ""}`}><Link href="/products">Products</Link>
                          <ul>
                            <li><Link href="/products">All Products</Link></li>
                            <li><Link href="/products/ops-360-pms">OPS 360 PMS</Link></li>
                            <li><Link href="/products/hotel-pms">AI Hotel PMS</Link></li>
                            <li><Link href="/products/ecommerce-sale-bot">E-Commerce Bot</Link></li>
                            <li><Link href="/products/ai-chatbot">AI Chatbot</Link></li>
                          </ul>
                        </li>
                        <li className={pathname?.startsWith('/blog') ? "current" : ""}><Link href="/blog">Blog</Link></li>
                        <li className={pathname === '/contact' ? "current" : ""}><Link href="/contact">Contact</Link></li>
                      </ul>
                    </div>
                  </nav>
                </div>

                {/* Main Menu End */}
                <div className="outer-box d-flex align-items-center flex-wrap">

                  {/* Button Box */}
                  <div className="main-header_buttons">
                    <Link href="/login" className="template-btn btn-style-two">
                      <span className="btn-wrap">
                        <span className="text-one">Login</span>
                        <span className="text-two">Login</span>
                      </span>
                    </Link>
                    <Link href="/register" className="template-btn btn-style-one animate-bg-gradient" style={{ border: 'none' }}>
                      <span className="btn-wrap">
                        <span className="text-one">Join now</span>
                        <span className="text-two">Join now</span>
                      </span>
                    </Link>
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
            <div className="nav-logo"><Link href="/"><img src="/assets/images/logo.svg" alt="" title="" className="w-[120px]" /></Link></div>
            <div className="menu-outer">

            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}

      </header>
    </>
  );
}
