import { client } from "@/lib/client";
import { products } from "../page";
import Listings from "./Listings";
import Mapcomponent from "@/app/Components/Mapcomponent";

interface GetDataParams {
    params: {
      path: string;
    };
  }
async function getData({ params: { path } }: GetDataParams){
    const query = `*[_type== "product" && slug.current == '${path}'][0]`;
   
    const products = await client.fetch(query,  {cache:'force-cache'});
    return products; 
  }
export default async function Page({ params }: { params: { slug: string } }) {
    const products = (await getData({params: {path:params.slug}})) as products[]  
  console.log(products)
    return( <div className="pt-24">
        <div className="flex justify-between max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">

            <Listings productDetails={ products}/>
            
        </div>
        </div>)
  }
  //static rendering 