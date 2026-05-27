import { useState, useEffect } from "react";

const emptyForm = { title: "", author: "", genre: "Fiction", year: "" };

function BookForm({ onSubmit, editingBook, onCancelEdit }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingBook) {
      setForm(editingBook);
    } else {
      setForm(emptyForm);
    }
    setErrors({});
  }, [editingBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    const currentYear = new Date().getFullYear();
    if (!form.title.trim()) errs.title = "Title is required";
    if (!form.author.trim()) errs.author = "Author is required";
    if (!form.year) errs.year = "Year is required";
    else if (Number(form.year) < 1000) errs.year = `Year must be 1000 or later`;
    else if (Number(form.year) > currentYear) errs.year = `Year cannot be greater than ${currentYear}`;
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    onSubmit({ ...form, year: Number(form.year) });
    setForm(emptyForm);
    setErrors({});
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <span className="form-header-icon">{editingBook ? "✏️" : "➕"}</span>
        <h2>{editingBook ? "Edit Book" : "Add a Book"}</h2>
      </div>

      <div className="field-group">
        <label>Title</label>
        <input
          name="title"
          placeholder="e.g. The Great Gatsby"
          value={form.title}
          onChange={handleChange}
          className={errors.title ? "input-error" : ""}
        />
        {errors.title && <span className="field-error">{errors.title}</span>}
      </div>

      <div className="field-group">
        <label>Author</label>
        <input
          name="author"
          placeholder="e.g. F. Scott Fitzgerald"
          value={form.author}
          onChange={handleChange}
          className={errors.author ? "input-error" : ""}
        />
        {errors.author && <span className="field-error">{errors.author}</span>}
      </div>

      <div className="field-group">
        <label>Genre</label>
        <select name="genre" value={form.genre} onChange={handleChange}>
          <option>Fiction</option>
          <option>Non-Fiction</option>
          <option>Dystopian</option>
          <option>Sci-Fi</option>
          <option>Fantasy</option>
          <option>Mystery</option>
          <option>Romance</option>
        </select>
      </div>

      <div className="field-group">
        <label>Publication Year</label>
        <input
          name="year"
          type="number"
          placeholder="e.g. 1960"
          value={form.year}
          onChange={handleChange}
          className={errors.year ? "input-error" : ""}
        />
        {errors.year && <span className="field-error">{errors.year}</span>}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-submit">
          {editingBook ? "Update Book" : "Add Book"}
        </button>
        {editingBook && (
          <button type="button" className="btn-cancel" onClick={onCancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default BookForm;
