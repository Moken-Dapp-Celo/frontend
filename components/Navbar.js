'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useMetaMask } from '../contexts/WalletContext';
import CopyToClip from './CopyToClip';

export default function Navbar() {
  const { account, connectMetaMask } = useMetaMask();

  return (
    <div className='flex justify-center'>
      <div className='m-4 md:m-6 bg-white w-full md:w-[90%] lg:w-[80%] h-16 rounded-md shadow-md flex flex-col md:flex-row justify-between p-4'>
        <div className='flex gap-4 md:gap-16 items-center'>
          <Link href="/" className='hover:scale-95 duration-300'>
            <Image
              src='/moken.svg'
              alt='Moken Logo'
              width={50}
              height={50}
            />
          </Link>
          <Link
            href="/rentals"
            className='font-bold hover:scale-95 duration-300'
          >
            All Rentals
          </Link>
          <Link
            href="/iot"
            className='font-bold hover:scale-95 duration-300'
          >
            Simulation
          </Link>
          {account && <CopyToClip account={account} />}
        </div>

      </div>
    </div>
  );
}
