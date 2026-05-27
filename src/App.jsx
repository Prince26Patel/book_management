import { useState, useEffect } from "react";
import { getBooks, addBook, updateBook, deleteBook } from "./api/bookApi";
import SearchBar from "./components/SearchBar";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingBook, setEditingBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getBooks();
      setBooks(data);
    } catch {
      setError("Failed to fetch books. Make sure the server is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAdd = async (book) => {
    try {
      setError(null);
      const newBook = await addBook(book);
      setBooks((prev) => [...prev, newBook]);
    } catch {
      setError("Failed to add book.");
    }
  };

  const handleUpdate = async (book) => {
    try {
      setError(null);
      const updated = await updateBook(book.id, book);
      setBooks((prev) => prev.map((b) => (b.id === book.id ? updated : b)));
      setEditingBook(null);
    } catch {
      setError("Failed to update book.");
    }
  };

  const handleDelete = async (id) => {
    try {
      setError(null);
      await deleteBook(id);
      setBooks((prev) => prev.filter((b) => b.id !== id));
    } catch {
      setError("Failed to delete book.");
    }
  };

  const handleSubmit = (book) => {
    if (editingBook) {
      handleUpdate(book);
    } else {
      handleAdd(book);
    }
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = genreFilter === "All" || book.genre === genreFilter;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="app">
      <div className="top-accent-bar" />

      <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-icon">📚</span>
          <span className="navbar-title">BookShelf</span>
        </div>
        <span className="navbar-subtitle">Book Management System</span>
      </nav>

      {error && (
        <div className="error-banner">
          <span>⚠️ {error}</span>
          <button onClick={() => setError(null)}>✕</button>
        </div>
      )}

      <div className="main-layout">
        <aside className="sidebar">
          <BookForm
            onSubmit={handleSubmit}
            editingBook={editingBook}
            onCancelEdit={() => setEditingBook(null)}
          />
        </aside>

        <main className="content">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            genreFilter={genreFilter}
            onGenreChange={setGenreFilter}
            totalCount={filteredBooks.length}
          />

          {loading ? (
            <div className="loading-state">
              <div className="spinner" />
              <p>Loading books…</p>
            </div>
          ) : (
            <BookList
              books={filteredBooks}
              onEdit={setEditingBook}
              onDelete={handleDelete}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
