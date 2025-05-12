import { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import useTicketStore from '../../stores/counter';
import { v4 as uuidv4 } from 'uuid';
import JsBarcode from 'jsbarcode';


Swiper.use([Navigation, EffectCoverflow]);

function GetTicket() {
  const order = useTicketStore((state) => state.order) || [];
  const swiperContainerRef = useRef(null);
  
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (order.length > 0 && !swiperInstance) {
      const swiper = new Swiper(swiperContainerRef.current, {
      effect: 'coverflow',
      grabCursor: true,
      slidesPerView: 'auto',
      initialSlide: Math.floor(order.length / 2),
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    setSwiperInstance(swiper);
  }
       
  }, [order, swiperInstance]);

  // Generera streckkoder när komponenten renderas
  useEffect(() => {
    order.forEach((event) => {
      Array.from({ length: event.ticket || 0 }).forEach((_, ticketIndex) => {
        const barcodeId = `${event.id}-${ticketIndex}`;
        const barcodeElement = document.getElementById(`barcode-${barcodeId}`);
        const barcodeValue = `${event.id}-${ticketIndex}`; 
        if (barcodeElement) {
          JsBarcode(barcodeElement, barcodeValue, {
            format: 'CODE128',
            lineColor: '#000',
            background: '#fff',
            width: 2,
            height: 200,
            displayValue: false,
            
           });
        }
      });
    });
  }, [order]);

  return (
    <>
      {order.length === 0 ? (
        <p className="ticket-text">Du har inte köpt några biljetter ännu.</p>
      ) : (
        <article className="swiper-container ticket-card__list" ref={swiperContainerRef}>
          <div className="swiper-wrapper">
            {order.map((event) =>
              Array.from({ length: event.ticket || 0 }).map((_, ticketIndex) => {
                const barcodeId = `${event.id}-${ticketIndex}`;
                const barcodeValue = `${event.id}-${ticketIndex}`;
                return (
                  <li key={barcodeId} className="ticket-card swiper-slide">
                    <aside className="ticket-info__box">
                      <p className="ticket-text">WHAT</p>
                      <h1 className="ticket__name">{event.name}</h1>

                      <p className="ticket-text">WHERE</p>
                      <h2 className="ticket__place">{event.where}</h2>
                      <div className="ticket-details">
                        <div className="ticket__time">WHEN
                          <p className="ticket__date">
                          {event.when.date}  
                        </p>
                        </div>
                        
                        <div className="ticket__start"> FROM
                          <p className="ticket__from">{event.when.from}</p>
                        </div>
                        <div className="ticket__end"> TO
                          <p className="ticket__to">
                            {event.when.to}
                          </p>
                        </div>
                      </div>

                      <p className="ticket-text">Section: {event.section || 'Ej tilldelad'} , Seat: {event.seats ? event.seats[ticketIndex] : 'Ej tilldelad'}</p>
                      <span className="ticket-text"> </span>

                      {/* Streckkod och kod på text */}
                      <svg id={`barcode-${barcodeId}`} className="barcode"></svg>
                      <p className="barcode-text">{barcodeValue}</p>
                    </aside>
                  </li>
                );
              })
            )}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </article>
      )}
    </>
  );
}

export default GetTicket;

