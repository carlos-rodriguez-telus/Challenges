import React from 'react';
import ReactDOM from 'react-dom/client';
import EnsureQuestion from './components/EnsureQuestion';
import OddOrEven from './components/OddOrEven';
import Palindrome from './components/Palindrome';
import ReverseWords from './components/ReverseWords';
import SmallestInteger from './components/SmallestInteger';
import WellOfIdeas from './components/WellOfIdeas';
import ManagingEvents from './components/ManagingEvents';

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
    <br />
    {/* Week 2 */}
    <Palindrome input="123456"/>
    <br />
    <WellOfIdeas input={["bad","bad","bad","good"]}/>
    <br />
    <ManagingEvents />
  </React.StrictMode>
);