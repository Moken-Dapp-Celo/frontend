'use client'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <div className='flex flex-col justify-center items-center mx-4 md:mx-36 my-8 md:my-16'>

        <Image
          src={'/Illustration.svg'}
          alt='Illustration'
          width={550}
          height={550}
        />

        <div className='w-full md:w-[50%] flex flex-col justify-center items-center mt-8'>
          <Image
            src={'/moken.svg'}
            alt='Moken Logo'
            width={300}
            height={300}
          />
          <p className='text-xl md:w-[70%] mt-6 text-center font-bold'>Your travel, your rules</p>
          <p className='text-xl md:w-[75%] mt-6 text-center'>
            Welcome to the future of travel with Moken powered by blockchain technology. Say goodbye to traditional booking platforms and embrace a new era of secure, transparent, and efficient home sharing.
          </p>
        </div>
      </div>

      <div className='bg-mediumGray w-full min-h-fit flex flex-col md:flex-row justify-evenly p-6 md:p-12'>

        <div className='w-full md:w-1/2 mb-8 md:mb-0 md:ml-12'>
          <h1 className='font-bold text-xl'> IoT and Blockchain Integration</h1>
          <p>
            At the core of Moken platform lies cutting-edge IoT and blockchain technology. Picture yourself arriving at your accommodation and when you tap an NFC device to the lock door reader, a microcontroller communicates with the blockchain, verifying your access and managing your stay's key securely. This seamless, instant, and secure process eliminates traditional keys and physical check-ins, paving the way for the future of access control in decentralized accommodations.
          </p>
        </div>

        <div className='w-full md:w-1/2 mb-8 md:mb-0 md:ml-12'>
          <h1 className='font-bold text-xl'>Transparent and Secure Stay </h1>
          <p>
            With our technology, your stay is not just convenient and secure; it's fully integrated into the blockchain, ensuring transparency. This innovative access control enhances security and streamlines your travel experience. Welcome to a new era of travel where convenience meets innovation, all powered by blockchain and IoT, ensuring memorable and secure stays.
          </p>
        </div>

        <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
          <h1 className='font-bold text-2xl my-2'>Find your property</h1>
          <p>Unlocking the Future of Travel: Where Keys Meet Innovation </p>
          <button onClick={() => router.push('/rentals')} className='bg-black text-white font-bold text-xl my-4 md:my-8 p-4 md:p-6 rounded-2xl hover:scale-95 duration-300'>See available options</button>
        </div>
      </div>
    </div>
  )
}
