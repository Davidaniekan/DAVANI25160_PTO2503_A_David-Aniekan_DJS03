import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import { Header } from "./components/Header.jsx";
import { Container } from "./components/Container.jsx";
import { genres } from "./data.js";
import { fetchPodcasts } from "./api/fetchPodcast.js";
import PodcastGrid from "./components/PodcastGrid";

/**
 * Root React component for the PodcastApp.
 *
 * Responsibilities:
 * - Manage top-level application state (podcasts, loading, error).
 * - Trigger initial data fetch for podcasts.
 * - Render header, controls container, and podcast grid (with loading/error states).
 *
 * @component
 * @returns {JSX.Element} The application UI.
 */
export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  return (
    <>
      {/* APP HEADER */}
      <Header />

      {/* MAIN CONTAINER */}
      <Container />

      {/* PODCAST GRID */}
      {loading && <p className="loading">Loading podcasts...</p>}
      {error && (
        <p className="error">Error occurred while fetching podcasts: {error}</p>
      )}
      {!loading && !error && (
        <PodcastGrid podcasts={podcasts} genres={genres} />
      )}
    </>
  );
}
