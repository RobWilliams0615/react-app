import React from 'react';
import ReactDOM from 'react-dom';
// React cannot show an object as text content
const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
  const greeting = 'Welcome to my site!';
  const name = 'Rob';
  const age = 45;
  return (
    <div>
      <h1>{greeting}</h1>
      <h1>
        My name is {name} and my age is {age}
      </h1>
    </div>
  );
}

root.render(<App />);
