import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { getServices } from "../actions/actions";
const Home = () => {
  const { buses } = useSelector((state) => state.bookingReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, []);
  return (
    <>
      <div className="row">
        {buses.map((bus) => {
          return (
            <div className="col-md-4 mb-2" key={bus.id}>
              <div className="card" style={{ width: "18rem" }}>
                <Link to={`/service-provider/${bus.service}`}>
                  <img src={bus.imageUrl} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                  <h3 className="card-title">{bus.service}</h3>
                  <p className="card-text bus-ratings">Rating :{bus.rating}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Outlet />
    </>
  );
};

export default Home;
