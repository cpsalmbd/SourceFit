import React from 'react';
// import ReactDOM from 'react-dom';
import Hello from './components/Hello';
import { createRoot } from 'react-dom/client';


const App = () => (
    <div>
        <h1>Hello, React with TypeScript and Laravel!</h1>
        <Hello />
    </div>
);


createRoot(document.getElementById('app') as HTMLElement).render(<App />);
