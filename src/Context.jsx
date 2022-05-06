import React, { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Watchlater = createContext();

const watchdata = JSON.parse(localStorage.getItem("watchlistdata") || "[]");

const Context = ({ children }) => {
  const [watch, setWatch] = useState(watchdata);
  const [searched, setSearched] = useState(false);
  const [searchedData, setSearchedData] = useState("");
  const [finalSearchData, setFinalSearchData] = useState([]);
  const [movie, setMovie] = useState([]);

  const Addtowatchlist = (e) => {
    let check = watch.find((c) => c.id === e.id);

    if (check === undefined) {
      setWatch([...watch, e]);
      toast("Added to watchlist");
    } else {
      toast.warn("Already added to watchlist");
    }
  };

  useEffect(() => {
    localStorage.setItem("watchlistdata", JSON.stringify(watch));
  });

  return (
    <Watchlater.Provider
      value={{
        watch,
        setWatch,
        searched,
        setSearched,
        searchedData,
        setSearchedData,
        finalSearchData,
        setFinalSearchData,
        Addtowatchlist,
        movie,
        setMovie,
      }}
    >
      {children}
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
    </Watchlater.Provider>
  );
};

export default Context;
