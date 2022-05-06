import "./App.css";
import Banner from "./Banner";
import Context from "./Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import requests from "./request";
import Row from "./Row";
import Watchlist from "./Watchlist";

function App() {
  return (
    <Context>
      <Router>
        <Routes>
          <Route path="/watchlist" element={<Watchlist />} />
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Banner />
                <Row
                  title="NETONE ORIGINALS"
                  fetchUrl={requests.fetchNetflixOriginals}
                />
                <Row title="Trending now" fetchUrl={requests.fetchTrending} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Row
                  title="Action Movies"
                  fetchUrl={requests.fetchActionMovies}
                />
                <Row
                  title="Romantic Movies"
                  fetchUrl={requests.fetchRomanceMovies}
                />
                <Row
                  title="Documantaries"
                  fetchUrl={requests.fetchDocumantaries}
                />
                <Row
                  title="Comedy Movies"
                  fetchUrl={requests.fetchComedyMovies}
                />
                <Row
                  title="Horror Movies"
                  fetchUrl={requests.fetchHorrorMovies}
                />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </Context>
  );
}
export default App;
