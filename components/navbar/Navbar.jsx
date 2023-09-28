import {React,useState} from 'react'

 import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
    
      <nav className="shadow-lg p-4 sticky top-0 z-10">
        <div className="container flex items-center sm:justify-between ">
          <div className="text-2xl font-bold flex items-center">
            <Image src="/GROWTHCX-10 1.png" alt="Logo" width={200} height={200} className="mr-2"/>
            
          </div>
          <div
            id="mobile-menu-toggle"
            className="block lg:hidden cursor-pointer"
            onClick={toggleMobileMenu}
          >
          
          {isMobileMenuOpen ? (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : ''}`}
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M4 6h16M4 12h16M4 18h16"
  />
  </svg>

          ) :(
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          )}
          
          
          </div>
          <ul className={`lg:flex space-x-8 ${isMobileMenuOpen ? '' : 'hidden'} text-2xl font-bold leading-6 `}>
          <li className='lg-hidden'>
              <Link href="/" onClick={closeMobileMenu}>
                <button className='block lg:hidden'>Close</button>
              </Link>
            </li>
            <li ><Link href="/" onClick={toggleMobileMenu}>Why Us</Link></li>
            <div className=''><Link href="/about" onClick={toggleMobileMenu}> <div className='line-through font-gloria decoration-gray-900'>Your pains</div> <span className=''>Our Fixes</span></Link></div>
            <li><Link href="/contact" onClick={toggleMobileMenu}>Growth</Link></li>
            <li><Link href="/contact" onClick={toggleMobileMenu}>Eye Openers</Link></li> 
            <li><Link href="/contact" onClick={toggleMobileMenu}>Customers</Link></li>
            <button className='bg-black text-white rounded-lg p-1 ml-4 '><Link href="/contact" onClick={toggleMobileMenu}>Hop on a call</Link></button>
          </ul>
        </div>
      </nav>
    </>
  
  )
}

export default Navbar