import { useState, useEffect} from 'react';
import useTicketStore from '../../stores/counter';
//import Barcode from '../Barcode/Barcode';


function GetTicket() {
  //const orderHistory = useTicketStore((state) => state.orderHistory) || [];
  const { ticket } = useTicketStore();
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('ticket-store');
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        setOrderHistory(parsed);
      }else {
        setOrderHistory([]);
      }
    } catch (error) {
      console.log('Error parsing ticket-store data:', error);
      setOrderHistory([]);
    }
  }, []);  

  // const generateRandomBarcode = (length = 8) => {
  //     const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //     let result = "";
  //     for (let i = 0 ; i < length; i++) {
  //       const randomIndex = Math.floor(Math.random() * characters. length);
  //         result += characters[randomIndex];
  //     }
  //     return result;
  //   };

  //   const barcode = generateRandomBarcode();
   

  return (
    <>
    {orderHistory.length === 0 ? (
      <p>Du har inte köpt några biljetter ännu.</p>
    ) : (
      <article>
        {orderHistory.map((order, index) => (
          Array.from({length: order.ticket}).map((_, ticketIndex) => (
            <li key={`${order.id}- ${ticketIndex}`} className="ticket-cart">
            <p>WHAT</p>
            <h1>{order.name}</h1>
            <p>WHERE</p>
            <h2>{order.where}</h2>
            <p>WHEN</p>
            <h3>{order.when.date}</h3>
            <p>FROM</p>
            <h3>{order.when.from}</h3>
            <p>TO</p>
            <h3>{order.when.to}</h3>
            <p>INFO</p>

            <p>{order.section}</p> <span>{order.seats}</span>
            {/* <Barcode value={barcode} /> */}
          </li>
          ))          
        ))}        
      </article>
    )}
    </>
  );
}

export default GetTicket;