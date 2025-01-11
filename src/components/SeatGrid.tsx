import React from 'react';
import { Seat } from './Seat';
import { SelectedSeat } from '../interfaces/types';

interface SeatGridProps {
  seats: SelectedSeat[];  // Array of seats to be displayed
  onSeatClick: (seatId: string) => void;  // Callback function for seat click event
}

export const SeatGrid: React.FC<SeatGridProps> = ({ seats, onSeatClick }) => {
  return (
    <div className="grid grid-cols-10 gap-2 mb-8">
      {seats.map(seat => (
        <Seat key={seat.id} seat={seat} onClick={() => onSeatClick(seat.id)} />
      ))}
    </div>
  );
}
