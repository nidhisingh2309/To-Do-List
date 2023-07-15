import './App.css';

import Header from './components/header';
import Navbar from './components/iconss';
import Todo from './components/to-do-form';
import Todos from './components/Todos';


function App() {
  return (
    <div >
      <Navbar/>
      <Header/>
      <Todo/>
      <Todos/>
    </div>
  );
}

export default App;
