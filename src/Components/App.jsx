import React, { PropTypes } from 'react';
import Header from './Header';

const App = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired, //  eslint-disable-line react/forbid-prop-types
};

export default App;
