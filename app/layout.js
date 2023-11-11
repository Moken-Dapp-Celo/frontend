import './globals.css'
import React from 'react';
import { Montserrat } from 'next/font/google'
import { MetaMaskProvider } from '../contexts/WalletContext';

import "./globals.css";
import { SelectedRentalProvider } from "../contexts/rental";

export const metadata = {
  title: "Moken",
  description: "Moken",
};

const montserrat = Montserrat({subsets: ['latin']})

export default function RootLayout({ children }) {
  return (
    <html className={montserrat.className}>
      <SelectedRentalProvider>
      <MetaMaskProvider>
      <body className='bg-lightGray w-full'>
            {children}
      </body>
      </MetaMaskProvider>
      </SelectedRentalProvider>
    </html >
  )
}
