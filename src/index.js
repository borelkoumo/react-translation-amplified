import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// import App from './App';
import Translator from './components/Translator';

import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';


Amplify.configure(awsExports);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

ReactDOM.render(
  <React.StrictMode>
    <Translator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
