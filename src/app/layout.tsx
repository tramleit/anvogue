import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import '@/styles/styles.scss'
import GlobalProvider from './GlobalProvider'
import ModalCart from '@/components/Modal/ModalCart'
import ModalWishlist from '@/components/Modal/ModalWishlist'
import ModalSearch from '@/components/Modal/ModalSearch'
import ModalQuickview from '@/components/Modal/ModalQuickview'
import ModalCompare from '@/components/Modal/ModalCompare'

const instrument = Instrument_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anvogue',
  description: 'Multipurpose eCommerce Template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GlobalProvider>
      <html lang="en">
        <body className={instrument.className}>
          {children}
          <ModalCart />
          <ModalWishlist />
          <ModalSearch />
          <ModalQuickview />
          <ModalCompare />
        </body>
      </html>
    </GlobalProvider>
  )
}


// 'use client'
// import React, { useState, useEffect } from 'react';
// import { Instrument_Sans } from 'next/font/google';
// import '@/styles/styles.scss';
// import GlobalProvider from './GlobalProvider';
// import Loading from '@/components/Other/Loading';
// import ModalCart from '@/components/Modal/ModalCart';
// import ModalWishlist from '@/components/Modal/ModalWishlist';
// import ModalSearch from '@/components/Modal/ModalSearch';
// import ModalQuickview from '@/components/Modal/ModalQuickview';
// import ModalCompare from '@/components/Modal/ModalCompare';
// import Head from 'next/head';
// import { useRouter } from 'next/router';

// const instrument = Instrument_Sans({ subsets: ['latin'] });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const handleStart = () => {
//       setLoading(true);
//     };

//     const handleComplete = () => {
//       setLoading(false);
//     };

//     router.events.on('routeChangeStart', handleStart);
//     router.events.on('routeChangeComplete', handleComplete);
//     router.events.on('routeChangeError', handleComplete);

//     return () => {
//       router.events.off('routeChangeStart', handleStart);
//       router.events.off('routeChangeComplete', handleComplete);
//       router.events.off('routeChangeError', handleComplete);
//     };
//   }, [router]);

//   return (
//     <GlobalProvider>
//       <html lang="en">
//         <Head>
//           <title>Anvogue</title>
//           <meta
//             name="description"
//             content="Anvogue shop"
//           />
//         </Head>
//         <body className={`${instrument.className} ${loading ? 'loading' : ''}`}>
//           {loading ? <Loading /> : children}
//           <ModalCart />
//           <ModalWishlist />
//           <ModalSearch />
//           <ModalQuickview />
//           <ModalCompare />
//         </body>
//       </html>
//     </GlobalProvider>
//   );
// }
