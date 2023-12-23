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
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Share2Icon, ShareIcon } from 'lucide-react';
type Props = {
    name:string;
    imageUrl:{url:string;}[]
    roomType:string;
}

const CardList = ({name,imageUrl,roomType}: Props) => {
  return (
    <Card className='w-[300px] md:w-[250px] relative'>
  
    <CardContent className='w-full'>
    <Carousel >
      <CarouselContent>
      {imageUrl.map((img)=>(

        <Image src={img.url} alt='hotel pic' width={300} height={100} />
      ))}
         
      </CarouselContent >
      <CarouselPrevious  className='mx-[50px] bg-neutral-500/40 hover:bg-neutral-500/40 border-none'/>
      <CarouselNext   className='mx-[50px]  bg-neutral-500/40 hover:bg-neutral-500/40 border-none'/>
    </Carousel>
    </CardContent>

    
    <CardFooter className='justify-between flex z-20 shadow-xl border '>
       <div>
        <h1>{name}</h1>
        <p>{roomType}</p>
        <p>occupied</p>

       </div>
       <div className='flex flex-col gap-y-2 mt-2'>
       <Button>Book</Button>
       <Button className='bg-neutral-400/30 ring-2 ring-slate-900 '>
            <Share2Icon size={20} color='black'/>
        </Button>

       </div>
    </CardFooter>
 
  </Card>
  )
}

export default CardList