import React from 'react';
import ReactDOM from 'react-dom';
// React cannot show an object as text content
const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
  const inputType = 'number';
  const minValue = 0;
  const maxValue = 100;
  return (
    <div className="test-div">
      <textarea
        autoFocus={true}
        maxLength={100}
        style={{ color: 'red', paddingTop: '100px', border: '1px solid green' }}
      />
    </div>
  );
}

root.render(<App />);
