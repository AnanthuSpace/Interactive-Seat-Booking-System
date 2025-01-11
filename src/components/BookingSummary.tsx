import React, { useState } from "react";
import { BookingSummaryProps } from "../interfaces/types";
import Modal from "./Modal";

export const BookingSummary: React.FC<BookingSummaryProps> = ({
  selectedSeats,
  totalCost,
  onBooking,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage whether the modal is visible.

  // Function to handle modal closure
  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal by updating the state.
  };

  // Function to confirm the booking
  const handleBookingConfirm = () => {
    setIsModalOpen(false); // Close the modal.
    onBooking(); // Execute the callback for the booking action.
  };

  return (
    <div className="mt-8 p-4 border rounded-md">
      <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
      {selectedSeats.length > 0 ? ( // Only render the summary if seats are selected.
        <>
          <ul className="mb-4">
            {selectedSeats.map((seat) => (
              <li key={seat.id} className="flex justify-between">
                <span>
                  {seat.id} ({seat.tier})
                </span>{" "}
                {/* Display seat ID and tier */}
                <span>₹{seat.price}</span> {/* Display the price of the seat */}
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-bold">
            <span>Total Cost:</span>
            <span>₹{totalCost}</span> {/* Show the calculated total cost */}
          </div>
          <button
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => setIsModalOpen(true)} // Open the modal on button click.
          >
            Book Now
          </button>
        </>
      ) : (
        <p>No seats selected</p> // Show a fallback message if no seats are selected.
      )}

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen} // Pass the modal's current state.
        onClose={handleModalClose} // Function to handle modal closure.
        onConfirm={handleBookingConfirm} // Function to handle booking confirmation.
      />
    </div>
  );
};
