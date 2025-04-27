import './eventslistpage.css';
import SearchForm from '../../components/Search/Search';
function EventsListPage() {
  return (
    <section className="eventslist-page">
      <h1>Events</h1>
      <SearchForm />
    </section>
    
  );
}

export default EventsListPage;