import podcastIcon from "../assets/podcast-icon.svg";
import searchIcon from "../assets/search-icon.svg";
import userProfile from "../assets/user-profile.svg";

/**
 * Header
 * Top-of-app header containing:
 * - App logo
 * - Search input with button
 * - Profile avatar
 *
 * This is a presentational component and does not manage search state here.
 *
 * @returns {JSX.Element} Header UI component.
 */
export function Header() {
  return (
    <header>
      <div className="header-left">
        <img
          src={podcastIcon}
          alt="podcast logo"
          className="podcast-icon"
          id="podcastIcon"
        />
        <span className="app-name">PodcastApp</span>
      </div>

      <div className="header-right">
        <div className="search-container">
          <button className="search-btn">
            <img
              src={searchIcon}
              alt="search"
              className="search-icon"
            />
          </button>
          <input
            type="text"
            placeholder="Search..."
            id="searchBar"
            className="search-input"
          />
        </div>

        {/* Placeholder profile picture */}
        <img
          src={userProfile}
          alt="Profile Picture"
          className="profile-pic"
        />
      </div>
    </header>
  );
}
