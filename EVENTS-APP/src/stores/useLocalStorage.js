// import { create } from "zustand";
// import { persist } from "zustand/middleware";


// // //=== Kod för att skappa localStorage med persist zustand
// const useLocalStorage = create(persist(
//     (set) => ({
//     order : [],
//     orderHistory : [],
//     selectedEvent : null,

//     setEventDetails: (event) => {
//         set({ selectedEvent: event })},
    
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

// export default useLocalStorage;