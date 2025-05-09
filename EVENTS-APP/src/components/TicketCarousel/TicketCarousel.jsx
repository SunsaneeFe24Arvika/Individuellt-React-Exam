//import { useState, useEffect } from "react";
// import { Swiper, SwiperSlide} from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "../../index.css";
// import { Pagination, Navigation } from "swiper/modules";
// import useTicketStore from "../../stores/useTicketStore";
// import GetTicket from "../GetTicket/GetTicket";

// function TicketsCarousel() {
//   const { ticket } = useTicketStore();

//   return (
//     <div className="tickets-carousel">
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={20}
//         loop={true}
//         navigation={true}
//         modules={[Navigation, Pagination]}
//         className="tickets-list"
//       >
//         {Array.isArray(tickets) && tickets.length > 0 ? (
//           tickets.map((event) =>
//             Array.from({ length: event.quantity }, (_, i) => (
//               <SwiperSlide key={`${event.id}-${i}`}>
//                 <Ticket event={event} seatNumber={i + 1} />
//               </SwiperSlide>
//             ))
//           )
//         ) : (
//           <p>Inga biljetter ännu.</p>
//         )}
//       </Swiper>
//     </div>
//   );
// }


// export default TicketsCarousel;