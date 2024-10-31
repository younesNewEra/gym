import React from 'react'
import { Button } from '@/components/ui/button';
const CartTotal = (props) => {
    return (
        <div className='w-full self-end mb-5'>
            <div className='flex justify-between mb-3'>
                <p className='font-semibold'>Subtotal</p>
                <p className='font-semibold'>{props.price} DA</p>
            </div>
            <Button className='bg-blue-950 text-white py-8 w-full'>Checkout</Button>
        </div>
    )
}

export default CartTotal;