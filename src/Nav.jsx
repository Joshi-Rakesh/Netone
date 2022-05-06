import React, { useContext, useEffect, useState } from "react";
import "./Nav.css";
import { Collections, SearchOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { Watchlater } from "./Context";
import { debounce } from "lodash";

const Nav = () => {
  const [background, setBackground] = useState(false);
  const navigate = useNavigate();
  const {
    watch,
    searched,
    setSearched,
    searchedData,
    setSearchedData,
    finalSearchData,
    setFinalSearchData,
  } = useContext(Watchlater);

  useEffect(() => {
    data();
  }, [searchedData]);

  const data = async () => {
    const appData = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=42ce765e4c1b08c6dcb979716fd226a3&query=${searchedData}`
    );
    const dataJson = await appData.json();
    setFinalSearchData(dataJson.results);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrolllistener);
    return () => {
      window.removeEventListener("scroll", scrolllistener);
    };
  }, [background]);

  const scrolllistener = () => {
    if (window.scrollY === 0) {
      setBackground(false);
    } else if (window.scrollY > 10) {
      setBackground(true);
    }
  };

  const handler = debounce((e) => {
    setSearchedData(e);
    setSearched(true);
    if (e.length === 0) {
      setSearched(false);
    }
  }, 1000);

  return (
    <div className={`nav ${background && "changebg"}`}>
      <h1>NETONE</h1>

      <div className="right">
        <Badge badgeContent={watch.length} color="primary">
          <Collections
            style={{ fontSize: "35px", cursor: "pointer" }}
            onClick={() => {
              navigate("/Watchlist");
            }}
          />
        </Badge>
        <div className="search">
          <input
            placeholder="Search here!"
            onChange={(e) => handler(e.target.value)}
          />
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
};

export default Nav;
