import React from 'react';
import { Provider } from 'react-redux';
import DrawerNavigator from '../../contact-list/2/Routers';
import store from '../../Create_store';

const App = () => (
  <Provider store={store}>
    <DrawerNavigator />
  </Provider>
);

export default App;
