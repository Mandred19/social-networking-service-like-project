import React, { FC, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';

const App: FC = (): ReactElement => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default App;
