'use client'
import Image from 'next/image';
import { useState } from 'react';

const CartItem = (props) => {
    const [counter,setCounter] = useState(1);
    const plus = () =>{
        setCounter(counter + 1);
    }
    const minus = () =>{
        setCounter(counter - 1);
    }
    return (
        <div className='h-[9.25em] py-5 grid grid-cols-[5em_1fr_5em] grid-rows-2 gap-2'>
            <div className='bg-cover grid row-span-2' style={{backgroundImage: `url(${props.src})`}}></div>
            <div className=''>
                <p className=''>{props.name}</p>
                <p className='text-gray-500'>{props.colorSize}</p>
            </div>
            <Image src='/delete.png' alt='delete' width={50} height={50} 
            className='h-7 w-7 justify-self-end'/>
            <div className='flex gap-3 self-end'>
                <Image onClick={minus} src='/minus.png' alt='counter' width={50} height={50}
                className='h-4 w-4 mt-1'/>
                <p className=''>{counter}</p>
                <Image onClick={plus} src='/plus.png' alt='counter' width={10} height={10}
                className='h-4 w-4 mt-1'/>
            </div>
            <p className=' justify-self-end self-end'>{props.price} DA</p>
        </div>
    )
}

export default CartItem;