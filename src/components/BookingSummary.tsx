import React, { useState } from 'react';
import { SelectedSeat } from '../interfaces/types';
import Modal from './Modal';

interface BookingSummaryProps {
  selectedSeats: SelectedSeat[];
  totalCost: number;
  onBooking: () => void;
}

export const BookingSummary: React.FC<BookingSummaryProps> = ({ selectedSeats, totalCost, onBooking }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleBookingConfirm = () => {
    setIsModalOpen(false);
    onBooking(); 
  };

  return (
    <div className="mt-8 p-4 border rounded-md">
      <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
      {selectedSeats.length > 0 ? (
        <>
          <ul className="mb-4">
            {selectedSeats.map(seat => (
              <li key={seat.id} className="flex justify-between">
                <span>{seat.id} ({seat.tier})</span>
                <span>₹{seat.price}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-bold">
            <span>Total Cost:</span>
            <span>₹{totalCost}</span>
          </div>
          <button
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            Book Now
          </button>
        </>
      ) : (
        <p>No seats selected</p>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleBookingConfirm}
      />
    </div>
  );
};
