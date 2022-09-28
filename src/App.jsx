import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Vítor Hugo" 
            content="Mocked text" 
          />
          <Post 
            author="Araujo Pinto"
            content="Second mocked text" 
          />
        </main>
      </div>
    </div>
  )
}

export default App
