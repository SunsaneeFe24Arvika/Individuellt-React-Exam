import { create } from "zustand";

const useTicketStore = create((set) => ({
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
}));

export default useTicketStore;