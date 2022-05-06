import { AddToQueueOutlined } from "@mui/icons-material";
import React, { useContext } from "react";
import { Watchlater } from "./Context";
import "./Searchresults.css";

const Searchresults = () => {
  const { finalSearchData, searchedData, Addtowatchlist, setMovie } =
    useContext(Watchlater);
  return (
    <>
      {finalSearchData ? (
        finalSearchData.length === 0 ? (
          <h1
            style={{
              width: " 100%",
              color: "white",
              display: "flex",
              wordBreak: "break-word",
              alignItems: "center",
              justifyContent: "center",
              padding: "50px",
            }}
          >
            No data found for "{searchedData}", try something else.
          </h1>
        ) : (
          <>
            <div className="searchcontainer">
              <h1>Search results for "{searchedData}"</h1>
              <div className="searchedmovie">
                {finalSearchData.map((e) => (
                  <div key={e.id} className="onemovie">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${e.poster_path}`}
                      alt="Poster unavailable"
                      className="onemovieimage"
                      onClick={() => {
                        setMovie(e);
                      }}
                    />
                    <span>{e.vote_average}</span>{" "}
                    <div
                      className="searchwatchlist"
                      onClick={() => Addtowatchlist(e)}
                    >
                      <AddToQueueOutlined />
                    </div>
                    <div className="onemoviedata">
                      <h4 className="onemovietitle">{e.name || e.title}</h4>
                      <p className="onemovierelease">
                        {e.first_air_date || e.release_date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <hr />
          </>
        )
      ) : null}
    </>
  );
};

export default Searchresults;
