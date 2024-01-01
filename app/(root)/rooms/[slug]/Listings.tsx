'use client'
import React, { useMemo } from 'react'
import {Card,CardContent, CardFooter,} from "@/components/ui/card"
import { Carousel,CarouselContent,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"
import { Button } from '@/components/ui/button';
import { urlFor } from '@/lib/client';
import { usePaystackPayment } from 'react-paystack';
import { useRouter } from 'next/navigation'
import { useUser } from "@clerk/nextjs";
import { usePathname } from 'next/navigation'
import { MailCheck, MapIcon, MapPin, Phone, PhoneCall } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Mapcomponent from '@/app/Components/Mapcomponent';
import dynamic from 'next/dynamic';


type Props = {}

const Listings = ({productDetails}: any) => {
  const Map = useMemo(() => dynamic(
    () => import('@/app/Components/Mapcomponent'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])


    
    const pathname = usePathname()
    const {name,price,Spaceavailable,roomtype,image} = productDetails;
    const { isSignedIn, user, isLoaded } = useUser();

    
    const router = useRouter()

  return (
    <div className='flex flex-col mx-auto'>

    

    <div >
    <Card className='w-[300px] md:w-[500px] relative mx-auto '>
  
  <CardContent className='w-full'>
  <Carousel >
    <CarouselContent>
    
    {image.map((img:any)=>(

      <img src={urlFor(img).url()} alt='hotel pic'   key={img._key} />
))}  
       
    </CarouselContent >
    <CarouselPrevious  className='mx-[50px] bg-neutral-500/40 hover:bg-neutral-500/40 '/>
    <CarouselNext   className='mx-[50px]  bg-neutral-500/40 hover:bg-neutral-500/40 '/>
  </Carousel>
  </CardContent>

  
  <CardFooter className='justify-center flex z-20 shadow-xl border '>
     <div className='mt-2'>
      <h1 className='font-bold text-xl text-center'>{name}</h1>
      <div className='flex space-x-10 items-center'>

      <div className='flex gap-2 items-center '>
      <p className='text-sky-900 font-bold'>
        <MapPin />
      </p>
      
      <Mapcomponent/>
      </div>
      <div className='flex gap-2'>
      <p className='text-sky-900 font-bold'>Price</p>
      <p>{price}</p>
      </div>
      </div>
     </div>
  </CardFooter>
  <div className='flex gap-2 bg-green-700 py-2 justify-evenly'>
      <div>
        <FaWhatsapp color='white' size={25} className='mx-auto'/>
        <div className='flex space-x-2 text-sm text-white'>
        <p>WhatsApp</p>
       

        </div>
      </div>
      <div>
        <Phone color='white'  className='mx-auto'/>
        <div className='flex space-x-2 text-sm text-white'>
        <p>Call</p>
     

        </div>
      </div>
      <div>
        <MailCheck color='white' size={25} className='mx-auto'/>
        <div className='flex space-x-2 text-sm text-white'>
        Email

       </div>
      </div>
      
     
      </div>

     
</Card>

    </div>
    

    </div>
    
  )
}

export default Listings