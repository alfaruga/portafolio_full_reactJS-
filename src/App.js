import React from 'react';
import Layout from './containers/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

function App() {
  library.add(fab, fas)
  return (
    <BrowserRouter basename="portafolio_full_reactJS-/">
      <Layout />
    </BrowserRouter>
  );
}

export default App;
