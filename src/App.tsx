import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Provider store={store}>
        {/* <Header /> */}
      </Provider>
      <GlobalStyle/>
    </>
  );
}

export default App;