import { useState } from 'react';

function Content() {
  const [joke, setJoke] = useState("");
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my computer I needed a break, and it said no problem — it'll go to sleep.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why did the function return early? Because it had a timeout!"
  ];

  function showJoke() {
    const rand = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[rand]);
  }

  return (
    <div>
      <button onClick={showJoke}>Show Random Joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default Content;
