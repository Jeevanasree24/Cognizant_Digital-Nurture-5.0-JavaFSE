import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async loadPosts() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const data = await res.json();
      // Map to Post instances (optional)
      const posts = data.map(p => new Post(p.id, p.title, p.body));
      this.setState({ posts });
    } catch (error) {
      // Let componentDidCatch handle UI-level errors; rethrow to trigger it
      throw error;
    }
  }

  componentDidMount() {
    // call loadPosts and handle errors to trigger componentDidCatch
    this.loadPosts().catch(err => {
      // Using setState to store error would also work, but spec requires componentDidCatch
      // Rethrow so React's error boundary mechanism invokes componentDidCatch
      // However componentDidCatch only catches errors in child components' render, lifecycle, and constructors,
      // so we'll call alert here as a fallback.
      alert('Error loading posts: ' + err.message);
    });
  }

  componentDidCatch(error, info) {
    // Display errors using alert as required
    alert('An error occurred: ' + (error && error.toString()));
  }

  render() {
    const { posts } = this.state;
    return (
      <div style={{ maxWidth: 800, margin: '24px auto', padding: 12 }}>
        <h2>Posts</h2>
        {posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          posts.map(p => (
            <div key={p.id} style={{ borderBottom: '1px solid #ddd', padding: '12px 0' }}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Posts;
