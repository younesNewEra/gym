import React from 'react'
import Image from 'next/image';
const page = () => {
    return (
        <section className='h-[100vh] flex flex-col justify-center items-center'>
            <Image src='/right.jpg' alt='thanks' 
            height={50} width={50} className='w-[6em]'/>
            <p className='text-[1.5em] font-semibold'>thank you for your purchase</p>
            <p className=''>we will call you soon to confirm with you</p>
        </section>
    )
}

export default page;