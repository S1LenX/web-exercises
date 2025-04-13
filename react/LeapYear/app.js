const LeapYearCheck = ({ year }) => {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return <p>{year} is {isLeapYear ? "a Leap Year" : "not a Leap Year"}</p>;
};

function App() {
  return <LeapYearCheck year={2024} />;
}

export default App;
