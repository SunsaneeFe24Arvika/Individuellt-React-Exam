import { create } from "zustand";
//import { persist } from "zustand/middleware";



const useTicketStore = create(
    (set) => ({
    order : [],
    ticket : 0,
    price : 0,
    totalPrice : 0,
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
    addToCart: (event) => {
        set((state) => {
            const existingItem = state.order.find((orderItem) => orderItem.id === event.id);
            if (existingItem) {
                const updatedOrder = state.order.map((orderItem) =>
                orderItem.id === event.id
                ? {...orderItem, ticket: orderItem.ticket + event.ticket}
                    : orderItem
                );
                
                console.log("Uppdterad order: ", updatedOrder);
                return { order: updatedOrder };
             }
             const newOrder = [...state.order, { ...event, ticket: state.ticket }];
             console.log("Ny order:", newOrder);
             
            return { order: newOrder };
        });
    },

})
)







// // //=== Kod för att skappa localStorage med persist zustand
// const useTicketStore = create(persist(
//     (set) => ({
//     ticket : 0,
//     price : 0,
//     totalPrice : 0,
//     order : [],
//     orderHistory : [],
//     selectedEvent : null,

//     setEventDetails: (event) => {
//         set({ selectedEvent: event })},
//     setPrice : (newPrice) => {
//         set((state) => ({
//             price : newPrice,
//             totalPrice : state.ticket * newPrice, //Återställ totalpris när priset uppdateras
//         }));
//     },
//     //Counter funktioner:
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
//     // Order hanteringar:
//     // Lägga till event i varukogren
//     addToCart: (event) => {
//         set((state) => {
//             const existingItem = state.order.find((orderItem) => orderItem.id === event.id);
//             if (existingItem) {
//                 return {
//                     order: state.order.map((orderItem) => orderItem.id === event.id
//                     ? {...orderItem, ticket: orderItem.ticket + event.ticket}
//                     : orderItem),
//                 };
//             }
//             return {
//                 order: [ ...state.order, { ...event, ticket: state.ticket }],
//             };
//         });
//     },

//     // Ta bort event från varukogren
//     RemoveFromCart: (id) => {
//         set((state) => ({
//             order: state.order.filter((orderItem) => orderItem.id !== id),
//         }));
//     },

//     //Töm order och flytta den till historik, skicka order
//     completeOrder: () => {
//         set((state) => ({
//             orderHistory: [...state.orderHistory, ...state.order],
//             order: [],
//         }));
//     },
//     resetTotalPrice: () => set({ totalPrice: 0, ticket: 0}),
    
// }),
// {
//     name: "ticket-store",
//     partialize: (state) => ({ ticket: state.ticket, 
//                             price: state.price, 
//                             totalPrice: state.totalPrice,
//                             }),
// },
// {
//     name: "order-storage",
//     partialize: (state) => ({orderHistory: state.orderHistory,
//                             order: state.order,
//                             selectedEvent: state.selectedEvent,
//                             orderHistory: state.orderHistory
//     })
// }
    


// ));

export default useTicketStore;