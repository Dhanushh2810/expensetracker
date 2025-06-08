"use client";
import Link from 'next/link'; // ✅ Correct

import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button';
import Image from 'next/image';



const hero = () => {
  const ImageRef = useRef(null);
  useEffect(() => {
    const imageElement = ImageRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 120;
      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add('scrolled');
      } else {
        imageElement.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      
<div className='flex flex-col gap-4 mx-auto text-center'>

<h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title'>Manage Your Finances <br /> with Intelligence</h1>
<p className='text-lg mx-auto max-w-2xl  text-gray-600'>An AI-powered financial management platform that helps you track,
analyze, and optimize your spending with real-time insights.</p>

<div className='flex gap-2 mx-auto'>
<Link href="/dashboard"><Button  size="lg" className='bg-black text-white'>Get Started</Button></Link>
    <Link href="/dashboard"><Button variant='outline' size=  "lg">Watch Demo</Button></Link>
</div>
<div className='hero-image-wrapper mb-18'> 
  <div ref={ImageRef } className='hero-image scrolled'>
      <Image src="/banner.jpeg" alt="Dashboard preview" width={1080} height={700}
      className='rounded-lg shadow-2xl border mx-auto'
      />

    </div>
</div>
   
</div>














    </div>
  )
}

export default hero
