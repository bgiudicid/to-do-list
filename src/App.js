import './App.css';
import List from '../src/components/List';

function App() {

  return (
    <>
    <div id='page-box'>
      <header></header>
      <div id='box1'>
        <h1>TO-DO LIST</h1>
      </div>
    </div>
    <div id='page-box2'>
      <div id='box2'>
        <List/>
      </div>
    </div>
    </>
  );
}

export default App;
