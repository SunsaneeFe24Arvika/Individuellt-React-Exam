//import { useLocalStorage } from "../../stores/useLocalStorage";
//import useTicketStore from "../../stores/counter";
//import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function CartList() {
  const [ cartList, SetCartList] = useState([]);
  const [ totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('eventList')) || [];
    console.log(stored);
    SetCartList(stored);
  }, []);
   
  

  return (
    <>
    ul
    {cartList.map((event) => (
      <li key={event.id}>
        <h1 className="event__title page__title page__title-big">{event.name}</h1>
        <h3 className="event-info__date">{event.when.date}</h3>
        <span className="event__start">{event.when.from} - {event.when.to}</span>
        <p className="event__place">@ {event.where}</p>
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
      </li>
    ))}
        
    </>
    
  );
}

export default CartList;

{/* <Button 
        className="add-cart"
        text="Lägg i varukorgen"
        onClick={handleToOrder}
      /> */}