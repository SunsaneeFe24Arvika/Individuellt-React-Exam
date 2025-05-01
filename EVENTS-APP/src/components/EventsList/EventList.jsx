import { useFetch } from "../../hooks/useFetch";
import { Link } from 'react-router-dom';
import './eventslist.css';

function EventList() {
   const url = "https://santosnr6.github.io/Data/events.json";
       const { data, isLoading, isError} = useFetch(url);
   
       const events = data?.events || [];
   
       console.log(events);         
   
       if (isLoading) return <p className="loading msg">Laddar...</p>;
       if (isError) return <p className="error msg">Ett fel inträffade!</p>
   
       
     return (
        <section className="events__list">
            <Link to="" className="events__link">
            <ul className="events-info__list">
           {events.map((event) => (                
               <li className="events-item" key={event.id}>                
                <h3 className="event__date">
                    {new Date(event.when.date).toLocaleDateString("en-GB",
                        {
                            day: "2-digit",
                            month: "short" // Resultat April = APR
                        }
                    ).toUpperCase()}</h3>
                <aside className="events-info__box">
                <h2 className="event__artist">{event.name}</h2>
                <p className="event place">{event.where}</p>
                <p className="event__start">{event.when.from} - {event.when.to}</p> 
                </aside>          
                
                <p className="event__price">{event.price} sek</p>
               </li>
           ))}
            </ul>
            </Link>
        </section>       
     );
    }

export default EventList;


