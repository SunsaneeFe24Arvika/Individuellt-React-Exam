import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTicketStore = create(persist(
    (set) => ({
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
}),
{
    name: "ticket-store",
    partialize: (state) => ({ ticket: state.ticket, price: state.price, totalPrice: state.totalPrice}),
}
)
);

export default useTicketStore;