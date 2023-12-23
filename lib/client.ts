import { createClient} from "next-sanity"
import imageUrlBuilder from '@sanity/image-url'
export const client = createClient({
    projectId: '9qo5nhou',
    dataset: 'hostelbook',
    apiVersion: '2022-03-07',
    useCdn: true,
    //token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})
const builder = imageUrlBuilder(client);
export const urlFor = (source:string) => builder.image(source);