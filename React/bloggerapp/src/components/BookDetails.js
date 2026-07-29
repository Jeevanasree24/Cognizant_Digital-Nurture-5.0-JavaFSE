import React from 'react';

const BookDetails = () => {
  const books = [
    { id: 1, title: 'Learning React', author: 'Alex Banks', price: 350 },
    { id: 2, title: 'React Up & Running', author: 'Stoyan Stefanov', price: 400 },
    { id: 3, title: 'Fullstack React', author: 'Acme Authors', price: 500 }
  ];

  return (
    <div>
      <h2 className="center">Books</h2>
      <div className="list">
        {books.map(book => (
          <div className="card" key={book.id}>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Price:</strong> ${book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetails;
