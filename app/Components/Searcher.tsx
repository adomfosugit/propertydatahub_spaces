"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { Properties } from "@/constants"


const formSchema = z.object({
  
  Space: z.string().min(2,{message:'Required*'}),
  Location: z.string().min(2,{message:'Required*'}),
})

 function Searcher() {
  const router = useRouter()
  // ...
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          Space: '',
         
          Location: ''
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
      
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        router.push(`/query/${values.Space}|${values.Location}`)
        console.log(values)
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
       <h1 className="text-center font-bold text-[25px] ">Find Your Space </h1>
      
        <FormField
          control={form.control}
          name="Space"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Space</FormLabel>
              <FormControl>
              <Select onValueChange={field.onChange} >
                <SelectTrigger className="w-[250px] text-black">
                    <SelectValue placeholder="Select Space" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Select Space</SelectLabel>
                    <SelectItem value="Land">Land </SelectItem>
                    <SelectItem value="Residential(House)">Residential(House) </SelectItem>
                    <SelectItem value="Residentia(Apartment)">Residential(Apartment) </SelectItem>
                    <SelectItem value="Industrial(Warehouse)">Industrial(Warehouse) </SelectItem>
                    <SelectItem value="Shop">Shop </SelectItem>
                    <SelectItem value="Residential(Townhouse)">Residential(Townhouse) </SelectItem>
                    <SelectItem value="industrial(manufacturing)">Industrial(manufacturing) </SelectItem>
                 
                    
                  </SelectGroup>
                </SelectContent>
            </Select>
              </FormControl>
              <FormMessage  />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
              <Select  onValueChange={field.onChange}>
                <SelectTrigger className="w-[250px] text-black">
                    <SelectValue placeholder="Select Location"  />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Location</SelectLabel>
                    <SelectItem value="Accra">Accra</SelectItem>
                    <SelectItem value="Kumasi">Kumasi</SelectItem>
                    <SelectItem value="Takoradi">Takoradi</SelectItem>
                  </SelectGroup>
                </SelectContent>
            </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       
      
       
        <Button type="submit" className="w-full bg-green-700 hover:bg-green-600 ">Submit</Button>
      </form>
    </Form>
  )
}
export default Searcher;