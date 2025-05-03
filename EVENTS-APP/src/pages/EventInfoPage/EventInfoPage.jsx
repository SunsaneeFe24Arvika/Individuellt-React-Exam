import EventsInfo from "../../components/EventsInfo/EventsInfo";


function EventInfoPage() {
  
  return (
    <section className="event-info-page">
      <h1 className="page__title">Event</h1>
      <h3 className="event-msg">
        You are about to score some ticket to
      </h3>
      <EventsInfo />
      
      
            
    </section>
  );
}

export default EventInfoPage;