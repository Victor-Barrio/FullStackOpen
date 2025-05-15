import { useState } from "react";

const App = () => {
  // Saving the anecdotes in a variable
  const [anecdotes, setAnecdotes] = useState([
    { anecdote: "If it hurts, do it more often.", votes: 0 },
    {
      anecdote: "Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      anecdote:
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votes: 0,
    },
    {
      anecdote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: 0,
    },
    { anecdote: "Premature optimization is the root of all evil.", votes: 0 },
    {
      anecdote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votes: 0,
    },
    {
      anecdote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      votes: 0,
    },
    { anecdote: "The only way to go fast, is to go well.", votes: 0 },
  ]);

  // Creating a state variable to store the selected anecdote
  const [selected, setSelected] = useState(0);

  // Creating a function to generate a random number fot the next anecdote
  const randomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  // Creating a function to vote for the selected anecdote
  const voteAnecdote = () => {
    const newAnecdotes = [...anecdotes];
    newAnecdotes[selected] = {
      ...newAnecdotes[selected],
      votes: newAnecdotes[selected].votes + 1,
    };
    setAnecdotes(newAnecdotes);
  };

  // Creating a function to find the anecdote with the most votes
  const mostVotes = () => {
    return anecdotes.reduce((prev, current) =>
      prev.votes > current.votes ? prev : current
    );
  };

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected].anecdote}</p>
        <p>Votes: {anecdotes[selected].votes}</p>
        <button onClick={voteAnecdote}>Vote</button>
        <button onClick={randomAnecdote}>Next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{mostVotes().anecdote}</p>
        <p>Votes: {mostVotes().votes}</p>
      </div>
    </>
  );
};

export default App;
