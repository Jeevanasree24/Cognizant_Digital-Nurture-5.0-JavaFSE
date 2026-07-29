import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: 'React Patterns', author: 'Dan Abramov', description: 'Common patterns when building React apps.' },
    { id: 2, title: 'State Management', author: 'Kent C. Dodds', description: 'Managing state effectively in React.' },
    { id: 3, title: 'Hooks in Depth', author: 'Ryan Florence', description: 'Understanding React Hooks and best practices.' }
  ];

  return (
    <div>
      <h2 className="center">Blogs</h2>
      <div className="list">
        {blogs.map(blog => (
          <div className="card" key={blog.id}>
            <h3>{blog.title}</h3>
            <p><strong>Author:</strong> {blog.author}</p>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
