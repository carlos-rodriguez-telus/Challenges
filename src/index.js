import React from 'react';
import ReactDOM from 'react-dom/client';
import EnsureQuestion from './components/EnsureQuestion';
import ReverseWords from './components/ReverseWords';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EnsureQuestion input="Yes"/>
    <br />
    <ReverseWords input="The quick gray fox jump over the lazy dog"/>
  </React.StrictMode>
);