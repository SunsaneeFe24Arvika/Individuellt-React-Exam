import useTicketStore from '../../stores/counter';


// function GetCart() {
//     const order = useTicketStore((state) => state.order);
//     const completeOrder = useTicketStore((state) => state.completeOrder);
//     const increment = useTicketStore((state) => state.increment);
//     const decrement = useTicketStore((state) => state.decrement);

//     const totalPrice = order.reduce((total, item) => {
//         return total + item.price * item.ticket
//     }, 0)

//     return (
//         <div>
//             <h1>Din varukorg</h1>
//             {order.lenght=== 0 && <p>Din korg är tom!</p>}
//             <ul>
//                 {order.map((item) => (
//                     <li key={item.id}>
//                         {item.name} - {item.when.date} - {item.when.from}
//                         <button onClick={() => decrement(item.id)}>Ta bort</button>
//                         <p>{totalPrice}</p>
//                         <button onClick={() => increment(item.id)}>Ta bort</button>

//                     </li>
//                 ))}
//             </ul>
//             <button onClick={() => completeOrder(item.id)}>Skicka order</button>
//         </div>
//     );
// }

// export default GetCart;
  

import React, { useEffect, useState } from "react";
import Button from '../Buttons/Button';


function GetCart() {
    const order = useTicketStore((state) => state.order) || [];
    const setOrder = useTicketStore((state) => state.setOrder);
    const [totalPrice, setTotalPrice] = useState(0);
    const { increment, decrement, ticket} = useTicketStore();

    // Hämta data från localStorage vid sidladdning
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
           {(order?.length || 0) === 0 && <p>Din korg är tom!</p>}
            <ul className='order-list'>
                {(order || []).map((item) => (
                    <li className='order-item' key={item.id}>
                        {item.name} - {item.when.date} - {item.when.from}
                        <div className='order-qty'>
                        <Button
                        className="decrement-btn" 
                        text="-"
                        onClick={decrement} 
                        />

                        <p>{item.ticket}</p>

                        <Button
                        className="increment-btn"
                        text="+"
                        onClick={increment}
                        /> 
                        </div>
                    </li>
                ))}
            </ul>
            <h3 className='order-text'>Totalt värde på order </h3> 
            <h2 className='order-price__sum'>{totalPrice} SEK</h2>
        </>
    );
}

export default GetCart;
