import React, { useContext, useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { AddToQueueOutlined } from "@mui/icons-material";
import { Watchlater } from "./Context";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
  const [moviesswiper, setMoviesswiper] = useState([]);
  const { Addtowatchlist, movie, setMovie } = useContext(Watchlater);

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchUrl);
      setMoviesswiper(request.data.results);
      return request;
    }

    fetchdata();
  }, [fetchUrl]);

  return (
    <div className="all">
      <h2 className="row-title">{title}</h2>
      <Swiper
        style={{
          "--swiper-navigation-color": "white",
        }}
        slidesPerView={9}
        spaceBetween={15}
        navigation={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          "@1.00": {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 15,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {moviesswiper.map((e) => (
          <SwiperSlide key={e.id}>
            <img
              src={`${base_url}${e.poster_path}`}
              alt={e.name}
              onClick={() => {
                setMovie(e);
              }}
            />
            <span>{e.vote_average}</span>
            <div className="watchlist" onClick={() => Addtowatchlist(e)}>
              <AddToQueueOutlined />
            </div>
            <div className="details">
              <h4>{e.name || e.title}</h4>
              <p>{e.first_air_date || e.release_date}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Row;
