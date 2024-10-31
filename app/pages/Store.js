import React from 'react'
import ItemCard from '@/components/ItemCard';
import ClothingCategory from '@/components/ClothingCategory';
import NumbersBar from '@/components/numbersBar';
import LogoSlider from '@/components/LogoSlider';
import Testimonials from '@/components/Testimonials';
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"


const Store = () => {
    const clothesData = [
        {name: 'hoodie warrior',price: '2500',src: '/hoodie.jpg'},
        {name: 'tshirt oversize',price: '1500',src: '/tshirt.jpg'},
        {name: 'tshirt oversize',price: '1200',src: '/tshirt2.jpg'},
        {name: 'pants',price: '1300',src: '/pants.jpg'},
        {name: 'shoe nike',price: '1500',src: '/shoe.jpg'},
        {name: 'shoe adidas',price: '1600',src: '/shoe2.jpg'},
    ];
    const accesoriesData = [
        {name: 'pulling handels',price: '200',src: '/pullingHundles.jpg'},
        {name: 'bottel',price: '150',src: '/bottles.jpg'},
        {name: 'rope',price: '200',src: '/rope.jpg'},
        {name: 'resistance band',price: '300',src: '/band.jpg'},
        {name: 'back belt',price: '500',src: '/backBelt.jpg'},
        {name: 'weight vest',price: '2000',src: '/weightVest.jpg'},
    ]
    const nutritionssData = [
        {name: 'whey protien',price: '7000',src: '/whey.jpg'},
        {name: 'creatine',price: '3500',src: '/creatine.jpg'},
        {name: 'whey iso',price: '8500',src: '/iso.jpg'},
    ]
    return (
        <section className='pt-5 w-full px-5'>
            <p className='text-[1.5em]'>Fitness clothing</p>
            <p className='text-gray-500 mb-4 translate-y-[-5px] '>look better,be comfortable</p>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm"
                >
                <CarouselContent>
                    {clothesData.map((ele) =>(
                    <CarouselItem key={ele.name} className="basis-1/2 lg:basis-1/3">
                        <ItemCard src={ele.src} 
                        name={ele.name} price={ele.price}/>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className=' translate-x-[4em] translate-y-[-3.5em]'/>
                <CarouselNext className='translate-x-[-4em] translate-y-[-3.5em]'/>
                </Carousel>
                <div className='grid grid-cols-2 gap-4 mt-6'>
                    <ClothingCategory name='hoodies' src='/hoodies.png'/>
                    <ClothingCategory name='shirts' src='/shirts.png'/>
                    <ClothingCategory name='pants' src='/pantss.png'/>
                    <ClothingCategory name='shoes' src='/shoes.png'/>
                </div>
                <LogoSlider />
                <p className='text-[1.5em] mt-2'>Fitness accesories</p>
                <p className='text-gray-500 mb-4 translate-y-[-5px]'>be more efficient</p>
                <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm"
                >
                <CarouselContent>
                    {accesoriesData.map((ele) =>(
                    <CarouselItem key={ele.name} className="basis-1/2 lg:basis-1/3">
                        <ItemCard src={ele.src} 
                        name={ele.name} price={ele.price}/>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className=' translate-x-[4em] translate-y-[-3.5em]'/>
                <CarouselNext className='translate-x-[-4em] translate-y-[-3.5em]'/>
                </Carousel>
                <NumbersBar />
                <p className='text-[1.5em] mt-2'>Fitness nutritions</p>
                <p className='text-gray-500 mb-4 translate-y-[-5px]'>gain more muscle</p>
                <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm"
                >
                <CarouselContent>
                    {nutritionssData.map((ele) =>(
                    <CarouselItem key={ele.name} className="basis-1/2 lg:basis-1/3">
                        <ItemCard src={ele.src} 
                        name={ele.name} price={ele.price}/>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className=' translate-x-[4em] translate-y-[-3.5em]'/>
                <CarouselNext className='translate-x-[-4em] translate-y-[-3.5em]'/>
                </Carousel>
                <Testimonials />
        </section>
    )
}

export default Store;