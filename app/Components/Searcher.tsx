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


const formSchema = z.object({
  
  Room: z.string().min(2,{message:'Required*'}),
  Gender: z.string().min(2,{message:'Required*'}),
  Location: z.string().min(2,{message:'Required*'}),
})

 function Searcher() {
  // ...
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          Room: '',
          Gender: '',
          Location: ''
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
       <h1 className="text-center font-bold text-[25px]"> Book Your Room </h1>
      
        <FormField
          control={form.control}
          name="Room"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Room</FormLabel>
              <FormControl>
              <Select onValueChange={field.onChange} >
                <SelectTrigger className="w-[250px] text-black">
                    <SelectValue placeholder="Select Room" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Room Type</SelectLabel>
                    <SelectItem value="1 in 1">1 in 1 </SelectItem>
                    <SelectItem value="2 in 1">2 in 1 </SelectItem>
                    <SelectItem value="3 in 1">3 in 1 </SelectItem>
                    <SelectItem value="4 in 1">4 in 1 </SelectItem>
                    
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
          name="Gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>
              <Select  onValueChange={field.onChange}>
                <SelectTrigger className="w-[250px] text-black">
                    <SelectValue placeholder="Select Gender"  />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Gender</SelectLabel>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
            </Select>
              </FormControl>
              <FormMessage />
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
              <Select onValueChange={field.onChange} >
                <SelectTrigger className="w-[250px] text-black">
                    <SelectValue placeholder="Select Location"  />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Location </SelectLabel>
                    <SelectItem value="Annex">Annex</SelectItem>
                    <SelectItem value="Ayeduase">Ayeduase</SelectItem>
                    <SelectItem value="Bomso">Bomso</SelectItem>
                  </SelectGroup>
                </SelectContent>
            </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       
        <Button type="submit" className="w-full ">Submit</Button>
      </form>
    </Form>
  )
}
export default Searcher;