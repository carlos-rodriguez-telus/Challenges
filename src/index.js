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
import TwoOne from './components/TwoOne';
import LeapYear from './components/LeapYear';
import Maximum from './components/Maximum';
import Base64 from './components/Base64';
import FunMap from './components/FunMap';
import SeparatingString from './components/SeparatingString';
import HightestWord from './components/HightestWord';


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
    <hr></hr>
    <TwoOne s1={"aabbcc"} s2={"zzyyxxwww"} />
    <hr></hr>
    <LeapYear year={"1900"}/>
    <hr></hr>
    <Maximum a1={["bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz","a"]} a2={["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]}/>
    {/* W4D4 */}
    <hr></hr>
    <Base64 input={"WIN"}/>
    {/* W5 */}
    <hr></hr>
    <FunMap/> 
    <hr></hr>
    <SeparatingString input={"el barto"}/>
    <hr></hr>
    <HightestWord input={"el barto duerme zzz en la taberna la jacaranda"}/>
  </React.StrictMode>
);