'use client'
import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import wilayas from '@/lib/wilayas'
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
import {Select,SelectContent,SelectGroup,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"

const Form = () => {
    const [index,setIndex] = useState(0)
    const wilayaFilter = (wilaya)=>{
        for(let i=0;i<wilayas.length;i++){
            if(wilayas[i].name === wilaya){
                setIndex(i);
                break;
            }
        }
    }
    useEffect(() => {
    }, [index]);
    return (
        <form className='h-full flex flex-col justify-evenly items-center pt-10'>
            <Input type="text" placeholder="full name" className='w-[90%]'/>
            <Input type="number" placeholder="phone number" className='w-[90%]'/>
            <Select onValueChange={(value) => {wilayaFilter(value);console.log(value)}}>
                <SelectTrigger className="w-[90%]">
                    <SelectValue placeholder="Select a wilaya"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    {wilayas.map((w)=>(
                        <SelectItem value={w.name} key={w.name}>{w.name}</SelectItem>
                    ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-[90%]">
                    <SelectValue placeholder="Select a commune" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {wilayas[index].communes.map((b)=>(
                            <SelectItem value={b} key={b}>{b}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button className='text-white py-6 px-12'>
                <Link href='/thanks'>SUBMIT</Link>
            </Button>
        </form>
    )
}

export default Form;