import React from 'react';
import Link from 'next/link';
import Layout from './Layout';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className='py-8 flex items-center justify-between'>
        <span className='mr-4 align-middle'>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        <div className='flex items-center justify-center'>
          <span className='mr-1'>Build with</span>
          <span className='text-primary text-2xl px-1'>&#9825;</span>
          <span className='mx-1'>by</span>
          <Link href="/" className='underline'>Ranjithkumar</Link>
        </div>
        <Link href="/" className='ml-250'>say hello</Link>
      </Layout>
    </footer>
  );
}

export default Footer;