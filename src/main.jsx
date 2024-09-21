import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import singleSpaReact from 'single-spa-react';

// Single-SPA react adapter
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => document.getElementById('root'),
  errorBoundary(err, info, props) {
    console.error(err, info, props);
    return <div>Something went wrong</div>;
  }
});
export const bootstrap = reactLifecycles.bootstrap
export const mount = reactLifecycles.mount
export const unmount = reactLifecycles.unmount

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
