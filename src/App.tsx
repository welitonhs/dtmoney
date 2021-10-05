import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer } from 'miragejs';
import Modal from 'react-modal';
import { useState } from "react";

createServer({
  routes(){
    this.namespace = 'api';

    this.get('/transactions',(() => {
      return [
          {
            id: 1,
            title: 'WebSite Freela',
            amount: 400,
            type: 'deposit',
            category: 'Development',
            createdAt: new Date()
          }
        ]
      })
    )
  }
})

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModal(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <Modal 
          isOpen={isNewTransactionModal}
          onRequestClose={handleCloseNewTransactionModal}
      >
          <h2>Cadastrar Transação</h2>
      </Modal>
    </>
  );
}
