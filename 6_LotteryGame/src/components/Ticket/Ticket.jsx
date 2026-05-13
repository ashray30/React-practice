import TicketNum from '../TicketNum/TicketNum';
export default function Ticket ({ticket}) {
    return(
        <div className="ticket">
            {ticket.map((num, index) => (
                <TicketNum key={index} num={num} />
            ))}
        </div>
    )
}