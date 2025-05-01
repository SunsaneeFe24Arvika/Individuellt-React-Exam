import useTicketStore from "../../stores/counter";
import Button from './Button';


function Buttons() {
    const { increment, decrement } = useTicketStore();
    
  return (
    <section className="amount-btn">
        <Button text="-" onClick={decrement} />
        <Button text="+" onClick={increment} />
    </section>
  );
}

export default Buttons;