import CardList from '@/app/Components/Card/CardList'
import { Properties } from '@/constants'
import React from 'react'

type Props = {}

const page = ({ params }: { params: { slug: string } }) => {
 
  const decode = decodeURI(params.slug)
  console.log(decode)
  function splitString(inputString:string) {
    // Use the split method to split the string based on the "|" character
    const splitArray = inputString.split('|');

    // Return the resulting array
    return splitArray;
  }
const resultArray = splitString(decode);

console.log(resultArray);
       {/* where search query will render */}
      const products = Properties.filter(num => num.PropertyType ===  resultArray[0]);
       console.log(products)
  return (
    <div className='flex justify-center max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
     <div  className='pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-8'>
      {products.map((kist) => (
        <CardList key={kist.Latitude} productDetails={kist} />
      ))}
     </div>
    </div>
  )
}

export default page