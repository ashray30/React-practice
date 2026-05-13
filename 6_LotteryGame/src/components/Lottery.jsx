import { useState } from "react";
import { genTicket, sum } from "./calculation";

export default function Lottery () {
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;
    

    return(
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                {ticket.map((num, index) => (
                    <span key={index} className="number">{num}</span>
                    
                ))}
            </div>
            <button onClick={() => setTicket(genTicket(3))}>Generate New Ticket</button>
            <h3>{isWinning ? "Congratulations! You won!" : "Keep trying!"}</h3>
        </div>
        )
}