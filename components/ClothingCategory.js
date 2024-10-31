import React from 'react'
import Image from 'next/image';

const ClothingCategory = (props) => {
    return (
        <div className='flex flex-col items-center gap-2'>
            <Image src={props.src} alt='category' height={50} width={50}
            className='w-full'/>
            <p>{props.name}</p>
        </div>
    )
}

export default ClothingCategory;