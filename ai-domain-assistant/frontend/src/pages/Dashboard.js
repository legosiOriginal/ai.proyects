import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [domains, setDomains] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // Fetch user domains here
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/domains/search', { query }, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      setDomains(response.data);
    } catch (error) {
      console.error('Search failed', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for domains"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {domains.map(domain => (
          <div key={domain.id}>{domain.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
