import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const ItemCard = (props) => {
    return (
        <div className=''>
            <Image src={props.src} alt='item' height={50} width={50}
            className='w-full h-[13em]'/>
            <p className='font-bold'>{props.name}</p>
            <p>{props.price} DA</p>
            <Button>see more</Button>
        </div>
    )
}

export default ItemCard;