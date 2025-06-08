import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { LayoutDashboard, PenBox } from 'lucide-react'
import { checkUser } from '@/lib/checkUser'


  

const Header = async () => {
  const user=await checkUser();
  return (
   
        

        <div className="fixed mx-auto h-[10%] w-screen border-b border-gray-300   bg-white/70 backdrop-blur-md z-50 top-0">


<div className='flex  w-screen justify-between items-center'>
  <Link href="/">
  <Image src="/image.png" height={160} width={200} alt="spento" />
  </Link>
  <div className='mr-6 gap-2 flex items-center'><SignedOut>
  <SignInButton forceRedirectUrl='/dashboard' className='bg-white border-2 hover:bg-gray-200 border-gray-600 text-black px-4 py-2 rounded-md' />
            
          </SignedOut>
          <SignedIn>
            <div className='flex items-center gap-2'>
            <Link href="/dashboard">
            <Button variant='outline' className='border-gray-300'><LayoutDashboard size={20} /> <span className='hidden md:block'>Dashboard</span> </Button>
            </Link>
            <Link href="/transaction/create">
            <Button >< PenBox size={20} /> <span className='hidden md:block'>Add Transactions</span> </Button>
            </Link>
            <UserButton  
  appearance={{
    elements: {
      userButtonAvatarBox: 'h-20 w-20',
      userButtonTrigger: 'h-20 w-20'
    },
  }} 
/>

            </div>
   
           
          </SignedIn></div>
  
</div>









        </div>
      
    
  );
};

export default Header;
