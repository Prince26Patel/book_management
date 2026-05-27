const GENRE_BADGE = {
  Fiction: "badge-indigo",
  "Non-Fiction": "badge-green",
  Dystopian: "badge-slate",
  "Sci-Fi": "badge-violet",
  Fantasy: "badge-teal",
  Mystery: "badge-amber",
  Romance: "badge-rose",
};

function BookList({ books, onEdit, onDelete }) {
  if (books.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📭</div>
        <h3>No books found</h3>
        <p>Try adjusting your search or filter, or add a new book.</p>
      </div>
    );
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <div className="card-accent" />
          <div className="book-thumb">📖</div>
          <div className="book-info">
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
            <div className="book-meta">
              <span className={`genre-badge ${GENRE_BADGE[book.genre] || "badge-indigo"}`}>
                {book.genre}
              </span>
              <span className="book-year">📅 {book.year}</span>
            </div>
          </div>
          <div className="book-actions">
            <button className="btn-edit" onClick={() => onEdit(book)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Edit
            </button>
            <button className="btn-delete" onClick={() => onDelete(book.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
