import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex h-full  ">
        <div className="  mx-auto md:max-w-[50%] overflow-hidden flex items-center justify-center ">
            
                    <div className=" p-2 ring-2 ring-blue-400"><SignIn/> </div>
        </div>
        

    </div>

  )
}