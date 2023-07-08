import React,{useState} from "react";
import Card from "./components/Card";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Button } from "@mui/material";
function App() {
  const [bulb, setBulb]=useState(false);
  return(
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

export default App;