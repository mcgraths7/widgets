import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Search.css';

const Search = ({ defaultSearchTerm }) => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState(defaultSearchTerm);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(defaultSearchTerm);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 350);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  useEffect(() => {
    const fetchData = async (searchTerm) => {
      try {
        const results = await axios.get('https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            list: 'search',
            format: 'json',
            origin: '*',
            srsearch: searchTerm,
          },
        });
        setResults(results.data.query.search);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">
            <h3>
              <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                {result.title}
              </a>
            </h3>
          </div>
          <p>
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="ui search">
        <input
          type="text"
          className="prompt"
          placeholder="Search term"
          autoFocus
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </>
  );
};

export default Search;
