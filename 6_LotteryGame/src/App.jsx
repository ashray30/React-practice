import { sum } from "./components/Lottery/calculation";
import Lottery from "./components/Lottery/Lottery";
// import {sum} from "./components/Lottery/calculation";

function App () {
  let winCondition = (ticket) =>{
    // return ticket.some(num => num > 9); // Check if any number in the ticket is greater than 9
    // return sum(ticket) === 15; // return sum(ticket) > 15; // return sum(ticket) < 15;
    // return sum(ticket) > 15; // return sum(ticket) < 15;
      // return sum(ticket) % 2 === 0; // Check if the sum of the ticket numbers is even
      return ticket.every(num => num === ticket[0]); // Check if all numbers in the ticket are the same


  }
  return(
    <Lottery n={3} winCondition={winCondition} />
  )

}
export default App;