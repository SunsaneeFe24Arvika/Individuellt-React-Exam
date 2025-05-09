import './orderpage.css';
import Footer from '../../components/Footer/Footer';
import GetCart from '../../components/GetCart/GetCart';

function OrderPage() {
  return (
    <>
    <section className="order-page">
      <h1 className="page__title__standard order-page__title">Order</h1>
      <GetCart />
    </section>
    
    <Footer />
    </>
    
  );
}

export default OrderPage;