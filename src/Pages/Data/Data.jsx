import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Data.css';

function Data() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data from the specified URL
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

      // Filter posts to include only those with a user ID of 1
      const filteredPosts = response.data.filter(post => post.userId === 1);

      // Set the filtered data to the state
      setPosts(filteredPosts);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>      
        <div className="homepage-header">
            Data
        </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
