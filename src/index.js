import React from 'react';
import ReactDOM from 'react-dom/client';
import EnsureQuestion from './components/EnsureQuestion';
import OddOrEven from './components/OddOrEven';
import ReverseWords from './components/ReverseWords';
import SmallestInteger from './components/SmallestInteger';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Week 1 */}
    <EnsureQuestion input="Yes"/>
    <br />
    <ReverseWords input="The quick gray fox jump over the lazy dog"/>
    <br />
    <SmallestInteger input={[9, 0, 1, 15, -350, 88, 22, -5, -30, 55, 36]}/>
    <br />
    <OddOrEven input={[0, -1, -5]}/>
  </React.StrictMode>
);