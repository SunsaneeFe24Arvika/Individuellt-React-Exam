import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Button from "../Buttons/Button";
import useTicketStore from "../../stores/counter";
import { useLocalStorage } from "../../stores/useLocalStorage";
import { useEffect } from "react";
//import HandleToOrder from "../../components/HandleToOrder/HandleToOrder";


function EventsInfo() {
  const { id } = useParams();
  console.log("ID from URL:", id);

  //const navigate = useNavigate();
  const url = "https://santosnr6.github.io/Data/events.json";
  const { data, isLoading, isError } = useFetch(url);
  const { setPrice, ticket, price, totalPrice, increment, decrement} = useTicketStore();
  const { eventList, addToCart, removeFromCart } = useLocalStorage();

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

  const isInCart = eventList.find((e) => e.id === event.id);

  

  // const handleToOrder = () =>
  //   navigate('/order')
  
  

  return (
    <section className="event-info">
      <article className="event-info__box">
        <h1 className="event__title page__title page__title-big">{event.name}</h1>
        <h3 className="event-info__date">{event.when.date} kl {event.when.from} - {event.when.to}</h3>
      
        <p className="event__place">@ {event.where}</p>
        <div className="event-info__table">

        
        <h3 className="event__total-price">{totalPrice} sek</h3>
        <Button
        className="decrement-btn" 
        text="-"
        onClick={decrement} 
        />
        
        <span className="event__quantity">{isInCart ? isInCart.quantity : 0}</span>
        
        <Button
        className="increment-btn"
        text="+"
        onClick={increment}
        />            
        </div>
                
      </article> 
      <Button 
        className="add-cart"
        text="Lägg i varukorgen"
        onClick={() => addToCart(event)}
      />

    </section>

  
  );
}

export default EventsInfo;

{/* <section className="event-info">
<article className="event-info__box">
  <h1 className="event__title page__title page__title-big">{event.name}</h1>
  <h3 className="event-info__date">{event.when.date}</h3>
  <span className="event__start">{event.when.from} - {event.when.to}</span>
  <p className="event__place">@ {event.where}</p>
  <h3 className="event__total-price">{totalPrice} sek</h3>
  <Button
  className="decrement-btn" 
  text="-"
  onClick={ () => {decrement(); decrementQuantity(event)}} 
  />
  
  <span className="event__quantity">{isInCart ? isInCart.quantity : 0}</span>
  
  <Button
  className="increment-btn"
  text="+"
  onClick={ () => {increment(); addToCart(event)}}
  />            
  
          
</article> 
 <Button 
        className="add-cart"
        text="Lägg i varukorgen"
        onClick={() => addToCart(event)}
      />

</section> */}