import Footer from "../../components/Footer/Footer";
import GetTicket from "../../components/GetTicket/GetTicket";

function Tickets() {
  return (
    <>
    <section className="order-Page">
      <h1 className="page__title__standard">Your Tickets</h1>
      <GetTicket />
      
    </section>
    
    <Footer />
    </>
  );
}

export default Tickets;