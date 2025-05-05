//import { useLocalStorage } from "../../stores/useLocalStorage";
import useTicketStore from "../../stores/counter";
//import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from 'react';
// import useLocalStorage from "../../stores/useLocalStorage";

function CartList() {
  const { order, ticket, decrement, increment, completeOrder } = useTicketStore();
  console.log("Order från store:", order);
  
    if (order || order.lengh === 0) {
      return <p>Din varukorg är tom!</p>;
    }

  return (
    <>
    ul
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
        onClick={decrement} 
        />
        
        <span className="event__quantity">{ticket}</span>
        
        <Button
        className="increment-btn"
        text="+"
        onClick={increment}
        /> 
        </div>           
        </div>
        
          
      </li>
    ))}
        
    </>
    
  );
}

export default CartList;

