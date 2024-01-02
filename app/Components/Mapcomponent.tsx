'use client'


import {Dialog,DialogContent,DialogTrigger} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { MapContainer, Marker, Popup, SVGOverlay, TileLayer, useMap } from 'react-leaflet'
import { useMapEvent } from 'react-leaflet/hooks'

function MyComponent() {
  const map = useMapEvent('click', () => {
    map.setView([50.5, 30.5], map.getZoom())
  })
  return null
}

export default function Mapcomponent() {
  //const position = [51.505, -0.09]
 

  return (

    <Dialog>
    <DialogTrigger asChild> 
      <Button variant="outline">View On Map</Button>
    </DialogTrigger>
    <DialogContent className="w-[600px] bg-white h-[600px] overflow-hidden">
   
    <MapContainer center={[5.6037,0.1870]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <SVGOverlay attributes={{ stroke: 'red' }} bounds={ [[51.49, -0.08], [51.5, -0.06]]}>
      <rect x="0" y="0" width="100%" height="100%" fill="blue" />
      <circle r="5" cx="10" cy="10" fill="red" />
      <text x="50%" y="50%" stroke="white">
        text
      </text>
    </SVGOverlay>
  </MapContainer>
    </DialogContent>
  </Dialog>
)


  
    
  
}
