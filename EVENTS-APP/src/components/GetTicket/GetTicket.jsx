import { useState, useEffect} from 'react';


function GetTicket() {
  const orderHistory = () => {
  const [order, setOrder] = useState([]);
  

    useEffect(() => {
      const stored = localStorage.getItem('ticket-store');
      const parsed = stored ? JSON.parse(stored) : [];
      setOrder(parsed);
    }, []);
  }
  console.log(orderHistory);
  
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
   
  return (
    <>
    {order.length === 0 ? (
      <p>Du har inte köpt några biljetter ännu.</p>
    ) : (
      <ul>
        {order.map((order, index) => (
          <li key={index}>
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

          </li>
        ))}        
      </ul>
    )}
    </>
  );
}

export default GetTicket;