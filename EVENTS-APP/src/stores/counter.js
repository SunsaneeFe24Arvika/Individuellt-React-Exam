import { create } from "zustand";
import { persist } from "zustand/middleware";



// const useTicketStore = create(
//     (set) => ({
//     ticket : 0,
//     price : 0,
//     totalPrice : 0,
//     setPrice : (newPrice) => {
//         set((state) => ({
//             price : newPrice,
//             totalPrice : state.ticket * newPrice, //Återställ totalpris när priset uppdateras
//         }));
//     },
//     increment : () => {
//         set((state) => ({
//             ticket : state.ticket + 1,
//             totalPrice : (state.ticket + 1) * state.price,
//         }));
        
//     },
//     decrement : () => {
//         set((state) => ({
//             ticket : state.ticket > 0 ? state.ticket - 1 : 0,
//             totalPrice : state.ticket > 0 ? (state.ticket -1) * state.price : 0,
//          }));       
//     },
//     addToCart: () => {
//         set((state) => {
//             localStorage.setItem('ticketData', JSON.stringify(state));
//             return state;
//         });
//     },
    
//     loadFromCart: () => {
//         const eventData = localStorage.getItem('ticketData');
//         if (eventData) {
//             const parsedData = JSON.parse(eventData);
//             set(() => ({
//                 ticket: parsedData.ticket,
//                 price: parsedData.price,
//                 totalPrice: parsedData.totalPrice,
//             }));
//         }
//     },
// }),

// );


// //=== Kod för att skappa localStorage med persist zustand
const useTicketStore = create(persist(
    (set) => ({
    ticket : 0,
    price : 0,
    totalPrice : 0,
    resetTotalPrice : () => set({ totalPrice: 0, ticket: 0}),
    setPrice : (newPrice) => {
        set((state) => ({
            price : newPrice,
            totalPrice : state.ticket * newPrice, //Återställ totalpris när priset uppdateras
        }));
    },
    increment : () => {
        set((state) => ({
            ticket : state.ticket + 1,
            totalPrice : (state.ticket + 1) * state.price,
        }));
        
    },
    decrement : () => {
        set((state) => ({
            ticket : state.ticket > 0 ? state.ticket - 1 : 0,
            totalPrice : state.ticket > 0 ? (state.ticket -1) * state.price : 0,
         }));       
    },
}),
{
    name: "ticket-store",
    partialize: (state) => ({ ticket: state.ticket, price: state.price, totalPrice: state.totalPrice}),
}
)
);

export default useTicketStore;