/**
 * Container
 * UI container for app-level controls and modal scaffolding.
 *
 * Responsibilities:
 * - Render filter controls (genre & sort drop-downs).
 * - Provide a container element where podcast cards may be inserted (legacy id `podcastList`).
 * - Include markup for a modal dialog shell (hidden by default).
 *
 * This is a purely presentational component; it does not manage filter state here.
 *
 * @returns {JSX.Element} Container element with controls and modal.
 */

export function Container() {
  return (
    <div className="container">
      {/* Filter dropdowns */}
      <div className="filters">
        {/* Genre filter */}
        <label htmlFor="genreSelect">Filter by:</label>
        <select id="genreSelect">
          <option>All Genres</option>
          <option>Genre 1</option>
          <option>Genre 2</option>
          <option>Genre 3</option>
          <option>Genre 4</option>
        </select>

        {/* Sort filter */}
        <select id="sortSelect">
          <option>Recently Updated</option>
          <option>Most Popular</option>
          <option>Newest</option>
        </select>
      </div>

      {/* Podcast cards */}
      <div id="podcastList" className="podcast-list"></div>

      {/* MODAL SECTION */}
      <div id="modal" className="modal hidden" aria-hidden="true">
        <div className="modal-content">
          {/* Close button */}
          <span className="close-button">&times;</span>
          {/* Modal dynamic content */}
          <div id="modalContent"></div>
        </div>
      </div>
    </div>
  );
}
