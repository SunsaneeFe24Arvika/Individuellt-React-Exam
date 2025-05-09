import { useState, useEffect} from 'react';
import useTicketStore from '../../stores/counter';
import JsBarcode from 'jsbarcode';


function GetTicket() {
  //const orderHistory = useTicketStore((state) => state.orderHistory) || [];
  const { ticket } = useTicketStore();
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('ticket-store')) || [];
    setOrderHistory(stored);
  }, []);
 
  
  const generateRandomBarCode = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0 ; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters. length);
        result += characters[randomIndex];
    }
    return result;
  }
  const showBarCode = generateRandomBarCode(8);

  const barCodeGenerator = () => {
    const [valute, setValue] = useState(generateRandomBarCode(8));

    const handleGenerateNewBarcode = () => {
      const newBarcode = generateRandomBarCode(8);
      setValue(newBarcode);
    };
  }

   
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
            <p>{generateRandomBarCode(8)}</p>



          </li>
          ))          
        ))}        
      </article>
    )}
    </>
  );
}

export default GetTicket;