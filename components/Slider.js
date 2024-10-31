import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Slider = (props) => {
    return (
        <div className=' h-[80vh] flex flex-col justify-end items-center bg-center' 
        style={{backgroundImage: `url(${props.src})`}}>
            <div className={`flex flex-col justify-end items-center ${props.display}`}>
                <p className=' text-white'>{props.subtitle}</p>
                <p className='text-[2em] text-white font-bold'>{props.title}</p>
                <Button className='text-black bg-white px-16 py-6 my-5'>Shop Now</Button>
            </div>
        </div>
    )
}

export default Slider;