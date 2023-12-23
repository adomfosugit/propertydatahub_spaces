import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SearchIcon } from "lucide-react"
import Searcher from "./Searcher"

 function SearchModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">
            <SearchIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[300px] sm:max-w-[425px] bg-white">
       
            <Searcher />
 
      </DialogContent>
    </Dialog>
  )
}
export default SearchModal;