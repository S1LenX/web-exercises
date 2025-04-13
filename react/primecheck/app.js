const PrimeCheck = ({ number }) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (
    <p>
      {number} is {isPrime(number) ? "a Prime Number" : "not a Prime Number"}
    </p>
  );
};

function App() {
  return <PrimeCheck number={17} />;
}

export default App;
