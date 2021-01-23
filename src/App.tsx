import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default App;
