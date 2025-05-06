import { useFetch } from "../../hooks/useFetch";
import useTicketStore from "../../stores/counter";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';


function CartList() {

  const { id } = useParams();
  //console.log("ID from URL:", id);
  const navigate = useNavigate();

  
  
  const url = "https://santosnr6.github.io/Data/events.json";
  const { data, isLoading, isError } = useFetch(url);

  const { setPrice,
          ticket, 
          price,
          order,
          totalPrice, 
          increment, 
          decrement,
          addToCart,
          removeFromCart,
          completeOrder,
          resetTotalPrice
          
        } = useTicketStore();
        console.log("Order från store:", order);

    if (!order || order.length === 0) {
      return <p>Din varukorg är tom!</p>;

    }
    const event = data?.events?.find((event) => event.id.toString() === id);
    useEffect(() => {
                if (event) {
                  setPrice(event.price); //Uppdatera priset i store
                  
                }
            }, [data, id, setPrice]);
            if (isLoading) return <p className="loading msg">Laddar...</p>;
            if (isError) return <p className="error msg">Ett fel inträffade!</p>
            if (!event) return <p>Event hittades inte!</p>;
  
  
  
  return (
    
    <ul>
    {order.map((event) => (
      <li key={event.id}>
        <h1 className="event__title page__title page__title-big">{event.name}</h1>
        <h3 className="event-info__date">{event.when.date}</h3>
        <span className="event__start">{event.when.from} - {event.when.to}</span>
        <p className="event__place">@ {event.where}</p>
        <div className="event-info__ticket">
        <h3 className="event__total-price">{totalPrice} sek</h3>
        
        <div className="event-info__button">
        <Button
        className="decrement-btn" 
        text="-"
        onClick={() => decrement(event.id)} 
        />
        
        <span className="event__quantity">{event.ticket}</span>
        
        <Button
        className="increment-btn"
        text="+"
        onClick={() => increment(event.id)}
        /> 
        </div>           
        </div>
        
          
      </li>
      
    ))}
    <Button 
      className="complete-order__button"
      text="Skicka order"
      onClick={() => {
        console.log("Events som köpt:", event);
      completeOrder();
      resetTotalPrice();
      navigate('/ticket');
        
      }}
    />
    </ul>
        
    
    
  );
}

export default CartList;

