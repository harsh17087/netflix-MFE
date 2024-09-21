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
export async function bootstrap() {
  console.log("Netflix clone microfrontend bootstrap");
}

export async function mount(props) {
  console.log("Netflix clone microfrontend mount", props);
  ReactDOM.render(<App {...props} />, document.getElementById('root'));
}

export async function unmount(props) {
  console.log("Netflix clone microfrontend unmount", props);
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}

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
