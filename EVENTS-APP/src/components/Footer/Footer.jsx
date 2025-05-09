//import { Flex } from "@chakra-ui/react";
//import { DecorativeBox } from "compositions/lib/decorative-box";
import { VscChevronLeft } from "react-icons/vsc";
import { FaList } from "react-icons/fa";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import FooterItem from "./FooterItem";
import useTicketStore from "../../stores/counter";
import { FaCartShopping } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import GetTicket from "../GetTicket/GetTicket";

import './footer.css';

function Footer() {
    const resetTotalPrice = useTicketStore(state => state.resetTotalPrice);
    const navigate = useNavigate();
    const location = useLocation();

    

    const handleBackClick = () => {
      resetTotalPrice();

      if (window.history.length > 2) {
        navigate(-1);
      }else if (location.pathname === '/events') {
        navigate("/");
      }
    };

    const footerItem = [
        {
            name: "Back",
            action: handleBackClick,
            icon: <VscChevronLeft />,
        },
        {
            name: "Events",
            action: () => navigate("/events"),
            icon:<FaList />,
        },
        {
            name: "Order",
            action: () => navigate("/order"),
            icon: <FaCartShopping />,
        },
        {
            name: "Tickets",
            action: () => {
              GetTicket();
              navigate("/tickets")},
            icon: <BsTicketPerforatedFill />,
        },
    ];

  return (
  
  <nav className="footer">
     <ul className="footer__list">
      {footerItem.map((item, index) => {
        return <FooterItem key={index} footerItem={item} />;
      })}
    </ul>
  </nav>
  
    );
}
    
  
export default Footer;


