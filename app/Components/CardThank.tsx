import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
type Props = {}

const CardThank = (props: Props) => {
  return (
    <Dialog defaultOpen={true}>
   <DialogTrigger asChild>
    Open
   </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Thank You </DialogTitle>
        <DialogDescription>
          Thank you for Booking your hostel with
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  
  )
}

export default CardThank