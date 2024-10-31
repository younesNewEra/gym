import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='bg-[#242424] overflow-hidden w-full flex flex-col items-center'>
                <div class="slider-track h-[15em]">
                    <div class="w-52 flex flex-col items-center gap-1 mx-4">
                        <Image src="/delivery.png" alt="Logo 1" height={130} width={130}/>
                        <p className='text-white text-center'>delivery in 24h-48h</p>
                    </div>
                    <div class="w-52 flex flex-col items-center gap-1 mx-4">
                        <Image src="/change.png" alt="Logo 2" height={130} width={130}/>
                        <p className='text-white'>possibility of exchange</p>
                    </div>
                    <div class="w-52 flex flex-col items-center gap-1 mx-4">
                        <Image src="/reliability.png" alt="Logo 4" height={130} width={130}/>
                        <p className='text-white'>same quality in reality</p>
                    </div>
                    {/* duplicate */}
                    <div class="w-52 flex flex-col items-center gap-1 mx-4">
                        <Image src="/delivery.png" alt="Logo 1" height={130} width={130}/>
                        <p className='text-white text-center'>delivery in 24h-48h</p>
                    </div>
                    <div class="w-52 flex flex-col items-center gap-1 mx-4">
                        <Image src="/change.png" alt="Logo 2" height={130} width={130}/>
                        <p className='text-white'>possibility of exchange</p>
                    </div>
                    <div class="w-52 flex flex-col items-center gap-1 mx-4">
                        <Image src="/reliability.png" alt="Logo 4" height={130} width={130}/>
                        <p className='text-white'>same quality in reality</p>
                    </div>
                </div>
                <p className='text-[2em] text-white self-center justify-self-center'>gym</p>
                <div className='flex justify-center gap-3 my-2'>
                    <Link href='/'>
                        <Image src='/instagram.png' alt='sm' className='w-6' height={50} width={50}/>
                    </Link>
                    <Link href='/'>
                        <Image src='/tiktok.png' alt='sm' className='w-6' height={50} width={50}/>
                    </Link>
                    <Link href='/'>
                        <Image src='/linkedin.png' alt='sm' className='w-6' height={50} width={50}/>
                    </Link>
                </div>
                <p className="text-white text-center mb-2">Copyright ©, all rights are rserved.</p>
        </footer>
    )
}
export default Footer;