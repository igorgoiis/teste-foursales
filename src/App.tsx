// import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header';
import ListTasks from './components/ListTasks';

import { GlobalStyle } from './styles/global';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <Provider store={store}>
        <ListTasks />
      </Provider>
      <Footer />
    </>
  );
}

export default App;