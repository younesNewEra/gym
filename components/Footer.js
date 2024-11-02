import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='bg-[#242424] overflow-hidden w-full flex flex-col items-center gap-3 py-10'>
                <Image src='/logo.png' alt='logo'
                className='self-center justify-self-center mb-2'  height={70} width={70}/>
                <div className='flex flex-col items-center'>
                    <p className='text-white text-[1.2em] font-semibold'>call us</p>
                    <div className='h-[1px] w-8 bg-slate-300'></div>
                    <p className='text-white font-extralight mt-2'>phone</p>
                    <p className='text-white font-extralight'>repeated questions</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-white text-[1.2em] font-semibold'>terms and policy</p>
                    <div className='h-[1px] w-8 bg-slate-300'></div>
                    <p className='text-white font-extralight mt-2'>terms of use</p>
                    <p className='text-white font-extralight'>exchange policy</p>
                    <p className='text-white font-extralight'>privacy policy</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-white text-[1.2em] font-semibold'>about store</p>
                    <div className='h-[1px] w-8 bg-slate-300'></div>
                    <p className='text-white font-extralight mt-2'>about store</p>
                    <p className='text-white font-extralight'> ways of payment</p>
                    <p className='text-white font-extralight'>dilevery</p>
                </div>
                <p className='text-white mt-2'>follow us!</p>
                <div className='flex justify-center gap-3'>
                    <Link href='/'>
                        <Image src='/instagram.png' alt='sm' height={30} width={30}/>
                    </Link>
                    <Link href='/'>
                        <Image src='/tiktok.png' alt='sm' height={30} width={30}/>
                    </Link>
                    <Link href='/'>
                        <Image src='/linkedin.png' alt='sm' height={30} width={30}/>
                    </Link>
                </div>
        </footer>
    )
}
export default Footer;