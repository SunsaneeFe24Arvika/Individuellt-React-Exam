import { create } from "zustand";
import { persist } from "zustand/middleware";

// // //=== Kod för att skappa localStorage med persist zustand
const useTicketStore = create(persist(
    (set) => ({
        order : [],
        ticket : 0,
        price : 0,
        totalPrice : 0,
        orderHistory: [],
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
                    console.error("Antal biljetter är 0. Lägg till minst en biljett.");
                    return state; 
                }        
                
                const existingItem = state.order.find((orderItem) => orderItem.id === event.id);
                if (existingItem) {
                    
                    const updatedOrder = state.order.map((orderItem) =>
                        orderItem.id === event.id
                            ? { ...orderItem, ticket: orderItem.ticket + state.ticket } 
                            : orderItem
                    );
                    console.log("Uppdaterad order: ", updatedOrder);
                    return { order: updatedOrder };
                }        
                
                const newOrder = [...state.order, { ...event, ticket: state.ticket }]; 
                console.log("Ny order:", newOrder);
        
                
                return { order: newOrder, ticket: 0, totalPrice: 0 };
            });
        },
            
        removeFromCart: (id) => {
            set((state) => ({
                cart: state.cart.filter((item) => item.id !== id),
            }));
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
                            orderHistory: state.orderHistory
                            }),
},

));

export default useTicketStore;

