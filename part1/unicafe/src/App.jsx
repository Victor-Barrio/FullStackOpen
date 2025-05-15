import { useState } from "react";

// The button component
const Button = ({ handleClick, text }) => {
  // Return a button with the text and click handler
  return <button onClick={handleClick}>{text}</button>;
};

// The Statics Line component
const StaticsLine = ({ text, value }) => {
  // Return a line with the text and value
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  );
};

// The statics component
const Statistics = ({ good, neutral, bad }) => {
  // Calculate the total number of feedbacks
  const total = good + neutral + bad;

  // If there is no feedback, return a message
  if (total === 0) {
    return <p>No feedback given</p>;
  }

  // Calculate the average and positive percentage
  const average = ((good - bad) / total) * 10;
  const positive = (good / total) * 100;

  // Return the statistics
  return (
    <table>
      <tbody>
        <StaticsLine text="Good" value={good} />
        <StaticsLine text="Neutral" value={neutral} />
        <StaticsLine text="Bad" value={bad} />
        <StaticsLine text="All" value={total} />
        <StaticsLine text="Average" value={average.toFixed(1)} />
        <StaticsLine text="Positive" value={positive.toFixed(1) + "%"} />
      </tbody>
    </table>
  );
};

function App() {
  // Save the click for each button in a state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />

      <h2>Statics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
