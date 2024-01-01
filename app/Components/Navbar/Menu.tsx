
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,

  DropdownMenuSeparator,
 
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react";
import SearchModal from "../SearchModal";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="mr-3 " >
            <MenuIcon size={35} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup >
        
   <DropdownMenuItem className="flex flex-row justify-center">
           <UserButton />
  </DropdownMenuItem>
            <Link href='/rooms'>
          <DropdownMenuItem>
            All Available Spaces
        </DropdownMenuItem>
            </Link>
          <DropdownMenuItem>
            Contact and About
          </DropdownMenuItem>
        
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
    
          <DropdownMenuItem>Advertise with Us</DropdownMenuItem>
         {/* write a conditioinal rendering*/}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default Menu;