'use client'

import { useEffect, useState } from "react";

export const Timer = () => {  
    const [d,setD] = useState <string>()
  
    const date = new Date();
    const showTime = date.getHours() + " h "
        + ' : ' + date.getMinutes() + " m "
        + " : " + date.getSeconds() + " s ";
      
    useEffect(()=>{
      return setD(showTime);
    },[])

        
  return (
    <div className="Timer">
    <p className="center bg-dark p-1 px-6 text-white"> {d}</p>
</div>
  );
};
