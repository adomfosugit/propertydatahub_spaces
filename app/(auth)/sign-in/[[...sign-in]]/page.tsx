'use client'
import { SignIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";
 
export default function Page() {
  const [favoriteNumber, setFavoriteNumber] = useState("")

  useEffect(() => {
    let value
    // Get the value from local storage if it exists
    const storedPathname = localStorage.getItem('redirectPath') || ''
    setFavoriteNumber(storedPathname)
  }, [])
  return (
    <div className="flex h-full  ">
        <div className="  mx-auto md:max-w-[50%] overflow-hidden flex items-center justify-center ">
            
                    <div className=" p-2 ring-2 ring-blue-400"><SignIn  redirectUrl={favoriteNumber}  /> </div>
        </div>
        

    </div>

  )
}