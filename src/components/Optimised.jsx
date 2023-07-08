import React ,{useState} from 'react'
import Card from './Card';
import { Button } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
export default function Optimised() {
const [bulb, setBulb]=useState(false);
  return (
    <div style={{display:'flex', flexDirection:'column' ,alignItems: 'center'}}>
      <Card obj={bulb}/>
      <div onClick={()=> setBulb(!bulb)}>
      <Button variant="outlined" endIcon={<PowerSettingsNewIcon/>}
      >
        Click
      </Button>
      </div>
    </div>
  );
}
