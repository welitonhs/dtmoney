import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer } from 'miragejs';

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

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
}
