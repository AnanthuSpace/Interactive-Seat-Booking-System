export interface SeatType {
    id: string;
    row: string;
    number: number;
    price: number;
    tier: 'Silver' | 'Gold' | 'Platinum';
}

export interface SelectedSeat extends SeatType {
    selected: boolean;
}

export interface ModalProp {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}


export interface BookingSummaryProps {
    selectedSeats: SelectedSeat[];
    totalCost: number;
    onBooking: () => void;
}