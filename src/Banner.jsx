import React, { useContext, useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";
import "./Banner.css";
import Searchresults from "./Searchresults";
import { Watchlater } from "./Context";

const base_url = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const { searched, Addtowatchlist, movie, setMovie } = useContext(Watchlater);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * (20 - 1))]);
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner-content">
          <h1>{movie?.name || movie?.title} </h1>
          <p>{movie.overview?.substring(0, 150)}...</p>
          <div>
            <a
              href={`https://www.youtube.com/results?search_query=${
                movie?.name || movie?.title
              }+official trailer`}
              target="_blank"
              className="play"
            >
              Play
            </a>
            <button
              onClick={() => {
                Addtowatchlist(movie);
              }}
            >
              Watch later
            </button>
          </div>
        </div>
      </header>
      {searched ? <Searchresults /> : null}
    </>
  );
};

export default Banner;
