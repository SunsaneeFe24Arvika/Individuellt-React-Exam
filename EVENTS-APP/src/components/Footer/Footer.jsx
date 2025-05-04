//import { Flex } from "@chakra-ui/react";
//import { DecorativeBox } from "compositions/lib/decorative-box";
import { VscChevronLeft } from "react-icons/vsc";
import { FaList } from "react-icons/fa";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import FooterItem from "./FooterItem";

function Footer() {
    const navigate = useNavigate();
    const footerItem = [
        {
            name: "Back",
            action: () => navigate(-1),
            icon: <VscChevronLeft />,
        },
        {
            name: "Events",
            action: () => navigate("/events"),
            icon:<FaList />,
        },
        {
            name: "Tickets",
            action: () => navigate("/tickets"),
            icon: <BsTicketPerforatedFill />,
        },
    ];

  return (
    <nav className="nav">
    <ul className="nav__list">
      {footerItem.map((item, index) => {
        return <FooterItem key={index} navItem={item} />;
      })}
    </ul>
  </nav>
    );
}
    
  
export default Footer;


//==== Kod med Chakra UI ===
// function NavBar() {
//     const navigate = useNavigate();
//     const navItem = [
//         {
//             name: "Back",
//             action: () => navigate(-1),
//             icon: <VscChevronLeft />,
//         },
//         {
//             name: "Events",
//             action: () => navigate("/events"),
//             icon:<FaList />,
//         },
//         {
//             name: "Tickets",
//             action: () => navigate("/tickets"),
//             icon: <BsTicketPerforatedFill />,
//         },
//     ];

//   return (
//     <Flex gap="4">
//         {navItem.map((item, index) => (
//             <Flex key={index} direction="row" align="center" onClick={item.action}>
//                 <DecorativeBox heighet="10" />
//                 {item.icon}

//             </Flex>
//         ))}
//     </Flex>
//     );
// }