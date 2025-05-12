import Footer from "../../components/Footer/Footer";
import GetTicket from "../../components/GetTicket/GetTicket";
import './ticket.css';

function Tickets() {
  return (
    <>
    <section className="ticket-page">
      <h1 className="page__title__standard ticket__title">Your Tickets</h1>
      <GetTicket />
      
    </section>
    
    <Footer />
    </>
  );
}

export default Tickets;