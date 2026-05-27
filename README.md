# BookShelf - Book Management System 📚

A modern, fully-featured React-based Book Management System built with Vite, featuring a clean UI and complete CRUD operations integrated with a mock JSON Server API.

## ✨ Features

- ✅ **View Books** - Display books with title, author, genre, and publication year
- ✅ **Add Books** - Form with real-time validation (title, author, genre, year)
- ✅ **Edit Books** - Update existing book details with prefilled form
- ✅ **Delete Books** - Remove books with a single click
- ✅ **Search** - Real-time search by title or author (case-insensitive)
- ✅ **Genre Filtering** - Filter books by category (7 genres available)
- ✅ **Loading States** - Animated spinner during data fetch
- ✅ **Error Handling** - Comprehensive error messages and validation feedback
- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ✅ **Professional UI** - Modern Poppins font, gradient accents, smooth animations

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm 8+

### Installation

```bash
cd book-management
npm install
```

### Run Development Server

```bash
npm run dev
```

This will start:
- **React App**: http://localhost:5173
- **JSON Server API**: http://localhost:3001

### Separate Commands

```bash
npm run server    # Run only JSON Server on port 3001
npm run dev       # Run Vite + JSON Server concurrently (recommended)
npm run build     # Build for production
npm run preview   # Preview production build
```

## 📋 Project Structure

```
book-management/
├── db.json                         ← Mock API database (5 seed books)
├── index.html                      ← HTML entry + Poppins font link
├── package.json                    ← Dependencies + npm scripts
├── src/
│   ├── api/
│   │   └── bookApi.js             ← Axios CRUD service layer
│   ├── components/
│   │   ├── BookForm.jsx           ← Add/Edit form with validation
│   │   ├── BookList.jsx           ← Display books with genre badges
│   │   └── SearchBar.jsx          ← Search + genre filter dropdown
│   ├── App.jsx                    ← Main app, state management
│   ├── App.css                    ← Complete design system CSS
│   ├── main.jsx                   ← React DOM entry point
│   └── index.css                  ← (empty, all styles in App.css)
└── vite.config.js                 ← Vite configuration
```

## 🔌 API Integration

**Type:** JSON Server (Mock REST API)  
**Base URL:** `http://localhost:3001/books`

### CRUD Operations

| Operation | Method | Endpoint | Description |
|-----------|--------|----------|-------------|
| **Get All Books** | GET | `/books` | Fetch all books on app mount |
| **Add Book** | POST | `/books` | Create new book entry |
| **Update Book** | PUT | `/books/{id}` | Edit existing book |
| **Delete Book** | DELETE | `/books/{id}` | Remove book from database |

**HTTP Client:** Axios

### Example API Calls

```javascript
// GET all books
axios.get('http://localhost:3001/books')

// POST new book
axios.post('http://localhost:3001/books', {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  genre: "Fantasy",
  year: 1937
})

// PUT update book
axios.put('http://localhost:3001/books/1', { title: "Updated Title" })

// DELETE book
axios.delete('http://localhost:3001/books/1')
```

## 📦 Dependencies

```json
{
  "react": "^19.2.6",
  "react-dom": "^19.2.6",
  "axios": "^1.16.1",
  "json-server": "^0.17.4",
  "concurrently": "^9.2.1",
  "vite": "^8.0.12"
}
```

## 🎨 Design System

