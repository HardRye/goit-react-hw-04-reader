import React from 'react';
import Reader from '../Reader/Reader';
import items from '../../assets/publications.json';

// console.log(items);

const App = () => <Reader items={items} />;
export default App;
