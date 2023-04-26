import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Hello from './Hello';
import Profile from './Profile';
//import Counter from './Counter';
import reportWebVitals from './reportWebVitals';
import PackingList from './PackingList';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<Hello>
<Bmi />
</Hello>
</React.StrictMode>
);