### Colors
- **Primary**: Indigo (#4f46e5)
- **Primary Dark**: #4338ca
- **Primary Light**: #ede9fe
- **Danger**: Red (#ef4444)
- **Success**: Green (#10b981)
- **Background**: Lavender (#f1f0fb)

### Typography
- **Font**: Google Fonts Poppins
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Components
- **Gradient Accent Bar** - Top gradient stripe (indigo → violet)
- **Navbar** - Brand logo, title, responsive subtitle
- **Sidebar** - Sticky left panel with form
- **Book Cards** - Gradient left border, emoji icon, genre badges, hover lift
- **Genre Badges** - 7 color variations (indigo, green, slate, violet, teal, amber, rose)
- **Responsive** - Stacks to single column on <768px

## 📝 Form Validation

### Title & Author
- Required fields
- Red border + error message if empty

### Publication Year
- Required field
- Must be ≥ 1000
- Cannot exceed current year (2026)
- Specific error messages: `"Year must be 1000 or later"` or `"Year cannot be greater than 2026"`

### Genre
- Dropdown with 7 options: Fiction, Non-Fiction, Dystopian, Sci-Fi, Fantasy, Mystery, Romance

## 🔍 Search & Filter

### Search
- Real-time search by **title** or **author**
- Case-insensitive substring matching
- Magnifier icon in input field
- Clear button (✕) appears when text is entered

### Genre Filter
- Dropdown filter (default: "All")
- Works in combination with search (AND logic)
- Shows result count: "Showing X books"

## 🎯 Component Breakdown

### App.jsx
- **Responsibility**: Central state management, API calls, error handling
- **State**: books, loading, error, editingBook, searchTerm, genreFilter
- **Methods**: fetchBooks, handleAdd, handleUpdate, handleDelete, handleSubmit

### BookForm.jsx
- **Responsibility**: Add/Edit form UI and validation
- **Features**: Dual mode (Add/Edit), inline field validation, error messages
- **Props**: onSubmit, editingBook, onCancelEdit

### BookList.jsx
- **Responsibility**: Display books in card layout
- **Features**: Genre badges, action buttons (Edit/Delete), empty state
- **Props**: books, onEdit, onDelete

### SearchBar.jsx
- **Responsibility**: Search input + genre filter
- **Features**: Real-time search, clear button, result count
- **Props**: searchTerm, onSearchChange, genreFilter, onGenreChange, totalCount

### bookApi.js
- **Responsibility**: Centralized API calls with Axios
- **Functions**: getBooks(), addBook(), updateBook(), deleteBook()

## 🖥️ Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: Full layout (sidebar left, content right)
- **Tablet/Mobile** (<768px): Stacked layout (form above, list below)

## ⚙️ Configuration

### Vite Config
- React plugin with Fast Refresh
- Default port: 5173

### Package Scripts
```json
{
  "dev": "concurrently \"vite\" \"json-server --watch db.json --port 3001\"",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "server": "json-server --watch db.json --port 3001"
}
```

## 🗂️ Seed Data

The `db.json` file comes with 5 sample books:
1. To Kill a Mockingbird - Harper Lee (Fiction, 1960)
2. 1984 - George Orwell (Dystopian, 1949)
3. The Great Gatsby - F. Scott Fitzgerald (Fiction, 1925)
4. Sapiens - Yuval Noah Harari (Non-Fiction, 2011)
5. Dune - Frank Herbert (Sci-Fi, 1965)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This generates a `dist/` folder ready to deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

**Note**: For production, you'll need to host the JSON Server separately or use a real backend API. Update the `API_URL` in `src/api/bookApi.js` accordingly.

## 🐛 Troubleshooting

### "Failed to fetch books. Make sure the server is running."
- Ensure both Vite and JSON Server are running
- Check that port 3001 is available
- Try running `npm run dev` again

### "Cannot find module" errors
- Run `npm install` to ensure all dependencies are installed
- Delete `node_modules/` and `package-lock.json`, then run `npm install` again

### Form validation not working
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)

### Changes not reflecting
- Vite has hot module replacement (HMR). If changes don't appear:
  1. Check the browser console for errors
  2. Hard refresh the page
  3. Restart the dev server

## 📄 License

This project is part of a React evaluation assignment.

## 👤 Author

Created as a Book Management System evaluation project demonstrating React fundamentals, component architecture, API integration, and modern UI design.

---

**Status**: ✅ Ready for Evaluation | **Last Updated**: May 26, 2026
