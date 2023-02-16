import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingHistory from "./components/BookingHistory";
import Buses from "./components/Buses";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/service-provider/:service"
              element={<Buses />}
            ></Route>
            <Route path="/bookings" element={<BookingHistory />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
