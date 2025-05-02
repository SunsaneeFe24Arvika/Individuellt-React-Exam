import { useFetch } from "../../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import { Link } from 'react-router-dom';

function EventsInfo() {
  const { id } = useParams();
  console.log("ID from URL:", id);
  

  const navigate = useNavigate();
  const url = "https://santosnr6.github.io/Data/events.json";
  const { data, isLoading, isError } = useFetch(url);

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
        <p className="event__place">{event.where}</p>

        <p className="event__price-text">{event.price} sek</p>

        
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

