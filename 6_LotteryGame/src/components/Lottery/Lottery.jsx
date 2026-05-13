import { useState } from "react";
import { genTicket, sum } from "./calculation";
import Ticket from "../Ticket/Ticket";

export default function Lottery ({n, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    return(
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                 {/* {ticket.map((num, index) => (
                    <span key={index} className="number">{num}</span>
                    
                ))} */}
                <Ticket ticket={ticket} />
            </div>
            <button onClick={() => setTicket(genTicket(n))}>Generate New Ticket</button>
            <h3>{isWinning ? "Congratulations! You won!" : "Keep trying!"}</h3>
        </div>
        )
}