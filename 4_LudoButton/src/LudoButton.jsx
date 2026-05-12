import { useState } from "react";

export default function LudoButton({color, updateMoves}){
    const [moves, setMoves] = useState(0)

    let updateMove=()=>{    
        setMoves((prevMoves)=>{
            return prevMoves+1
        })

         updateMoves(color)
        
    }
   
    return(
        <div>
            <p>{color} Moves:{moves}</p>
            <button onClick={updateMove} className={`${color}-btn`}>+1</button>
        </div>
    )

}   