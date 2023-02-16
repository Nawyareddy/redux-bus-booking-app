import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookingDetails } from "../actions/actions";

const BookingHistory = () => {
  const { bookingHistory } = useSelector((state) => state.bookingReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (bookingHistory) {
      dispatch(getBookingDetails());
    }
  }, []);

  return (
    <>
      <h1>Booking History</h1>
      {bookingHistory?.map((ticketInfo) => {
        return (
          <div className="card" style={{ width: "18rem" }} key={ticketInfo.id}>
            <div className="card-body">
              <img src={ticketInfo.imageUrl} alt="bus" width="200" />
              <h5 className="card-title seats">
                {ticketInfo.startPoint} - {ticketInfo.destination}
              </h5>
              <h6 className="card-subtitle mb-2">Name : {ticketInfo.name}</h6>
              <p className="card-text">Tickets Booked : {ticketInfo.tickets}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default BookingHistory;
