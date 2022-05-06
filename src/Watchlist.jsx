import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Watchlater } from "./Context";
import "./Watchlist.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Watchlist = () => {
  const { watch, setWatch } = useContext(Watchlater);
  const navigate = useNavigate();
  const removewatch = (movie) => {
    const removeddata = watch.filter((e) => e.id != movie.id);
    setWatch(removeddata);
    toast("Successfully Removed");
  };

  const removeAllHandler = () => {
    if (watch.length < 1) {
      toast.warn("Watchlist is already empty");
    } else {
      setWatch([]);
      toast("All Items removed");
    }
  };

  return (
    <>
      <h1 className="watchlisthead">Watchlist</h1>
      <div className="wat">
        {watch.length === 0 ? (
          <div className="emptywishlist">
            <div>
              <h1>Your Watchlist is currently empty</h1>
              <p>
                Please go back to homepage and add your favourite movies and
                webseries to your watchlist
              </p>
            </div>
            <img src="http://surl.li/btiuu" alt="" />
          </div>
        ) : (
          watch.map((movie) => (
            <div className="mov" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                className="poster"
              />
              <p className="movtitle">{movie.name || movie.title}</p>
              <button
                className="rem"
                onClick={() => {
                  removewatch(movie);
                }}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <div className="finalbuttons">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Homepage
        </button>
        <button onClick={removeAllHandler}>Remove All</button>
      </div>
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </>
  );
};

export default Watchlist;
