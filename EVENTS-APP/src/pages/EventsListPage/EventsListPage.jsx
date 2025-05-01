import './eventslistpage.css';
import SearchForm from '../../components/Search/Search';
import EventList from '../../components/EventsList/EventList';


function EventsListPage() {
  
  return (
    <section className="eventslist-page">
      <h1 className="page__title">Events</h1>
      <SearchForm />
      <EventList />

            
    </section>
    
  );
}

export default EventsListPage;