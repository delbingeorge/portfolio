import React from 'react';
import { useMode } from '../ModeProvider';
import { Link } from 'react-router-dom';
import eatablesImage from '../assets/images/eatablesImage.webp'
import compositepng from '../assets/images/compositepngog.png'
import semaphorepng from '../assets/images/semaphore.png'
import qikfixerMore from '../assets/images/qikfixerMore.webp'
import portfolioMockup from '../assets/images/portfolioMockup.webp'
import busWatchMore from '../assets/images/busWatchMore.png'

function MoreProjects() {
  const { mode, toggleMode } = useMode();

  const handleClick = () => {
    if (mode == "dark") {
      toggleMode("light");
    }
    else {
      toggleMode("dark");
    }
  }

  return (
    <div className={`px-6 md:px-28 pb-8 font-mono-space ${(mode == "light") ? ('bg-light-mode-primary text-dark-mode-primary') : ('bg-dark-mode-primary text-light-mode-primary')}`}>
      <div className='py-4 md:py-8 flex items-center justify-between'>
        <Link to='/' className='text-xl font-bold'>Projects & Case Studies</Link>
        <div className='flex items-center space-x-12'>
          {
            (mode == "light") ? (
              <svg width="17" height="16" className='cursor-pointer' onClick={handleClick} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.0604 22.5541C18.6661 23.6125 17.0654 24.3667 15.3615 24.7682C13.6577 25.1697 11.8886 25.2095 10.1684 24.885C8.44022 24.5647 6.79995 23.8805 5.35639 22.8779C3.91283 21.8753 2.69899 20.5771 1.7954 19.0696C0.397758 16.7169 -0.197776 13.9739 0.0984579 11.2535C0.394692 8.53309 1.56666 5.98254 3.43792 3.98584C4.66336 2.71577 6.1242 1.69626 7.73902 0.98413C8.16671 0.804037 8.63475 0.741499 9.09472 0.802991C9.55469 0.864483 9.98987 1.04777 10.3552 1.33388C10.7206 1.61999 11.0029 1.99854 11.1728 2.43035C11.3428 2.86216 11.3943 3.33155 11.322 3.78994C10.1671 10.1193 14.5794 15.2414 21.0757 15.2304C21.5411 15.2376 21.996 15.3693 22.3932 15.612C22.7904 15.8546 23.1153 16.1993 23.3341 16.6101C23.5529 17.0209 23.6576 17.4828 23.6373 17.9478C23.617 18.4128 23.4725 18.8638 23.2187 19.254C22.3473 20.5143 21.2812 21.6282 20.0604 22.5541ZM6.25395 4.26307C5.78753 4.61591 5.34935 5.0046 4.9434 5.42562C3.38511 7.08756 2.40882 9.21072 2.1615 11.4755C1.91419 13.7403 2.40922 16.0241 3.57209 17.9832C4.32536 19.2425 5.33803 20.327 6.5428 21.1648C7.74757 22.0025 9.11684 22.5743 10.5596 22.842C12.642 23.195 14.7822 22.9361 16.7203 22.0967C18.6585 21.2573 20.3114 19.8734 21.4785 18.113C21.5275 18.0354 21.555 17.9461 21.5584 17.8544C21.5617 17.7626 21.5408 17.6716 21.4976 17.5906C21.4545 17.5096 21.3907 17.4414 21.3127 17.3929C21.2347 17.3445 21.1453 17.3175 21.0535 17.3148C13.3139 17.3393 7.87486 10.9957 9.26699 3.44316C9.28225 3.35555 9.27277 3.26542 9.23963 3.1829C9.20648 3.10039 9.15098 3.02875 9.07935 2.97604C9.00733 2.91707 8.92055 2.87891 8.8284 2.86571C8.73626 2.8525 8.64225 2.86475 8.55656 2.90112C7.73693 3.26062 6.96378 3.71792 6.25395 4.26307Z" fill="#222222" />
              </svg>
            ) : (
              <svg width="17" height="16" className='cursor-pointer' onClick={handleClick} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 11.5H18.92C18.8421 10.949 18.6981 10.4095 18.491 9.893L22.018 7.849C22.1359 7.78557 22.2398 7.69911 22.3237 7.59476C22.4075 7.49041 22.4695 7.37029 22.5061 7.24152C22.5427 7.11275 22.553 6.97794 22.5365 6.84511C22.52 6.71227 22.477 6.58409 22.41 6.46818C22.3431 6.35228 22.2535 6.25099 22.1467 6.17033C22.0398 6.08967 21.9179 6.03129 21.7881 5.99863C21.6583 5.96597 21.5232 5.95971 21.3909 5.98021C21.2587 6.00072 21.1318 6.04757 21.018 6.118L17.488 8.165C17.1505 7.73872 16.765 7.35283 16.339 7.015L18.385 3.484C18.5082 3.25505 18.5374 2.98712 18.4664 2.73701C18.3954 2.4869 18.2298 2.27428 18.0046 2.14422C17.7795 2.01417 17.5126 1.9769 17.2604 2.04033C17.0083 2.10376 16.7908 2.2629 16.654 2.484L14.607 6.009C14.0906 5.80172 13.551 5.65768 13 5.58V1.5C13 1.23478 12.8946 0.98043 12.7071 0.792893C12.5196 0.605357 12.2652 0.5 12 0.5C11.7348 0.5 11.4804 0.605357 11.2929 0.792893C11.1054 0.98043 11 1.23478 11 1.5V5.58C10.449 5.65768 9.90941 5.80172 9.393 6.009L7.349 2.482C7.21221 2.2609 6.99469 2.10176 6.74255 2.03833C6.49042 1.9749 6.22349 2.01217 5.99836 2.14222C5.77323 2.27228 5.60761 2.4849 5.5366 2.73501C5.4656 2.98512 5.49479 3.25305 5.618 3.482L7.664 7.015C7.23801 7.35283 6.85246 7.73872 6.515 8.165L2.985 6.118C2.87116 6.04757 2.74435 6.00072 2.61206 5.98021C2.47978 5.95971 2.34473 5.96597 2.21492 5.99863C2.0851 6.03129 1.96316 6.08967 1.85633 6.17033C1.7495 6.25099 1.65995 6.35228 1.59299 6.46818C1.52603 6.58409 1.48302 6.71227 1.46651 6.84511C1.45001 6.97794 1.46034 7.11275 1.4969 7.24152C1.53346 7.37029 1.5955 7.49041 1.67934 7.59476C1.76318 7.69911 1.86712 7.78557 1.985 7.849L5.509 9.893C5.30195 10.4095 5.15791 10.949 5.08 11.5H1C0.734784 11.5 0.48043 11.6054 0.292893 11.7929C0.105357 11.9804 0 12.2348 0 12.5C0 12.7652 0.105357 13.0196 0.292893 13.2071C0.48043 13.3946 0.734784 13.5 1 13.5H5.08C5.15791 14.051 5.30195 14.5905 5.509 15.107L1.982 17.151C1.86412 17.2144 1.76018 17.3009 1.67634 17.4052C1.5925 17.5096 1.53046 17.6297 1.4939 17.7585C1.45734 17.8873 1.44701 18.0221 1.46351 18.1549C1.48002 18.2877 1.52303 18.4159 1.58999 18.5318C1.65695 18.6477 1.7465 18.749 1.85333 18.8297C1.96016 18.9103 2.0821 18.9687 2.21192 19.0014C2.34173 19.034 2.47678 19.0403 2.60906 19.0198C2.74135 18.9993 2.86816 18.9524 2.982 18.882L6.512 16.835C6.84946 17.2613 7.23501 17.6472 7.661 17.985L5.618 21.516C5.49479 21.7449 5.4656 22.0129 5.5366 22.263C5.60761 22.5131 5.77323 22.7257 5.99836 22.8558C6.22349 22.9858 6.49042 23.0231 6.74255 22.9597C6.99469 22.8962 7.21221 22.7371 7.349 22.516L9.393 18.989C9.90947 19.1965 10.449 19.3412 11 19.42V23.5C11 23.7652 11.1054 24.0196 11.2929 24.2071C11.4804 24.3946 11.7348 24.5 12 24.5C12.2652 24.5 12.5196 24.3946 12.7071 24.2071C12.8946 24.0196 13 23.7652 13 23.5V19.42C13.5509 19.3419 14.0904 19.1978 14.607 18.991L16.651 22.518C16.7878 22.7391 17.0053 22.8982 17.2574 22.9617C17.5096 23.0251 17.7765 22.9878 18.0016 22.8578C18.2268 22.7277 18.3924 22.5151 18.4634 22.265C18.5344 22.0149 18.5052 21.7469 18.382 21.518L16.336 17.987C16.762 17.6492 17.1475 17.2633 17.485 16.837L21.015 18.884C21.1288 18.9544 21.2557 19.0013 21.3879 19.0218C21.5202 19.0423 21.6553 19.036 21.7851 19.0034C21.9149 18.9707 22.0368 18.9123 22.1437 18.8317C22.2505 18.751 22.3401 18.6497 22.407 18.5338C22.474 18.4179 22.517 18.2897 22.5335 18.1569C22.55 18.0241 22.5397 17.8893 22.5031 17.7605C22.4665 17.6317 22.4045 17.5116 22.3207 17.4072C22.2368 17.3029 22.1329 17.2164 22.015 17.153L18.488 15.109C18.6962 14.592 18.8413 14.0518 18.92 13.5H23C23.2652 13.5 23.5196 13.3946 23.7071 13.2071C23.8946 13.0196 24 12.7652 24 12.5C24 12.2348 23.8946 11.9804 23.7071 11.7929C23.5196 11.6054 23.2652 11.5 23 11.5ZM12 17.5C5.392 17.29 5.394 7.709 12 7.5C18.608 7.71 18.606 17.291 12 17.5Z" fill="#C5C5C5" />
              </svg>
            )
          }
        </div>
      </div>
      <div className='py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
          <Link to='/case-study/eatables-0/' className={`group flex items-center justify-center hover:bg-eatables card py-8 ${(mode == "light") ? ('bg-light-mode-secondary text-dark-mode-secondary') : ('bg-dark-mode-secondary text-light-mode-primary')}`}>
            <div className='flex items-center justify-center flex-col pb-4 text-center'>
              <h1 className='font-mono-space font-bold tracking-wider text-[1.65rem] md:text-4xl'>Eatables</h1>
              <h2 className='font-mono-space font-medium tracking-wider text-lg md:text-xl'>Food discovery & Review App</h2>
            </div>
            <div className='w-[15rem] md:w-[12rem] lg:w-[20rem]'>
              <img className='duration-300  group-hover:scale-[1.02]' alt="Eatables: Food Discovery & Review Platform" src={eatablesImage} width="640" height="360" />
            </div>
          </Link>
          <Link to="/case-study/qikfixer-1" className={`group flex items-center justify-center hover:bg-qikfixer card py-8 ${(mode == "light") ? (' bg-light-mode-secondary text-dark-mode-secondary') : ('bg-dark-mode-secondary text-light-mode-primary')}`}>
            <div className='group flex items-center justify-center flex-col pb-4 text-center'>
              <h1 className='font-mono-space font-bold tracking-wider text-[1.65rem] md:text-4xl'>Qikfixer App</h1>
              <h2 className='font-mono-space font-medium tracking-wider text-lg md:text-xl '>Repairmen Finder Platform</h2>
            </div>
            <div className='w-[15rem] md:w-[12rem] lg:w-[20rem]'>
              <img className='duration-300  group-hover:scale-[1.02]' alt='Qikfixer: Servicemen finder app' src={qikfixerMore} width="640" height="360" />
            </div>
          </Link>
          <Link to="/case-study/buswatch-3" className={`group flex items-center justify-center hover:bg-buswatch card py-8 ${(mode == "light") ? ('bg-light-mode-secondary text-dark-mode-secondary') : ('bg-dark-mode-secondary text-light-mode-primary')}`}>
            <div className='flex items-center justify-center flex-col pb-4 text-center'>
              <h1 className='font-mono-space font-bold tracking-wider text-[1.65rem] md:text-4xl'>BusWatch</h1>
              <h2 className='font-mono-space font-medium tracking-wider text-lg md:text-xl'>Local Bus Timing Checker</h2>
            </div>
            <div className='w-[13rem] md:w-[10rem] lg:w-[15rem]'>
              <img className='duration-300  group-hover:scale-[1.02]' alt='BusWatch: Bus timing Checker' src={busWatchMore} width="640" height="360" />
            </div>
          </Link>
          <Link to={"/"} className={`group flex items-center justify-center hover:bg-portfoilo card py-28 ${(mode == "light") ? ('bg-light-mode-secondary text-dark-mode-secondary') : ('bg-dark-mode-secondary text-light-mode-primary')}`}>
            <div className='flex items-center justify-center flex-col pb-4 text-center'>
              <h1 className='font-mono-space font-bold tracking-wider text-[1.65rem] md:text-4xl'>Portfolio</h1>
              <h2 className='font-mono-space font-medium tracking-wider text-lg md:text-xl'>Personal Portfolio Website</h2>
            </div>
            <div className='w-[15rem] md:w-[12rem] lg:w-[20rem]'>
              <img className='duration-300  group-hover:scale-[1.02]' alt='Extratime: Turf Booking App' src={portfolioMockup} width="640" height="360" />
            </div>
          </Link>
          {/* <a href='https://compositefest.vercel.app/' className={`group flex items-center justify-center hover:bg-portfoilo card py-8 ${(mode == "light") ? ('bg-light-mode-secondary text-dark-mode-secondary') : ('bg-dark-mode-secondary text-light-mode-primary')}`}>
            <div className='flex items-center justify-center flex-col pb-4 text-center'>
              <h1 className='font-mono-space font-bold tracking-wider text-[1.65rem] md:text-4xl'>Composite Fest 2023</h1>
              <h2 className='font-mono-space font-medium tracking-wider text-lg md:text-xl'>College Fest Website</h2>
            </div>
            <div className='w-[15rem] md:w-[12rem] lg:w-[20rem]'>
              <img className='duration-300  group-hover:scale-[1.02]' alt='BusWatch: Bus timing Checker' src={compositepng} width="640" height="360" />
            </div>
          </a>
          <a href='https://www.semaphoreignite2k23.in/' className={`group flex items-center justify-center hover:bg-portfoilo card py-8 ${(mode == "light") ? ('bg-light-mode-secondary text-dark-mode-secondary') : ('bg-dark-mode-secondary text-light-mode-primary')}`}>
            <div className='flex items-center justify-center flex-col pb-4 text-center'>
              <h1 className='font-mono-space font-bold tracking-wider text-[1.65rem] md:text-4xl'>Semaphore 2k23</h1>
              <h2 className='font-mono-space font-medium tracking-wider text-lg md:text-xl'>College Fest Website</h2>
            </div>
            <div className='w-[15rem] md:w-[12rem] lg:w-[20rem]'>
              <img className='duration-300  group-hover:scale-[1.02]' alt='BusWatch: Bus timing Checker' src={semaphorepng} width="640" height="360" />
            </div>
          </a> */}

        </div>
      </div>
      <div className={`py-4 lg:py-8 px-4 flex items-center flex-col lg:flex-row space-y-3 lg:space-y-0 justify-around rounded-xl ${mode == "light" ? "bg-light-mode-secondary" : "bg-dark-mode-secondary"}`}>
        <h1 className='text-xl text-center'>Did you like what you saw?</h1>
        <a href='mailto:imdelbingeorge@gmail.com' className={` px-10 text-md lg:text-lg text-center rounded-lg tracking-wider font-bold py-2 ${mode == "light" ? "bg-dark-mode-primary text-light-mode-secondary" : "text-dark-mode-primary bg-light-mode-secondary"}`}>Hire Me</a>
      </div>
    </div >
  )
}

export default MoreProjects
