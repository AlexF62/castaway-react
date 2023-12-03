import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/styles/reset.scss';
import './styles/fonts.scss';
import './styles/media.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
