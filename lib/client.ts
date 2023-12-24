
import { createClient} from "next-sanity"
import imageUrlBuilder from '@sanity/image-url'
export const client = createClient({
    projectId: 'zu6rp5c4',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn:false
    //token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})
const builder = imageUrlBuilder(client);
export const urlFor = (source:string) => builder.image(source);