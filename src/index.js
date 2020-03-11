import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ReactGA from 'react-ga';

const trackingId = "UA-159315544-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.render(<App />, document.getElementById('root'));
