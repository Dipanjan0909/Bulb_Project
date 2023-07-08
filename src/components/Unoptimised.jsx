import React ,{useState} from 'react'
import Card from './Card';
import { Button } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export default function Unoptimised() {
    const [bulb, setBulb]= useState({
        isOn: false    
    })
  return (
    <div style={{display:'flex', flexDirection:'column' ,alignItems: 'center'}}>
    <Card obj={bulb.isOn}/>
    <div onClick={()=> setBulb({
        isOn: !bulb.isOn
    })}>
    <Button variant="outlined" endIcon={<PowerSettingsNewIcon/>}
    >
      Clic
    </Button>
    </div>
  </div>
  )
}
