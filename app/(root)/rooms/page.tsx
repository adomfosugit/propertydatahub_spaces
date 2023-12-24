
import CardList from '@/app/Components/Card/CardList'
import { hostelListings } from '@/constants'
import { client } from '@/lib/client'
import Image from 'next/image'
import React from 'react'



export type products={
    _type: 'document';
    _id?: string;
    _rev?: string;
    _createdAt?: string;
    _updatedAt?: string;
    name: string;
    slug: {
      _type: 'slug';
      current: string;
    };
    price: number;
    Spaceavailable: 1 | 2 | 3 | 4;
    roomtype: '1 in 1' | '2 in 1' | '3 in 1' | '4 in 1';
    image: {
      _type: 'array';
      hotspot: boolean;
      options: {
        hotspot: boolean;
      };
      of: {
        _type: 'image';
      }[];
    };
  };

  
  async function getData(){
    const query = '*[_type== "product" ]';
   
    const products = await client.fetch(query,  {next: {
      
      revalidate: 40,// look for updates to revalidate cache every hour
    }});
    return products; 
  }


const page = async() => {
  const products = (await getData()) as products[]
  console.log(products)
  
  return (
    <div className='flex justify-center max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
      <div className='pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
      {products.map((list)=> (
      <CardList key={list._id} productDetails={list} />
      
      ))}
      </div>
      

    </div>
  )
}
  

 
  
 

export default page