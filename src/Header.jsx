import logo from "./images/logo.svg";
import iconHamburger from "./images/icon-hamburger.svg";
import iconClose from "./images/icon-close.svg";
import bgPatternMobileNav from "./images/bg-pattern-mobile-nav.svg";
import introDesktop from "./images/image-intro-desktop.jpg";
import introMobile from "./images/image-intro-mobile.jpg";
import patternIntroRightMobile from "./images/bg-pattern-intro-right-mobile.svg";
import patternIntroRightDesktop from "./images/bg-pattern-intro-right-desktop.svg";
import patternIntroLeftMobile from "./images/bg-pattern-intro-left-mobile.svg";
import patternIntroLeftDesktop from "./images/bg-pattern-intro-left-desktop.svg";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="">
      {/* overlay */}
      <div
        className="absolute left-0 top-0 h-dvh w-full bg-transparent"
        onClick={() => setIsMenuOpen(false)}
      ></div>
      {/* overlay */}

      <nav className="relative z-20 bg-white">
        <div className="mx-auto flex max-w-[1110px] items-center justify-between px-6 py-6 lg:py-5 xl:px-0">
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
        </div>
      </nav>

      {/* hero */}
      <div className="relative z-10 h-[951px] bg-dark-violet lg:h-[600px]">
        {/* pattern intro right */}
        <div className="absolute -bottom-[175px] right-0 lg:-top-[85px]">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={patternIntroRightDesktop}
            />
            <img src={patternIntroRightMobile} alt="pattern intro right" />
          </picture>
        </div>
        {/* pattern intro right */}

        {/* pattern intro left */}
        <div className="absolute bottom-[333px] left-0 lg:-bottom-[340px]">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={patternIntroLeftDesktop}
            />
            <img src={patternIntroLeftMobile} alt="pattern intro right" />
          </picture>
        </div>
        {/* pattern intro left */}
        {/* container */}
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-[93px] lg:flex-row-reverse lg:items-start lg:gap-[30px] lg:pt-[105px]">
          {/* image intro */}
          <picture>
            <source media="(min-width: 1024px)" srcSet={introDesktop} />
            <img src={introMobile} alt="image intro mobile" />
          </picture>
          {/* image intro */}

          {/* content */}
          <div className="max-w-[540px] px-6 text-center font-karla text-white lg:px-0 lg:text-left">
            <div className="mb-[63px] hidden h-[1px] w-[150px] bg-white lg:block"></div>

            <h1 className="mb-4 font-dm-serif-display text-5xl leading-none tracking-[-0.667px] lg:pr-4 lg:text-7xl xl:leading-[64px] xl:tracking-[-1px]">
              Humanizing your insurance.
            </h1>

            <p className="mb-8 leading-[26px] lg:mb-6">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>

            <button className="border-[1.5px] border-white px-[28.5px] py-3 text-[13px] font-bold leading-none tracking-[1/5px] transition-colors hover:bg-white hover:text-very-dark-violet">
              VIEW PLANS
            </button>
          </div>
          {/* content */}
        </div>
        {/* container */}
      </div>
      {/* hero */}
    </header>
  );
}
export default Header;
