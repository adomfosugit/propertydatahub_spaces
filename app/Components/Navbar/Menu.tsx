
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

function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="mr-3 " >
            <MenuIcon size={35} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
        
          <DropdownMenuItem>
            About
        </DropdownMenuItem>
          <DropdownMenuItem>
            Contact
          </DropdownMenuItem>
          <DropdownMenuItem>
            Your Bookings
          </DropdownMenuItem>
          <DropdownMenuItem>
            Payment Guide
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
    
          <DropdownMenuItem>Advertise with Us</DropdownMenuItem>
         {/* write a conditioinal rendering*/}
        <DropdownMenuItem>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default Menu;