import React,{useState} from "react";
import Card from "./components/Card";

import { Button } from "@mui/material";
import Optimised from "./components/Optimised";
import Unoptimised from "./components/Unoptimised";
function App() {
  const [btn, setBtn]=useState('optimised');
  return(
    <>
    <button onClick={()=> setBtn('optimised')}>
      optimised
    </button>
    
    <button onClick={()=> setBtn('unoptimised')}>
      Unoptimized
    </button>
    {btn==="optimised"?<Optimised/> : <Unoptimised/>}
    </>
  );
}

export default App;