import React from 'react'
import Image from 'next/image';
const FreeShipping = () => {
    return (
        <div className='flex flex-col justify-start gap-2'>
            <div className='w-full flex justify-center'>
            <Image src='/shipping.png' alt='shippîng' height={50} width={50}
            className='h-5 w-5 mr-1'/>
            <span className='text-[0.8em]'>congrats, you qualified for free shipping</span>
            </div>
            <div className='w-[calc(100%+40px)] h-1 bg-blue-950 translate-x-[-20px]'>
                
            </div>
        </div>
    )
}

export default FreeShipping;