// import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header';
import ListTasks from './components/ListTasks';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <Provider store={store}>
        <ListTasks />
      </Provider>
    </>
  );
}

export default App;