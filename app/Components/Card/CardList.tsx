'use client'
import React from 'react'
import {
    Card,
    CardContent,
    
    CardFooter,
   
  } from "@/components/ui/card"
  import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Share2Icon, ShareIcon } from 'lucide-react';
import { urlFor } from '@/lib/client';
type Props = {
    productDetails: {
        name:string;
        price:number;
        Spaceavailable:string;
        roomtype:string;
        image:any;
    }
    
    
}

const CardList = ({productDetails}: Props) => {
  console.log(productDetails)
  const {name,price,Spaceavailable,roomtype,image} = productDetails;
  return (
    <Card className='w-[300px] md:w-[250px] relative'>
  
    <CardContent className='w-full'>
    <Carousel >
      <CarouselContent>
      
  {image.map((img:any)=>(

        <Image src={urlFor(img).url()} alt='hotel pic' width={300} height={100} key={img._key} priority/>
 ))}  
         
      </CarouselContent >
      <CarouselPrevious  className='mx-[50px] bg-neutral-500/40 hover:bg-neutral-500/40 '/>
      <CarouselNext   className='mx-[50px]  bg-neutral-500/40 hover:bg-neutral-500/40 '/>
    </Carousel>
    </CardContent>

    
    <CardFooter className='justify-between flex z-20 shadow-xl border '>
       <div className='mt-2'>
        <h1 className='font-bold text-xl'>{name}</h1>
        <div className='flex gap-2'>
        <p className='text-sky-900 font-bold'>Room Type</p>
        <p >{roomtype}</p>
        </div>
        <div className='flex gap-2'>
        <p className='text-sky-900 font-bold'>Price</p>
        <p>GHC {price}</p>
        </div>
        <div className='flex gap-2'>
        <p className='text-sky-900 font-bold'>Beds Available</p>
        <p>{Spaceavailable}</p>
        </div>

       </div>
       <div className='flex flex-col gap-y-2 mt-2'>
       <Button>Book</Button>
      

       </div>
    </CardFooter>
 
  </Card>
  )
}

export default CardList