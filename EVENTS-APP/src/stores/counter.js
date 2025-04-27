import { create } from "zustand";

const useTicketStore = create ((set) => ({
    ticket : 0,
    increment : () => {
        set((state) => ({ticket : state.ticket + 1}));
    },
    decrement : () => {
        set((state) => (state.ticket > 0 ? {ticket: state.ticket - 1} : {ticket: 0}));
    }
}));

export default useTicketStore;