import { useFetch } from "../../data/useFetch";
import { Link } from 'react-router-dom';

function EventList() {
   const url = "https://santosnr6.github.io/Data/events.json";
       const { data, isLoading, isError} = useFetch(url);
   
       const events = data?.events || [];
   
       console.log(events);         
   
       if (isLoading) return <p className="loading msg">Laddar...</p>;
       if (isError) return <p className="error msg">Ett fel inträffade!</p>
   
       
     return (
        <section className="events__list">
            <ul className="evens-info__list">
           {events.map((event) => (
               <li className="events-item">
                <Link>
                <h3 className="event__date">{event.when.date}</h3>
                <h2 className="event__artist">{event.name}</h2>
                <p className="event place">{event.where}</p>
                <p className="event__start">{event.when.from} - {event.when.to}</p>   
                </Link>
                <p className="event__price">{event.price} SEK</p>
               </li>
           ))}
            </ul>
        </section>       
     );
    }

export default EventList;


{/* <aside className="events__date">
            <article className="events__info">
                <h2 className="events__artist"></h2>
                <p className="events__place"></p>
                <p className="events__time"></p>
            </article>
            <p className="events__price"></p>
        </aside> */}