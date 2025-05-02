import useTicketStore from "../../stores/counter";
// import { useFetch } from "../../hooks/useFetch";
// import { useParams } from "react-router-dom";


function Counter() {
    // const { price } = useParams();
    // console.log("Pris för evenemang är:", price);
    
    // const url = "https://santosnr6.github.io/Data/events.json";
    // const { data, isLoading, isError } = useFetch(url);

    // if (isLoading) return <p className="loading msg">Laddar...</p>;
    // if (isError) return <p className="error msg">Ett fel inträffade!</p>
    // const event = data?.events?.find((event) => event.price.toString() === price);
    // console.log("Found event:", event);
  
    // if (!event) return <p>Priset hittades inte!</p>

    const ticket = useTicketStore(state => state.ticket);
    
  return (
    <p>{ticket}</p>
  );
}

export default Counter;