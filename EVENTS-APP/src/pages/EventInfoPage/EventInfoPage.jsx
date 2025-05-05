import EventsInfo from "../../components/EventsInfo/EventsInfo";
import Footer from "../../components/Footer/Footer";
import './eventinfopage.css';


function EventInfoPage() {
  
  return (
    <>
    <section className="event-info-page">
      <h1 className="page__title">Event</h1>
      <h3 className="event-msg">
        You are about to score some ticket to
      </h3>
      <EventsInfo />
    </section>
    
         <Footer />
    </>
    
  );
}

export default EventInfoPage;