import useTicketStore from '../../stores/counter';
import { useEffect, useState } from "react";
import Button from '../Buttons/Button';
import { useNavigate } from 'react-router-dom';



function GetCart() {
    const order = useTicketStore((state) => state.order) || [];
    const setOrder = useTicketStore((state) => state.setOrder);
    const [totalPrice, setTotalPrice] = useState(0);
    const { increment, decrement, completeOrder, addToCart} = useTicketStore();

    const navigate = useNavigate();

    //Hämta data från localStorage vid sidladdning
    useEffect(() => {
        const savedOrder = localStorage.getItem("ticket-store");
        if (savedOrder) {
            const parsedOrder = JSON.parse(savedOrder).state.order || [];
            setOrder(parsedOrder);
                    
        }
    }, [setOrder]);

    
    useEffect(() => {
        const calculatedTotalPrice = order.reduce((total, item) => {
            return total + item.price * item.ticket;
        }, 0);
        setTotalPrice(calculatedTotalPrice);
        
    }, [order]);
   

    return (
        <>
           {(order?.length || 0) === 0 && <p className='order-text'>Din korg är tom!</p>}
            <ul className='order-list'>
                {(order || []).map((item, index) => (
                    <li className='order-item' key={item.id || `order-item-${index}`}>
                        <div className='order__article'>
                        <article className='event-list__info'>
                            <h3 className="event__title">
                                {item.name}
                            </h3>
                            <p className="event-text">
                                {item.when?.date} - {item.when?.from}
                            </p>
                        </article>                                                   
                        </div>
                        <div className='order-qty'>
                        <Button
                        className="decrement-btn" 
                        text="-"
                        onClick={() => decrement(item.id)} 
                        />

                        <p>{item.ticket}</p>

                        <Button
                        className="increment-btn"
                        text="+"
                        onClick={() => increment(item.id)}
                        /> 
                        </div>
                    </li>
                ))}
            </ul>
            <h3 className='order-text'>Totalt värde på order </h3> 
            <h2 className='order-price__sum'>{totalPrice} SEK</h2>
            <Button 
                className="send-order__btn"
                text="Skicka order"    
                onClick={() => {
                    if (order.length > 0) {
                        console.log("Event som skickas till order historik:", order );
                        addToCart(order);
                        navigate("/tickets") 
                    } else {
                        alert('Din korg är tom!');
                    }                                       
                  }}
            />
        </>
    );
}

export default GetCart;