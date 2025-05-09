import React from 'react'
import { useState, useEffect} from 'react';

function FindSeat() {
    const orderHistory = () => {
        const order = localStorage.getItem('ticket-store');
        return order ? JSON.parse(order) : [];
    }

    const section = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    const randomSeats = (ticket) => {
        const section = section[Math.floor(Math.random() * section.length)]; //Slumpa section
        const maxStart = 500 - ticket + 1;
        const startSeat = Math.floor(Math.random() * maxStart) + 1;

        const seats = Array.from({ length: ticket }, (_, i) => startSeat + i);
        return {
            section, seats,
        };
    };

    const Resultat = randomSeats(3);
    console.log(Resultat);
    

        const findSeats = (ticket) => {
        for (let section of section) {            
                const emptyIndexes = section.seats.map((seat, index) =>
                     (seat === null ? index : null)).filter(index => index !== null);

                if (emptyIndexes.length > ticket) {
                    return {
                        section: section.name,
                        seats: emptyIndexes.slice(0, ticket)
                    };
                }            
        }
        return null; // om inga platser hittas
    };

  return (
    <div>FindSeat</div>
  );
}

export default FindSeat;