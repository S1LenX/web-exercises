import React, { useState, useEffect } from 'react';

function JokeFetcher() {
  const [joke, setJoke] = useState('');

  const fetchJoke = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => res.json())
      .then((data) => setJoke(data.setup + ' - ' + data.punchline));
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h2>Joke:</h2>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
}

export default JokeFetcher;
