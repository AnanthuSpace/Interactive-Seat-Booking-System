import React from "react";
import { SelectedSeat } from "../interfaces/types";

interface SeatProps {
  seat: SelectedSeat;
  onClick: () => void;
}

export const Seat: React.FC<SeatProps> = ({ seat, onClick }) => {
  const tierColors = {
    Silver: "bg-gray-300", // Color for Silver tier seats
    Gold: "bg-yellow-300", // Color for Gold tier seats
    Platinum: "bg-purple-300", // Color for Platinum tier seats
  };

  return (
    <button
      className={`w-10 h-10 rounded-md flex items-center justify-center text-sm font-semibold transition-colors
        ${tierColors[seat.tier]}
        ${seat.selected ? "ring-2 ring-blue-500" : "hover:opacity-75"}
      `} // Highlights selected seats with a ring
      onClick={onClick} // Handles seat selection when clicked
    >
      {seat.id}
    </button>
  );
};
