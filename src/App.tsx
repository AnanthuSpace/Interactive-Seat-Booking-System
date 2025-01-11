import SeatBookingSystem from './components/SeatBooking'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
    <Toaster richColors  />
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Movie Theater Seat Booking</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <SeatBookingSystem />
      </main>
      <footer className="bg-gray-200 py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 Movie Theater Seat Booking. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App;