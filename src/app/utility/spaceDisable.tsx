import React from 'react'

export default function SpaceDisable(e : any) {
        if(e.code === "Space") {
          e.preventDefault();
          return false;  
    }
}
