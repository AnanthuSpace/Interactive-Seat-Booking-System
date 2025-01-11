# Interactive Seat Booking System  

The **Interactive Seat Booking System** is a dynamic and user-friendly web application designed for movie theaters or event venues. It enables users to select seats, view real-time pricing, and book tickets seamlessly with intuitive controls and a visually engaging interface.  

---

## Key Features  

1. **Seat Layout**  
   - Displays a 6x10 grid of seats with unique identifiers (e.g., "A1", "B5").  
   - Color-coded seat tiers:  
     - Silver: ₹100 (Front rows).  
     - Gold: ₹150 (Middle rows).  
     - Platinum: ₹200 (Back rows).  
   - Interactive seat selection and deselection.  

2. **Dynamic Pricing**  
   - Real-time price updates as seats are selected or deselected.  
   - Total cost is dynamically calculated and displayed.  

3. **Booking Summary**  
   - Displays the list of selected seats, their prices, and the total cost.  
   - Includes a "Book Now" button with a confirmation modal for finalizing the booking.  

4. **Selection Constraints**  
   - Users can select up to 8 seats.  
   - Error message shown if the limit is exceeded.  

5. **Responsive UI**  
   - Clean, modern design using Tailwind CSS.  
   - Optimized for both desktop and mobile devices.  

---

## How It Works  

1. View the seat layout and choose desired seats.  
2. Watch the total cost update dynamically as you select/deselect seats.  
3. Review selected seats and finalize booking via the summary section.  

---

## Demo  

[Live Demo](https://ananthuspace.github.io/Interactive-Seat-Booking-System)  

---

## Screenshots  

### Seat Layout  
![Seat Layout Screenshot](./public/image.png)  

---

## Getting Started  

### Prerequisites  
Ensure you have the following installed:  
- Node.js (>=16.0)  
- npm (>=7.0)  

### Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/AnanthuSpace/Interactive-Seat-Booking-System.git
   ```  

2. Navigate to the project folder:  
   ```bash
   cd Interactive-Seat-Booking-System
   ```  

3. Install dependencies:  
   ```bash
   npm install
   ```  

4. Start the development server:  
   ```bash
   npm run dev
   ```  

---

## Folder Structure  

### Frontend  
- **src/components:** Modular React components (e.g., `Seat`, `SeatGrid`, `BookingSummary`).  
- **src/interfaces:** TypeScript types and interfaces for reusable definitions.  
- **src/pages:** Main app logic and state management.  
- **src/styles:** Global and component-specific styles.  
- **App.tsx:** Entry point of the application.  

---

## Technologies Used  

### Frontend  
- Framework: React (with TypeScript)  
- Styling: Tailwind CSS  
- State Management: React Hooks (`useState`, `useEffect`)  
- Bundler: Vite  

---

## Future Enhancements  

- Integration with a backend for real-time seat availability and booking persistence.  
- Addition of user authentication and payment gateway.  
- Enhanced accessibility features.  

---

## Author  

- [Ananthu Mohan](https://github.com/AnanthuSpace)  

Feel free to contribute by submitting issues or pull requests!
