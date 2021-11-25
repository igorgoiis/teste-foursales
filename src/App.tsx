import { useState } from 'react';
import Modal from 'react-modal';
import { Provider } from 'react-redux';

import store from './store';
import Header from './components/Header';
import ListTasks from './components/ListTasks';
import Footer from './components/Footer';

import { GlobalStyle } from './styles/global';
import NewTaskModal from './components/NewTaskModal';

Modal.setAppElement('#root');

function App() {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  function handleOpenNewTaksModal(){
    setIsNewTaskModalOpen(true);
  }

  function handleCloseNewTaskModal() {
    setIsNewTaskModalOpen(false);
  }
  
  return (
    <>
      <GlobalStyle/>
      <Provider store={store}>
        <Header />
        <ListTasks onOpenNewTaskModal={handleOpenNewTaksModal}/>
        <Footer />
        <NewTaskModal
          isOpen={isNewTaskModalOpen}
          onRequestClose={handleCloseNewTaskModal}
        />
      </Provider>
    </>
  );
}

export default App;