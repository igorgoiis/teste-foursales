import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';
import Header from './components/Header';



import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </>
  );
}

export default App;