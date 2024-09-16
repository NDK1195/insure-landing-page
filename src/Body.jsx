import iconSnappyProcess from "./images/icon-snappy-process.svg";
import iconAffordablePrices from "./images/icon-affordable-prices.svg";
import iconPeopleFirst from "./images/icon-people-first.svg";
import patternHowWeWorkMobile from "./images/bg-pattern-how-we-work-mobile.svg";
import patternHowWeWorkDesktop from "./images/bg-pattern-how-we-work-desktop.svg";

function Body() {
  return (
    <main className="mx-auto max-w-[1110px] px-6 py-[140px] lg:pb-[150px] lg:pt-[305px] xl:px-0">
      <div className="mx-auto mb-10 h-[1px] w-[150px] bg-[#C396C6] lg:mx-0 lg:mb-16"></div>

      <h2 className="mb-20 text-center font-dm-serif-display text-5xl leading-none tracking-[-0.667px] text-very-dark-violet lg:mb-24 lg:text-left lg:text-7xl lg:leading-[64px] lg:tracking-[-1px]">
        We’re different
      </h2>

      <div className="mb-[140px] flex w-full flex-col items-center gap-14 lg:mb-[158px] lg:flex-row lg:items-start lg:justify-between xl:gap-0">
        {/* one item */}
        <div className="flex max-w-[350px] flex-col items-center lg:items-start">
          <img
            src={iconSnappyProcess}
            alt="icon snappy process"
            className="mb-8"
          />

          <h3 className="mb-4 font-dm-serif-display text-[28px] leading-none tracking-[-0.389px] text-very-dark-violet">
            Snappy Process
          </h3>

          <p className="text-center font-karla leading-[26px] text-dark-grayish-violet lg:text-left">
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </div>
        {/* one item */}

        {/* one item */}
        <div className="flex max-w-[350px] flex-col items-center lg:items-start">
          <img
            src={iconAffordablePrices}
            alt="icon affordable prices"
            className="mb-8"
          />

          <h3 className="mb-4 font-dm-serif-display text-[28px] leading-none tracking-[-0.389px] text-very-dark-violet">
            Affordable Prices
          </h3>

          <p className="text-center font-karla leading-[26px] text-dark-grayish-violet lg:text-left">
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>
        {/* one item */}

        {/* one item */}
        <div className="flex max-w-[350px] flex-col items-center lg:items-start">
          <img src={iconPeopleFirst} alt="icon people first" className="mb-8" />

          <h3 className="mb-4 font-dm-serif-display text-[28px] leading-none tracking-[-0.389px] text-very-dark-violet">
            People First
          </h3>

          <p className="text-center font-karla leading-[26px] text-dark-grayish-violet lg:text-left">
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </div>
        {/* one item */}
      </div>

      <div className="relative mx-auto max-w-[1110px] overflow-hidden bg-dark-violet px-6 py-[72px] text-white lg:px-20 lg:py-[69px]">
        <div className="absolute right-0 top-0">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={patternHowWeWorkDesktop}
            />
            <img src={patternHowWeWorkMobile} alt="pattern how we work" />
          </picture>
        </div>

        <div className="relative flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-0">
          <h2 className="max-w-[475px] text-center font-dm-serif-display text-[40px] leading-none tracking-[-0.556px] lg:text-left lg:text-[56px] lg:tracking-[-0.778px]">
            Find out more about how we work
          </h2>

          <button className="border-[1.5px] border-white px-[24.5px] py-3 font-karla text-[13px] font-bold leading-none tracking-[1.5px] transition-colors hover:bg-white hover:text-very-dark-violet">
            HOW WE WORK
          </button>
        </div>
      </div>
    </main>
  );
}
export default Body;
