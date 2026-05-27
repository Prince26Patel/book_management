const GENRES = ["All", "Fiction", "Non-Fiction", "Dystopian", "Sci-Fi", "Fantasy", "Mystery", "Romance"];

function SearchBar({ searchTerm, onSearchChange, genreFilter, onGenreChange, totalCount }) {
  return (
    <div className="search-section">
      <div className="search-bar">
        <div className="search-input-wrap">
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 3a6 6 0 100 12A6 6 0 009 3zM1 9a8 8 0 1114.32 4.906l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387A8 8 0 011 9z" clipRule="evenodd" />
          </svg>
          <input
            type="text"
            placeholder="Search by title or author…"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchTerm && (
            <button className="search-clear" onClick={() => onSearchChange("")} title="Clear">
              ✕
            </button>
          )}
        </div>
        <select value={genreFilter} onChange={(e) => onGenreChange(e.target.value)}>
          {GENRES.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <p className="result-count">
        Showing <strong>{totalCount}</strong> book{totalCount !== 1 ? "s" : ""}
      </p>
    </div>
  );
}

export default SearchBar;
