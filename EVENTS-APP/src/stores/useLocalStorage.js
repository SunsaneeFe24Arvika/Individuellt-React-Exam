import { useState, useEffect } from "react";

export const useLocalStorage = () => {
    const [eventList, setEventList] = useState(() => {
        try {
            const stored = localStorage.getItem("eventList");
            return JSON.parse(stored) || [];
        } catch (error) {
            console.log("Något gick fel!");
            return [];            
        }        
    });

    useEffect(() => {
        localStorage.setItem("eventList", JSON.stringify(eventList));
    }, [eventList]);

    const addToCart = (event) => {
        setEventList((prev) => {
            const existing = prev.find((b) => b.id === event.id);
            if (existing) {
                return prev.map((b) => 
                b.id === event.id ? {...b, quantity: b.quantity + 1} : b);
            }            
            return [...prev, {...event, quantity: 1}];
        });            
    };

    const removeFromCart = (id) => {
        setEventList((prev) => {
            const updatedList = prev.filter((b) => b.id !== id)
            console.log("Events som blev bortagen: ", id);
            return updatedList;
        });
    };

    return { eventList, addToCart, removeFromCart};
};