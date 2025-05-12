
import GetTicket from '../GetTicket/GetTicket';

function FindSeat() {
    const section = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    const randomSeats = (ticket) => {
        const sectionName = section[Math.floor(Math.random() * section.length)]; //Slumpa section
        const maxStart = 500 - ticket + 1;
        const startSeat = Math.floor(Math.random() * maxStart) + 1;

        const seats = Array.from({ length: ticket }, (_, i) => startSeat + i);
        return {
            section: sectionName, 
            seats,
        };
    };

    const assignSeats = () => {
        const orders = JSON.parse(localStorage.getItem('tiket-store')) || [];
        return orders.map((order) => {
            const seatAssignment = randomSeats(order.ticket);
            return {
                ...order,
                section: seatAssignment.section,
                seats: seatAssignment.seats,
            };
        });
    };

    const seatingPlan = assignSeats();

  return <GetTicket seatingPlan={seatingPlan} />;
  
}

export default FindSeat;