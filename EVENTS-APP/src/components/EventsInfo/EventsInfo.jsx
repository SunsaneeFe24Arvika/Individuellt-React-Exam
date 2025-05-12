import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Button from "../Buttons/Button";
import useTicketStore from "../../stores/counter";
import { useEffect } from "react";



function EventsInfo() {
  const { id } = useParams();
  //console.log("ID from URL:", id);

  
  const url = "https://santosnr6.github.io/Data/events.json";
  const { data, isLoading, isError } = useFetch(url);

  const { setPrice,
          ticket, 
          price,
          increment, 
          decrement,
          addToCart          
        } = useTicketStore();
  

        const event = data?.events?.find((event) => event.id.toString() === id);
  
        useEffect(() => {
            if (event) {
              setPrice(event.price); //Uppdatera priset i store
                            
            }
        }, [data, id, setPrice]);

  if (isLoading) return <p className="loading msg">Laddar...</p>;
  if (isError) return <p className="error msg">Ett fel inträffade!</p>
  if (!event) return <p>Event hittades inte!</p>;
  
  const totalPrice = ticket * price; //räknar ut total price för event info sida.
  

  return (
    <section className="event-info">
      <article className="event-info__box">
        <h1 className="event__title page__title-big">{event.name}</h1>
        <h3 className="event-info__date">{event.when.date} kl {event.when.from} - {event.when.to}</h3>
      
        <p className="event__place">@ {event.where}</p>

        <div className="event-info__ticket">
        <h3 className="event__total-price">{totalPrice} sek</h3>
        <div className="event-info__button">
        <Button
        className="decrement-btn" 
        text="-"
        onClick={() => decrement(event.id)}
        />
        
        <span className="event__quantity">{ticket}</span>
        
        <Button
        className="increment-btn"
        text="+"
        onClick={() => increment(event.id)}
            
        /> 
        </div>           
        </div>
                
      </article> 
      <Button 
        className="add-cart"
        text="Lägg i varukorgen"
        onClick={() => {
          console.log("Event som skickas till addToCart:", event);
        addToCart(event);
        }}
      />

    </section>

  
  );
}

export default EventsInfo;
