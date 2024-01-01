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
  import { FaToilet } from "react-icons/fa";
import Image from 'next/image';
import { Button } from '@/components/ui/button';

import { urlFor } from '@/lib/client';
import Link from 'next/link';
import { Bed, CarFront, LocateIcon, MapPin, ShowerHead } from 'lucide-react';
type Props = {
    productDetails: {
        name:string;
        price:number;
        Spaceavailable:string;
        roomtype:string;
        image:any;
    }
    
    
}

const CardList = ({productDetails}: any) => {
  console.log(productDetails)
  const {name,price,Spaceavailable,roomtype,image} = productDetails;
  return (
    <Card className='w-[350px] md:w-[300px] relative'>
  
    <CardContent className='w-full'>
    <Carousel >
      <CarouselContent>
      
      {image.map((img:any)=>(

        <Image src={urlFor(img).width(300).height(200).url()} alt='hotel pic' width={300} height={100} key={img._key} priority/>
 ))}  
         
      </CarouselContent >
      <CarouselPrevious  className='mx-[50px] bg-neutral-500/40 hover:bg-neutral-500/40 '/>
      <CarouselNext   className='mx-[50px]  bg-neutral-500/40 hover:bg-neutral-500/40 '/>
    </Carousel>
    </CardContent>

    
    <CardFooter className='justify-center flex z-20 shadow-xl border '>
       <div className='mt-2'>
        <h1 className='font-bold text-xl text-center'>{name}</h1>
        <div className='flex space-x-5'>

        <div className='flex gap-2'>
        <p className='text-sky-900 font-bold'>
          <MapPin />
        </p>
        <p >Cantoment</p>
        </div>
        <div className='flex gap-2'>
        <p className='text-sky-900 font-bold'>Price</p>
        <p>{price}</p>
        </div>
        </div>
       

       <div className='flex flex-col gap-y-2 text-center'>
        <Link href= {`/rooms/${productDetails.slug.current}`}>
          <Button variant={'link'}>More Details</Button>
        </Link>
      

       </div>
       </div>
    </CardFooter>
    <div className='flex gap-2 bg-green-700 py-2 justify-evenly'>
        <div>
          <Bed color='white' className='mx-auto'/>
          <div className='flex space-x-2 text-sm text-white'>
          <p>1</p>
          <p>Bedroom</p>

          </div>
        </div>
        <div>
          <ShowerHead color='white' className='mx-auto'/>
          <div className='flex space-x-2 text-sm text-white'>
          <p>1</p>
          <p>Bath</p>

          </div>
        </div>
        <div>
          <FaToilet color='white' size={25} className='mx-auto'/>
          <div className='flex space-x-2 text-sm text-white'>
          <p>1</p>
          <p>Bedroom</p>

          </div>
        </div>
        <div>
          <CarFront color='white' className='mx-auto'/>
          <div className='flex space-x-2 text-sm text-white'>
          <p>1</p>
          <p>Parking</p>

          </div>
        </div>
       
        </div>
 
  </Card>
  )
}

export default CardList