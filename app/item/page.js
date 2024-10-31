import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious} from "@/components/ui/carousel"
import {ToggleGroup,ToggleGroupItem,} from "@/components/ui/toggle-group"
import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"  
import Slider from '@/components/Slider'
import Form from '@/components/Form';


const ItemPage = () => {
    const data = [
        {title: 'fitness clothing',subtitle: 'for best workout experience',src: '/hoodie.jpg'},
        {title: 'fitness accesories',subtitle: 'for best workout experience',src: '/hoodie1.jpg'},
        {title: 'fitness nutritions',subtitle: 'for best workout experience',src: '/hoodie2.jpg'}
    ];
    const colors = ['black','gray','green','yellow','aqua'];
    const sizes = ['S','M','L','XL','2XL'];
    return (
        <section className='mb-10 pt-16'>
            <Carousel className="w-full h-full">
                <CarouselContent>
                    {data.map((ele) => (
                    <CarouselItem key={ele.title}>
                        <Slider title ={ele.title} subtitle ={ele.subtitle} 
                        src ={ele.src} display = 'hidden'/>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className=' translate-x-[5em]'/>
                <CarouselNext className='translate-x-[-5em]'/>
            </Carousel>
            <div className='px-5 grid grid-cols-[1fr_5em] mt-2'>
                <p className='text-blue-950 text-[1.1em] font-semibold'>warrior hoodie</p>
                <p className='text-blue-950 text-[1.1em] font-semibold'>2500 DA</p>
                <div>
                    <span className='text-blue-950 text-[1.3em] mr-2'>★★★★★</span>
                    <span className='text-gray-500 text-[0.7em]'>250 Reviews</span>
                </div>
            </div>
            <div className='px-5'>
                <div> colors : <span className='text-gray-500'>black</span></div>
                <div className='flex gap-2 mt-1'>
                    {colors.map((e) =>(
                        <div className='h-5 w-8' style={{ backgroundColor: e }} key={e}></div>
                    ))}
                </div>
            </div>
            <div className='px-5 mt-2'>
                <div> size : <span className='text-gray-500'>M</span></div>
                <ToggleGroup type="single" className=''>
                    {sizes.map((e) =>(
                        <ToggleGroupItem className='h-12 w-16' key={e} value={e} aria-label={`Toggle ${e}`}>
                            {e}
                        </ToggleGroupItem>
                    ))}
                </ToggleGroup>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 px-5 mt-2'>
                <div className='w-36 flex justify-center gap-3 border border-black py-2'>
                    <Image src='/minus.png' alt='counter' width={50} height={50}
                    className='h-6 w-6'/>
                    <p className='border border-black border-y-0 px-5'>1</p>
                    <Image src='/plus.png' alt='counter' width={10} height={10}
                    className='h-5 w-5 '/>
                </div>
                <Button className='w-[15em] bg-blue-950 text-white py-6 rounded-none'>ADD TO CART</Button>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button className='w-[15em] bg-blue-950 text-white py-6 rounded-none'>
                            BUY NOW
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 h-[30em]">
                        <Form />
                    </PopoverContent>
                </Popover>
            </div>
        </section>
    )
}

export default ItemPage;