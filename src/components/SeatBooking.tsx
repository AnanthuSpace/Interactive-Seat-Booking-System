import { useState, useCallback } from "react";
import { SeatGrid } from "./SeatGrid";
import { BookingSummary } from "./BookingSummary";
import { SeatType, SelectedSeat } from "../interfaces/types";
import { toast } from "sonner";

const generateSeats = (): SeatType[] => {
  const rows = ["A", "B", "C", "D", "E", "F"];
  const seatsPerRow = 10;
  return rows.flatMap((row, rowIndex) =>
    Array.from({ length: seatsPerRow }, (_, i) => ({
      id: `${row}${i + 1}`,
      row,
      number: i + 1,
      price: rowIndex < 2 ? 100 : rowIndex < 4 ? 150 : 200,
      tier: rowIndex < 2 ? "Silver" : rowIndex < 4 ? "Gold" : "Platinum",
    }))
  );
};

export default function SeatBookingSystem() {
  const [seats, setSeats] = useState<SelectedSeat[]>(
    generateSeats().map((seat) => ({ ...seat, selected: false }))
  );
  const [error, setError] = useState<string | null>(null);

  const toggleSeat = useCallback((seatId: string) => {
    setSeats((prevSeats) => {
      const updatedSeats = prevSeats.map((seat) =>
        seat.id === seatId ? { ...seat, selected: !seat.selected } : seat
      );
      const selectedSeatsCount = updatedSeats.filter(
        (seat) => seat.selected
      ).length;

      if (selectedSeatsCount > 8) {
        // setError("You can only select up to 8 seats");
        toast.error("You can only select up to 8 seats")
        return prevSeats;
      }

      setError(null);
      return updatedSeats;
    });
  }, []);

  const selectedSeats = seats.filter((seat) => seat.selected);
  const totalCost = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      toast.warning("Please select at least one seat");
      return;
    }
    toast.success(`Booking confirmed! Total cost: ₹${totalCost}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Seat Booking System
      </h1>
      <SeatGrid seats={seats} onSeatClick={toggleSeat} />
      
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <BookingSummary
        selectedSeats={selectedSeats}
        totalCost={totalCost}
        onBooking={handleBooking}
      />
    </div>
  );
}
