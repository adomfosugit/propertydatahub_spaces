'use client'


import {Dialog,DialogContent,DialogTrigger} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'



export default function Mapcomponent() {
  //const position = [51.505, -0.09] 
  return (

    <Dialog>
    <DialogTrigger asChild> 
      <Button variant="outline">View On Map</Button>
    </DialogTrigger>
    <DialogContent className="w-[600px] bg-white h-[600px] overflow-hidden">
   
    <div className="">

    <MapContainer center={[7.3611685, -2.3289417]} zoom={15} >
    <TileLayer 
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
  </MapContainer>
    </div>
    </DialogContent>
  </Dialog>
)


  
    
  
}
