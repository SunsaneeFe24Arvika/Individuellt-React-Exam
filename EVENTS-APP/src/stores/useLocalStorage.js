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
       const existing = prev.find((b) => b.id === event.id);
       if (existing) {
        return prev.map((b) => b.id === event.id
        ? {...b, quantity: b.quantity + quantity}
        : b 
    );
       }
            return [...prev, {...event, quantity}];
    };
    
    const removeFromCart = (id, quantity = 1) => {
        setEventList((prev) =>  {
            const existing = prev.find((b) => b.id === id);
            if (existing && existing.quantity > quantity) {
                return prev.map((b) => b.id === id
                ? {...b, quantity: b.quantity - quantity}
                : b);
            }
            return prev.filter((b) => b.id !== id);
        });
                
    };

    return { eventList, addToCart, removeFromCart };
};


