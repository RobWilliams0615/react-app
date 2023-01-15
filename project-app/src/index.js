import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// React cannot show an object as text content
const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(<App />);
