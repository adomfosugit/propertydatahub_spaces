'use client'
import React, { useMemo } from 'react'
import {Card,CardContent, CardFooter,} from "@/components/ui/card"
import { Carousel,CarouselContent,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { MailCheck, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { imageUrl } from '@/constants';
import Image from 'next/image';


type Props = {}

const Listings = ({productDetails}: any) => {
  const Mapcomponent = useMemo(() => dynamic(
    () => import('@/app/Components/Mapcomponent'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])


    
    const pathname = usePathname()
    //const { name,price,Spaceavailable,roomtype,image} = productDetails;
   const {PropertyName,PropertyRegion,Neighbourhood,StreetName,Longitude,Latitude,Bedrooms,Bathrooms,Washrooms,TotalFloorArea,Landsize,PropertyType,TransactionType,Amount} = productDetails
    
    const router = useRouter()

  return (
    <div className='flex flex-col mx-auto'>

    

    <div >
    <Card className='w-[300px] md:w-[500px] relative mx-auto '>
  
 {/* <CardContent className='w-full'>
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

  */}
      <CardContent className='w-full'>
    <Carousel >
      <CarouselContent>
      
      {imageUrl.map((img:any)=>(

        <Image src={img.url} alt='hotel pic' width={300} height={100} key={img.url} priority/>
 ))}  
         
      </CarouselContent >
      <CarouselPrevious  className='mx-[50px] bg-neutral-500/40 hover:bg-neutral-500/40 '/>
      <CarouselNext   className='mx-[50px]  bg-neutral-500/40 hover:bg-neutral-500/40 '/>
    </Carousel>
      </CardContent> 

  
  <CardFooter className='justify-center flex z-20 shadow-xl border '>
     <div className='mt-2'>
      <h1 className='font-bold text-xl text-center'>{PropertyName}</h1>
      <div className='flex space-x-10 items-center'>

      <div className='flex gap-2 items-center '>
      <p className='text-sky-900 font-bold'>
        {StreetName}
      </p>
      
    
      </div>
      <div className='flex gap-2'>
      <p className='text-sky-900 font-bold'>Price</p>
      <p>{Amount}K</p>
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

    <Table >
      <TableCaption className='text-bold text-[20px] text-green-600'>Property Details</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Region</TableHead>
          <TableHead>Coordinates</TableHead>
          <TableHead>Property Type</TableHead>
         
        </TableRow>
      </TableHeader>
      <TableBody>
      <TableRow >
            <TableCell className="font-medium">{PropertyRegion}</TableCell>  
            <TableCell className="font-medium">{Latitude}, {Longitude}</TableCell>
            <TableCell className="font-medium">{PropertyType}</TableCell>  
           
          </TableRow>
     
     
      </TableBody>
      
    </Table>
    <Table >
      <TableCaption className='text-bold text-[20px] text-green-600'>Property Details 2</TableCaption>
      <TableHeader>
        <TableRow>
        
          <TableHead>Floor Area</TableHead>
          <TableHead>Neighbourhood</TableHead>
          <TableHead >Landsize</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      <TableRow >
             
            <TableCell className="font-medium">{TotalFloorArea}</TableCell>  
            <TableCell className="font-medium">{Neighbourhood}</TableCell>  
            <TableCell className="font-medium">{Landsize}</TableCell>  
          </TableRow>
     
     
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="">{Amount},000</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    

    </div>
    
  )
}

export default Listings