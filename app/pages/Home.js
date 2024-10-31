import React from 'react'
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious} from "@/components/ui/carousel"
import Slider from '@/components/Slider'
import { Button } from '@/components/ui/button'

const Homee = () => {
    const data = [
        {title: 'fitness clothing',subtitle: 'for best workout experience',src: '/clothing.jpg'},
        {title: 'fitness accesories',subtitle: 'for best workout experience',src: '/accesories.jpg'},
        {title: 'fitness nutritions',subtitle: 'for best workout experience',src: '/protien.jpg'}
    ]
    return (
        <section className='w-full pt-[4em]'>
            <video src='/vid.mp4' className='w-full' autoPlay muted loop></video>
            <div className={`w-full flex flex-col justify-end items-center absolute top-[65%]`}>
                <p className=' text-white'>for best workout experience</p>
                <p className='text-[2em] text-white font-bold'>fitness equipment</p>
                <Button className='text-black bg-white px-16 py-6 my-5'>Shop Now</Button>
            </div>
        </section>
    )
}

export default Homee;