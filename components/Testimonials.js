'use client'
import React from 'react'
import TestimonialCard from './TestimonialCard';
import { Parallax } from 'react-parallax';

const Testimonials = () => {
    return (
        <section className='w-[calc(100%+40px)] translate-x-[-20px] mt-5'>
            <Parallax bgImage="/numbersbg.jpg" strength={500}              
            bgImageStyle={{
            objectFit: 'cover',
            objectPosition: 'end',
            }}>
                <div class="h-[66em] flex flex-col justify-evenly items-center">
                    <TestimonialCard name='Younes Achour' src='/person1.jpg'/>
                    <TestimonialCard name='Sofian Chiker' src='/person2.jpg'/>
                    <TestimonialCard name='Ahmed Bitat' src='/person3.jpg'/>
                </div>
            </Parallax>
        </section>
    )
}

export default Testimonials;