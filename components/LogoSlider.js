'use client'
import React from 'react'
import Image from 'next/image';
import { Parallax } from 'react-parallax';

const LogoSlider = () => {
    return (
        <section class="overflow-hidden w-[calc(100%+40px)] translate-x-[-20px] mt-5">
            <Parallax bgImage="/logosliderbg.jpg" strength={300}>
                <div class="slider-track h-[30em]">
                    <div class="slide mx-4"><Image src="/nike.png" alt="Logo 1" height={50} width={50}/></div>
                    <div class="slide mx-4 translate-y-[-2em]"><Image src="/ck.png" alt="Logo 2" height={50} width={50}/></div>
                    <div class="slide mx-4"><Image src="/adidas.png" alt="Logo 4" height={50} width={50}/></div>
                    {/* duplicate */}
                    <div class="slide mx-4"><Image src="/nike.png" alt="Logo 1" height={50} width={50}/></div>
                    <div class="slide mx-4 translate-y-[-2em]"><Image src="/ck.png" alt="Logo 2" height={50} width={50}/></div>
                    <div class="slide mx-4"><Image src="/adidas.png" alt="Logo 4" height={50} width={50}/></div>
                </div>
            </Parallax>
        </section>
    )
}

export default LogoSlider;