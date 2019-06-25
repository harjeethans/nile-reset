import React from 'react';
import ReactDOM from 'react-dom';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import {  ThemeProvider, createTheme, lightThemePrimitives } from 'baseui';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

// const Centered = styled('div', {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '100%',
// });

const nileTheme = createTheme(
  {
    ...lightThemePrimitives,
    primaryFontFamily: '"Roboto", "Helvetica Neue", sans-serif'
  },
  {
    animation: {
      timing100: '0.50s',
    },
    borders: {
      buttonBorderRadius: '5px'
    }
  }
);

ReactDOM.render(
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <ThemeProvider theme={nileTheme}>
      <App />
    </ThemeProvider>
  </StyletronProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
