import { useFetch } from "../../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
//import Buttons from "../Buttons/Buttons";
import { Link } from 'react-router-dom';
import useTicketStore from "../../stores/counter";
import { useEffect } from "react";


function EventsInfo() {
  const { id } = useParams();
  console.log("ID from URL:", id); 

  const navigate = useNavigate();
  const url = "https://santosnr6.github.io/Data/events.json";
  const { data, isLoading, isError } = useFetch(url);
  const { setPrice, ticket, totalPrice, increment, decrement } = useTicketStore();

  useEffect(() => {
    if (data && data.events) {
      const event = data.events.find((event) => event.id.toString() === id);
      if (event) {
        setPrice(event.price); //Uppdatera priset i store
      }
    }
  }, [data, id, setPrice]);

  if (isLoading) return <p className="loading msg">Laddar...</p>;
  if (isError) return <p className="error msg">Ett fel inträffade!</p>

  const event = data?.events?.find((event) => event.id.toString() === id);
  console.log("Found event:", event);
  
  if (!event) return <p>Event hittades inte!</p>

  const handleBackToHome = () => {
    navigate("/cart");
  }; 
  
  

  return (
    <section className="event-info">
      <article className="event-info__box">
        <h1 className="event__title page__title page__title-big">{event.name}</h1>
        <h3 className="event-info__date">{event.when.date}</h3>
        <span className="event__start">{event.when.from} - {event.when.to}</span>
        <p className="event__place">@ {event.where}</p>
        <h3 className="event__total-price">{totalPrice} sek</h3>
        <Button 
        text="-"
        onClick={decrement}
        />
        <p className="amount-ticket">{ticket}</p>
        <Button 
        text="+"
        onClick={increment}
        />
        
        

        
      </article>

      <Link>
      <Button       
        text="Lägg i varukorgen"
        onClick={handleBackToHome}
      />
      </Link>    
      
    </section>

  
  );
}

export default EventsInfo;

