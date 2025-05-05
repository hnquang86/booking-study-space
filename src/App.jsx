import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import CalendarPage from "./pages/CalendarPage";

function App() {
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/calendar" element={<CalendarPage />} />


      </Routes>
    </Router>
  );
}

export default App;
