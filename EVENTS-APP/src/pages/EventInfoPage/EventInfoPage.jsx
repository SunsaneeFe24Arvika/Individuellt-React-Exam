import EventsInfo from "../../components/EventsInfo/EventsInfo";
import { useState } from 'react';

function EventInfoPage() {
  const [ticket, setTicket] = useState(0);
  return (
    <section className="event-info-page">
      <h1 className="page__title">Event</h1>
      <h3 className="event-msg">
        You are about to score some ticket to
      </h3>
      <EventsInfo />
      <div className="tickets">
        
      </div>
      
            
    </section>
  );
}

export default EventInfoPage;