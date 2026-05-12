import LudoButton from "./LudoButton";
import { useState } from "react";
import "./App.css"

export default function App(){
    let [moves, setMoves] = useState({
        blue:0,
        yellow:0,
        red:0,
        green:0,
    })

    let [arr, setArr] = useState(["noMoves"])

    let updateMoves = (color) =>{
        setMoves((prevMoves) =>{
            return {...prevMoves, [color]: prevMoves[color]+1}
        })
        setArr((prevArr)=>{
            return[...prevArr, `${color} moved`]
        })
    }

    return(
        <div>
            <h1>Game Begins!</h1>
            <p>Moves History:</p>
            <div>
                {arr.map((move, index) => (
                    <p key={index}>{move}</p>
                ))}
                <LudoButton color="blue" updateMoves={updateMoves} />
                <LudoButton color="yellow" updateMoves={updateMoves} />
                <LudoButton color="red" updateMoves={updateMoves} />
                <LudoButton color="green" updateMoves={updateMoves} />
            </div>
        </div>
    )   
        
    




}   
