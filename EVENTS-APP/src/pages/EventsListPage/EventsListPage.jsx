
import SearchForm from '../../components/Search/Search';
import EventList from '../../components/EventsList/EventList';
import Footer from '../../components/Footer/Footer';
import './eventlistpage.css';

function EventsListPage() {
  
  return (
    <>
    <section className="eventslist-page">
      <h1 className="page__title__standard">Events</h1>
      <SearchForm />
      <EventList />
      
    </section>

    <Footer />
    </>
    
    
  );
}

export default EventsListPage;