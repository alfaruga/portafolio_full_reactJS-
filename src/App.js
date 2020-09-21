import React from 'react';
import Layout from './containers/Layout/Layout';
import { HashRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

function App() {
  library.add(fab, fas)
  return (
    <HashRouter basename="/">
      <Layout />
    </HashRouter>
  );
}

export default App;
