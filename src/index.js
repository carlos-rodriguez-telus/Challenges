import React from 'react';
import ReactDOM from 'react-dom/client';

import EnsureQuestion from './components/EnsureQuestion';
import OddOrEven from './components/OddOrEven';
import Palindrome from './components/Palindrome';
import ReverseWords from './components/ReverseWords';
import SmallestInteger from './components/SmallestInteger';
import WellOfIdeas from './components/WellOfIdeas';
import ManagingEvents from './components/ManagingEvents';
import WishList from './components/WishList';
import SearchFilter from './components/SearchFilter';
import FetchData from './components/FetchData';
import Blog from './pages/Blog';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Week 1 */}
    <EnsureQuestion input="Yes"/>
    <hr></hr>
    <ReverseWords input="The quick gray fox jump over the lazy dog"/>
    <hr></hr>
    <SmallestInteger input={[9, 0, 1, 15, -350, 88, 22, -5, -30, 55, 36]}/>
    <hr></hr>
    <OddOrEven input={[0, -1, -5]}/>    
    {/* Week 2 */}
    <hr></hr>
    <Palindrome input="123456"/>
    <hr></hr>
    <WellOfIdeas input={["bad","bad","bad","good"]}/>
    <hr></hr>
    <ManagingEvents />
    <hr></hr>
    <WishList />
    <hr></hr>
    <SearchFilter input={["apple", "orange", "peach", "pineapple", "acorn", "bluberry", "strawberry"]}/>
    <hr></hr>
    <FetchData />
    <hr></hr>
    <Blog />
  </React.StrictMode>
);