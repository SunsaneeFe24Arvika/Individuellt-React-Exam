
import CartList from '../../components/CartList/CartList'
import Footer from '../../components/Footer/Footer';

function OrderPage() {
  return (
    <>
    <section className="order-Page">
      <h1 className="page__title">Order</h1>
      <CartList />
    </section>
    
    <Footer />
    </>
    
  );
}

export default OrderPage;