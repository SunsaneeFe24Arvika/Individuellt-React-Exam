import Logo from '../../components/Logo/Logo';
import './startpage.css';
//import SwipeHandler from '../../components/NavBar/SwipeHandler';
import Header from '../../components/Header/Header';

function StartPage() {
    
  return (

    <section className="start-page">
    <h1 className="page__title">Start Page</h1>
    <Logo />
    <Header />
    </section>
    
  );
}

export default StartPage;

//<SwipeHandler />