'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import FreeShipping from './FreeShipping';

const Nav = () => {
    const [menu,setMenu] = useState(false);
    const [cart,setCart] = useState(false);
    const open = () =>{
        setMenu(true);
        console.log(menu)
    }
    const close = () =>{
        setMenu(false);
    }
    const openCart = () =>{
        setCart(true);
        console.log(cart)
    }
    const closeCart = () =>{
        setCart(false);
    }
    return (
        <header className='w-full fixed z-10 bg-white'>
            <div className='h-[4em] grid grid-cols-[4em_1fr_2.5em_2.5em] px-5'>
                <Image src='/menu.png' alt='menu' height={35} width={35} className='self-center justify-self-start'
                onClick={open}/>
                <p className='text-[2em] self-center justify-self-center'>gym</p>
                <Image src='/search.png' alt='search' height={35} width={35} className='self-center'/>
                <Image src='/cart.png' alt='cart' height={35} width={35} className='self-center'
                onClick={openCart}/>
            </div>
            <nav className={`h-[100vh] w-full bg-white px-5 fixed top-0 z-20
            grid grid-rows-[5em_1em_3em_3em_3em_3em_3em] gap-3 transition-all duration-200
            ${menu ? 'translate-x-[0]' : 'translate-x-[-100%]'}`}>
                <div className='h-[5em] flex justify-between items-center'>
                    <Image src='/close.png' alt='menu' height={35} width={35}
                    onClick={close}/>
                    <p className=''>menu</p>
                </div>
                <div></div>
                <Link href='/' className='ml-1'>Home</Link>
                <Link href='/' className='ml-1'>Clothes</Link>
                <Link href='/' className='ml-1'>Accesories</Link>
                <Link href='/' className='ml-1'>Nutritions</Link>
                <Link href='/' className='ml-1'>Contact</Link>
            </nav>
            <div className={`h-[100vh] w-full bg-white px-5 fixed top-0 z-40 grid grid-rows-[4em_3em_20em_1fr]
            transition-all duration-200 ${cart ? 'translate-x-[0]' : 'translate-x-[100%]'}`}>
                <div className='h-[5em] flex justify-between items-center'>
                    <p className=''>Shoping Cart</p>
                    <Image src='/close.png' alt='menu' height={35} width={35}
                    onClick={closeCart}/>
                </div>
                <FreeShipping />
                <div className='h-[30em] w-full px-1 overflow-auto'>
                    <CartItem name='hoodie warrior' colorSize='white/L' price='2500' src='/hoodie.jpg'/>
                    <CartItem name='Tshirt' colorSize='white/M' price='1500' src='/tshirt.jpg'/>
                    <CartItem name='sport Pants' colorSize='white/34' price='1200' src='/pants.jpg'/>
                </div>
                <CartTotal price='8000'/>
            </div>
        </header>
    )
}
export default Nav;