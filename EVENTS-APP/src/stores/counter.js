import { create } from "zustand";
import { persist } from "zustand/middleware";


// // //=== Kod för att skappa localStorage med persist zustand
const useTicketStore = create(persist(
    (set) => ({
        order : [],
        ticket : 0,
        price : 0,
        totalPrice : 0,
        
        setOrder: (newOrder) => set({ order: newOrder }),
        setPrice : (newPrice) => {
            set((state) => ({
                price : newPrice,
                totalPrice : state.ticket * newPrice, //Återställ totalpris när priset uppdateras
            }));
        },
        increment: (id) =>
            set((state) => ({
              order: state.order.map((item) =>
                item.id === id ? { ...item, ticket: (item.ticket || 0) + 1 } : item
              ),
              ticket: state.ticket + 1, // Uppdatera ticket
            })),
            decrement: (id) =>
                set((state) => {
                    const updatedOrder = state.order
                        .map((item) =>
                            item.id === id
                                ? { ...item, ticket: item.ticket - 1 }
                                : item
                        )
                        .filter((item) => item.ticket > 0); // Ta bort event om ticket är 0
            
                    return {
                        order: updatedOrder,
                        ticket: state.ticket > 0 ? state.ticket - 1 : 0, // Uppdatera ticket
                    };
                }),  
                
        addToCart: (event) => {
    set((state) => {
        if (state.ticket === 0) {
            return state; 
        }

        const section = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

        // Funktion för att slumpa platser och sektion
        const randomSeats = (ticket) => {
            const sectionName = section[Math.floor(Math.random() * section.length)];
            const maxStart = 500 - ticket + 1;
            const startSeat = Math.floor(Math.random() * maxStart) + 1;

            const seats = Array.from({ length: ticket }, (_, i) => startSeat + i);
            return {
                section: sectionName,
                seats,
            };
        };

        // Kontrollera om eventet redan finns i order
        const existingItem = state.order.find((orderItem) => orderItem.id === event.id);
        if (existingItem) {
            const updatedOrder = state.order.map((orderItem) =>
                orderItem.id === event.id
                    ? {
                        ...orderItem,
                        ticket: orderItem.ticket + state.ticket,
                        ...randomSeats(state.ticket), // Uppdatera med nya platser och sektion
                    }
                    : orderItem
            );
            console.log("Uppdaterad order: ", updatedOrder);
            return { order: updatedOrder };
        }

        // Lägg till nytt event med slumpade platser och sektion
        const seatAssignment = randomSeats(state.ticket);
        const newOrder = [
            ...state.order,
            { ...event, ticket: state.ticket, ...seatAssignment },
        ];
        console.log("Ny order:", newOrder);

        return { order: newOrder, ticket: 0, totalPrice: 0 };
    });
},
        
    //Töm order och flytta den till historik, skicka order
    completeOrder: () => {
        set((state) => ({
            orderHistory: [...state.orderHistory, ...state.order],
            order: [],
        }));
    },

    resetTotalPrice: () => set({ totalPrice: 0, ticket: 0 }),
}),

{
    name: "ticket-store",
    partialize: (state) => ({ 
                            order: state.order,
                            
                            }),
},

));

export default useTicketStore;

// addToCart: (event) => {
//             set((state) => {
                
//                 if (state.ticket === 0) {
//                    return state; 
//                 }        
                
//                 const existingItem = state.order.find((orderItem) => orderItem.id === event.id);
//                 if (existingItem) {
                    
//                     const updatedOrder = state.order.map((orderItem) =>
//                         orderItem.id === event.id
//                             ? { ...orderItem, ticket: orderItem.ticket + state.ticket } 
//                             : orderItem
//                     );
//                     console.log("Uppdaterad order: ", updatedOrder);
//                     return { order: updatedOrder };
//                 }        
                
//                 const newOrder = [...state.order, { ...event, ticket: state.ticket }]; 
//                 console.log("Ny order:", newOrder);
        
                
//                 return { order: newOrder, ticket: 0, totalPrice: 0 };
//             });
//         },                  

