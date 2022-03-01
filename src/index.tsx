import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './features/app/components/App';
import * as serviceWorker from './serviceWorker';
import './tailwind.css';
import 'antd/dist/antd.css';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const render = (Component: any) => {
  return ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render(App);

if ((module as any).hot) {
  (module as any).hot.accept('./features/app/components/App', () => {
    const NextApp = require('./features/app/components/App').default;
    render(NextApp);
  });
}
