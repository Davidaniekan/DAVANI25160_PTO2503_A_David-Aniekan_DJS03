import PodcastCard from "./PodcastCard.jsx";

/**
 * PodcastGrid
 * Renders a grid/list of podcasts using `PodcastCard` for each item.
 *
 * @param {Object} props - Component props.
 * @param {Array<Object>} [props.podcasts=[]] - Array of podcast objects to render.
 * @param {Array<{id:number,title:string}>} [props.genres=[]] - Array of genre objects to pass down for mapping genre IDs.
 * @returns {JSX.Element} Section element containing the podcast cards or an empty message.
 */
export default function PodcastGrid({ podcasts = [], genres = [] }) {
  if (!podcasts || podcasts.length === 0) {
    return <p className="empty">No podcasts found.</p>;
  }

  return (
    <section className="podcast-grid">
      {podcasts.map((p) => (
        <PodcastCard key={p.id} podcast={p} genres={genres} />
      ))}
    </section>
  );
}
