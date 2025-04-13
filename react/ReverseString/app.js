const ReverseString = ({ text }) => {
  const reversed = text.split("").reverse().join("");
  const isPalindrome = text.toLowerCase() === reversed.toLowerCase();

  return (
    <div>
      <p>Reversed: {reversed}</p>
      <p>
        {text} is {isPalindrome ? "a Palindrome" : "not a Palindrome"}
      </p>
    </div>
  );
};

function App() {
  return <ReverseString text="racecar" />;
}

export default App;
