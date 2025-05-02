import Logo from '../../components/Logo/Logo';
import './startpage.css';
//import SwipeHandler from '../../components/NavBar/SwipeHandler';
import Header from '../../components/Header/Header';

function StartPage() {
    
  return (

    <section className="start-page">
    <Logo />
    <Header />
    </section>
    
  );
}

export default StartPage;

//<SwipeHandler />