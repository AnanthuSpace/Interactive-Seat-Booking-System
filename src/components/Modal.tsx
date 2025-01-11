import { ModalProp } from '../interfaces/types';
import React from 'react';

const Modal: React.FC<ModalProp> = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-6 rounded-md w-96">
          <h2 className="text-xl font-semibold mb-4">Confirm Booking</h2>
          <p className="mb-4">Are you sure you want to confirm the booking?</p>
          <div className="flex justify-end space-x-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={onConfirm}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;