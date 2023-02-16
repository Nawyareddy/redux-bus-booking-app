import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import swal from "sweetalert";
import { addTickets, getServicesByType } from "../actions/actions";

const Buses = () => {
  const { service } = useParams();
  let { serviceType } = useSelector((state) => state.bookingReducer);
  const [bookTickets, setBookTickets] = useState({});
  const dispatch = useDispatch();
  const tickets = useRef();
  const name = useRef();

  const [currentTab, setCurrentTab] = useState(
    "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
  );

  useEffect(() => {
    dispatch(getServicesByType(service));
    // return () => {
    //   console.log("clean up");
    //   dispatch(getAllServices());
    // };
  }, []);

  const handleTabClick = (event) => {
    setCurrentTab(event.target.id);
  };

  const handleSubmit = (event, tabContent) => {
    event.preventDefault();
    const ticketDetails = {
      name: name.current.value,
      tickets: tickets.current.value,
      totalPrice: tickets.current.value * tabContent.fare
    };

    if (tickets.current.value === "" || name.current.value === "") {
      swal("Please fill all the details", " ", "warning");
    } else if (tickets.current.value > tabContent.seatsAvailable) {
      swal(tabContent.seatsAvailable + " seats only available", " ", "warning");
    } else {
      setBookTickets(ticketDetails);
    }
  };

  const handleBookTickets = (tickets, tabContent) => {
    if (tickets.name === undefined || tickets.tickets === undefined) {
      swal("Please fill all the details", " ", "warning");
    } else {
      swal("Your tickets booked successfully", " ", "success");
      dispatch(addTickets({ ...tickets, ...tabContent }));
    }
  };

  return (
    <div className="row">
      <div className="col-md-5">
        {serviceType.map((bus) => {
          return (
            <div
              className="card bus-display"
              style={{ width: "18rem" }}
              key={bus.id}
            >
              <img src={bus.imageUrl} className="card-img-top" alt="apsrtc" />
              <div className="card-body">
                <h4 className="card-title">
                  {bus.startPoint} - {bus.destination}
                </h4>
                <p className="card-text">Type : {bus.type}</p>
                <p className="card-text">Fare : {bus.fare}</p>
                <p className="card-text">
                  Seats Available : {bus.seatsAvailable}
                </p>
                <button
                  className="booking-btn"
                  id={bus.id}
                  onClick={handleTabClick}
                >
                  Book
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="col-md-4">
        <img
          src={currentTab}
          alt="bus"
          id="defaultOpen"
          width="350"
          height="250"
        />
        {serviceType.map((tabContent) => (
          <div key={tabContent.id}>
            {currentTab === `${tabContent.id}` && (
              <div className="card booking-form">
                <h2 className="card-header">Booking</h2>
                <div className="card-body">
                  <h3 className="card-title">
                    {tabContent.startPoint} - {tabContent.destination}
                    <span className="seats">({tabContent.seatsAvailable})</span>
                  </h3>
                  <form
                    onSubmit={(e) => {
                      handleSubmit(e, tabContent);
                    }}
                  >
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        ref={name}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="tickets" className="form-label">
                        Tickets
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="tickets"
                        placeholder="Tickets"
                        ref={tickets}
                      />
                    </div>
                    <p className="card-text">Basic fare : {tabContent.fare}</p>
                    <button type="submit" className="btn btn-primary">
                      Calculate Total fare
                    </button>
                  </form>
                  <div>
                    <p>Name : {bookTickets.name}</p>
                    <p>No of tickets : {bookTickets.tickets}</p>
                    <p>Total Price :{bookTickets.totalPrice} </p>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={handleBookTickets.bind(
                      this,
                      bookTickets,
                      tabContent
                    )}
                  >
                    Book Tickets
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buses;
