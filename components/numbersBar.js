'use client'
import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const NumbersBar = () => {
    const [count,setCount] = useState(false);
    return (
        <ScrollTrigger onEnter={()=>setCount(true)}
        className='w-[calc(100%+40px)] py-3 flex justify-evenly bg-black
        translate-x-[-20px] mt-5'>
            <div className='w-10 flex flex-col items-center'>
                {count && <CountUp start={0} end={150} duration={5} delay={0}
                className='text-[1.8em] text-white'/>}
                <p className='text-gray-200 text-[1em]'>Clients</p>
            </div>
            <div className='w-10 flex flex-col items-center'>
                {count && <CountUp start={0} end={30} duration={5} delay={0}
                className='text-[1.8em] text-white'/>}
                <p className='text-gray-200 text-[1em]'>Brands</p>
            </div>
            <div className='w-10 flex flex-col items-center'>
                {count && <CountUp start={0} end={120} duration={5} delay={0}
                className='text-[1.8em] text-white'/>}
                <p className='text-gray-200 text-[1em]'>Products</p>
            </div>
        </ScrollTrigger>
    )
}

export default NumbersBar