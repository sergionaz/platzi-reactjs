import React, { useState, useEffect } from 'react'

const SearchPosts = () => {
  const [query, setQuery] = useState("");
  const [posts, setPost] = useState([]);

  useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
        .then( (response) => response.json())
        .then( (data) => setPost(data))
        .catch( (error) => console.error("Error fetching data: " + error) )
  }, [query])

  return (
    <div>
      <h1> Posteos </h1>
      <input
        type="text"
        placeholder="Buscar por título"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ul>
        {
          posts.map((post) => (
            <li key={post.id}>{post.title}</li>                    
          ))                
        }
      </ul>
    </div>   
  )
}

export default SearchPosts