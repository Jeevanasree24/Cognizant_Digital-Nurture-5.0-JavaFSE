import React, { useState } from 'react';
import './App.css';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';

function App() {
  const [view, setView] = useState('courses'); // 'courses' | 'books' | 'blogs'

  return (
    <div className="App">
      <div className="controls">
        <button onClick={() => setView('courses')}>Show Courses</button>
        <button onClick={() => setView('books')}>Show Books</button>
        <button onClick={() => setView('blogs')}>Show Blogs</button>
      </div>

      <div className="content">
        {view === 'courses' && <CourseDetails />}
        {view === 'books' && <BookDetails />}
        {view === 'blogs' && <BlogDetails />}
      </div>
    </div>
  );
}

export default App;
