import React from 'react'

const TestimonialCard = (props) => {
    return (
        <div className='h-[27%] w-[66%] flex flex-col justify-end items-start p-2 bg-center bg-cover
        rounded-lg' 
        style={{backgroundImage: `url(${props.src})`}}>
            <p className='text-white text-[1.2em]'>{props.name}</p>
            <span className='text-white text-[1.2em]'>★★★★★</span>
        </div>
    )
}

export default TestimonialCard;