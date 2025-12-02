import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CreateMovie from "./pages/CreateMovie";
import DeleteMovie from "./pages/DeleteMovie";
import EditMovie from "./pages/EditMovie";
import MovieDetails from "./pages/MovieDetails";
import MovieList from "./pages/MovieList";
import "./App.css";
export default function App() {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <ul>
          <li>
            <Link to="/">Movie List</Link>
          </li>
          <li>
            <Link to="/create">Create Movie</Link>
          </li>
        </ul>
      </nav>
      {/* Routes for each screen or page */}
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/create" element={<CreateMovie />} />
        {/* path for movie details must take in an id */}
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/edit/:id" element={<EditMovie />} />
        <Route path="/delete/:id" element={<DeleteMovie />} />
      </Routes>
    </div>
  );
}
