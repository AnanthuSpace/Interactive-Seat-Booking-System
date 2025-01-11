import { useState, useCallback } from "react";
import { SeatGrid } from "./SeatGrid";
import { BookingSummary } from "./BookingSummary";
import { SeatType, SelectedSeat } from "../interfaces/types";
import { toast } from "sonner";

// Generates an array of seat objects
const generateSeats = (): SeatType[] => {
  const rows = ["A", "B", "C", "D", "E", "F"];  // Row labels
  const seatsPerRow = 10;  // Number of seats per row
  return rows.flatMap((row, rowIndex) =>
    Array.from({ length: seatsPerRow }, (_, i) => ({
      id: `${row}${i + 1}`,  // Seat ID (e.g., A1, B5)
      row,
      number: i + 1,  // Seat number (e.g., 1, 2, 3)
      price: rowIndex < 2 ? 100 : rowIndex < 4 ? 150 : 200,  // Dynamic pricing based on row position
      tier: rowIndex < 2 ? "Silver" : rowIndex < 4 ? "Gold" : "Platinum",  // Tier based on row position
    }))
  );
};

// Main SeatBookingSystem component
export default function SeatBookingSystem() {
  const [seats, setSeats] = useState<SelectedSeat[]>(  // State to hold the seats with their selected status
    generateSeats().map((seat) => ({ ...seat, selected: false }))  // Initialize seats with 'selected' as false
  );
  const [error, setError] = useState<string | null>(null);  // State to manage any error messages

  // Function to handle seat toggling (selection and deselection)
  const toggleSeat = useCallback((seatId: string) => {
    setSeats((prevSeats) => {
      const updatedSeats = prevSeats.map((seat) =>
        seat.id === seatId ? { ...seat, selected: !seat.selected } : seat  // Toggle the selected state
      );

      const selectedSeatsCount = updatedSeats.filter(
        (seat) => seat.selected  // Count the number of selected seats
      ).length;

      if (selectedSeatsCount > 8) {
        toast.error("You can only select up to 8 seats");  // Display error if more than 8 seats are selected
        return prevSeats;  // Return previous state to prevent exceeding the seat limit
      }

      setError(null);  // Reset error if selection is valid
      return updatedSeats;
    });
  }, []);

  // Filter selected seats and calculate the total cost
  const selectedSeats = seats.filter((seat) => seat.selected);
  const totalCost = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  // Function to handle booking confirmation
  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      toast.warning("Please select at least one seat");  // Display warning if no seats are selected
      return;
    }
    toast.success(`Booking confirmed! Total cost: ₹${totalCost}`);  // Display success message after booking
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Seat Booking System
      </h1>
      <SeatGrid seats={seats} onSeatClick={toggleSeat} />  // Pass seats and the toggle function to the SeatGrid component

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}  // Display error message if any
      <BookingSummary
        selectedSeats={selectedSeats}  // Pass selected seats and total cost to the BookingSummary component
        totalCost={totalCost}
        onBooking={handleBooking}  // Handle booking confirmation
      />
    </div>
  );
}
