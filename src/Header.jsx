import logo from "./images/logo.svg";
import iconHamburger from "./images/icon-hamburger.svg";
import iconClose from "./images/icon-close.svg";
import bgPatternMobileNav from "./images/bg-pattern-mobile-nav.svg";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="relative mx-auto flex max-w-[1100px] items-center justify-between px-6 py-6 lg:py-5 xl:px-0">
        {/* logo */}
        <div>
          <img src={logo} alt="logo" />
        </div>
        {/* logo */}

        {/* icon menu mobile */}

        <div
          className="cursor-pointer lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img
            src={isMenuOpen ? iconClose : iconHamburger}
            alt="icon hamburger"
          />
        </div>
        {/* icon menu mobile */}

        {/* menu modal mobile */}
        {isMenuOpen && (
          <div className="absolute left-0 top-20 flex h-[587px] w-full flex-col justify-between bg-very-dark-violet lg:hidden">
            <ul className="flex flex-col items-center gap-6 px-4 pt-10 font-karla text-xl font-bold leading-10 tracking-[1.364px] text-white">
              <li>
                <a href="#" className="transition-opacity hover:opacity-70">
                  HOW WE WORK
                </a>
              </li>
              <li>
                <a href="#" className="transition-opacity hover:opacity-70">
                  BLOG
                </a>
              </li>
              <li>
                <a href="#" className="transition-opacity hover:opacity-70">
                  ACCOUNT
                </a>
              </li>
              <li className="w-full cursor-pointer border-[1.5px] border-white px-[28.5px] py-3 text-center text-white transition-colors hover:bg-white hover:text-very-dark-violet">
                <a href="#">VIEW PLANS</a>
              </li>
            </ul>

            <div className="max-h-[218px]">
              <img
                src={bgPatternMobileNav}
                alt="background pattern mobile nav"
                className="h-full w-full"
              />
            </div>
          </div>
        )}
        {/* menu modal mobile */}

        {/* menu desktop */}
        <ul className="hidden w-full max-w-[447px] justify-between font-karla text-[13px] font-bold leading-none tracking-[1.5px] text-dark-grayish-violet lg:flex lg:items-center">
          <li>
            <a
              href="#"
              className="transition-colors hover:text-very-dark-violet"
            >
              HOW WE WORK
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition-colors hover:text-very-dark-violet"
            >
              BLOG
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition-colors hover:text-very-dark-violet"
            >
              ACCOUNT
            </a>
          </li>
          <li className="cursor-pointer border-[1.5px] border-very-dark-violet px-[28.5px] py-3 text-very-dark-violet transition-colors hover:bg-very-dark-violet hover:text-white">
            <a href="#">VIEW PLANS</a>
          </li>
        </ul>
        {/* menu desktop */}
      </nav>

      {/* hero */}
      <div className=""></div>
      {/* hero */}
    </header>
  );
}
export default Header;
