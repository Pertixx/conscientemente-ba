'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';
import SearchBar from '../SearchBar/SearchBar';
import SocialMediaList from '../SocialMedia/SocialMediaList';

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { name: 'Home', url: '/' },
    // { name: 'About', url: '/about' },
    // { name: 'Contact', url: '/contact' },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [color, setColor] = useState<string>('bg-transparent');
  const [textColor, setTextColor] = useState<string>('text-white');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/') {
        if (window.scrollY >= 90) {
          setColor('bg-white');
          setTextColor('text-gray-700');
        } else {
          setColor('bg-transparent');
          setTextColor('text-white');
        }
      } else {
        setColor('bg-white');
        setTextColor('text-gray-700');
      }
    };

    const handleRouteChange = () => {
      if (pathname === '/') {
        setColor('bg-transparent');
        setTextColor('text-white');
      } else {
        setColor('bg-white');
        setTextColor('text-gray-700');
      }
    };

    handleRouteChange();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);
  
  return (
    <nav className={twMerge(color, 'fixed left-0 top-0 w-full z-10 ease-in duration-300')}>
      <div className='m-auto flex items-center p-4 text-white gap-5 justify-between'>
        <div className='flex items-center gap-5'>
          <Link href={'/'} className='flex items-center space-x-2 cursor-pointer'>
            <Image 
              src={"/images/logo.jpeg"} 
              className="rounded-full"
              width={50}
              height={50}
              alt='ConscientementeBA Logo'
            />
            <h1 className={twMerge(textColor, 'font-bold text-xl md:text-2xl')}>
              Consciente Mente
            </h1>
          </Link>
          <ul className={twMerge(textColor, 'hidden md:flex')}>
            {
              links.map((link) => (
                <li key={link.url} className='p-4'>
                  <Link href={link.url} className='hover:font-bold'>{link.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        
        <div className='hidden md:block'>
          <SearchBar />
        </div>

        <div className='hidden md:block'>
          <SocialMediaList variant='navbar' />
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden block z-10'>
          {
            isOpen ? (
              <AiOutlineClose 
                onClick={toggleMenu}
                className='text-4xl text-white'
              />
            ) : (
              <AiOutlineMenu 
                onClick={toggleMenu}
                className={twMerge(textColor, 'text-4xl')}
              />
            )
          }
        </div>
        {/* Mobile Menu */}
        <div className={isOpen ? 
          'md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center bg-black ease-in duration-300' 
          : 'md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center bg-black ease-in duration-300'}
        >
          <ul>
            {
              links.map((link) => (
                <li key={link.url} className='p-4 text-4xl text-white hover:text-gray-500'>
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}