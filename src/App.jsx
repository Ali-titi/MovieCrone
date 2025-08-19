import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Topics from "./components/Topics";
import Detail from "./components/Detail";

function App() {
  const API_KEY = "97ef910c8dbfc58de8ccd2f3fc7adc14";
  const sections = {
    "🔥 Trending Now": `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
    "🎬 Now Playing": `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
    "⭐ Top Rated": `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
    "🔥 Popular": `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    "🚀 Upcoming": `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
  };

  return (
    <div className="bg-black text-white">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
        <div className="p-3 sm:p-5">
          <Header />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  {Object.entries(sections).map(([title, url], ind) => (
                    <Topics url={url} title={title} key={ind} />
                  ))}
                </>
              }
            />
            <Route path="/movie/:id" element={<Detail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
