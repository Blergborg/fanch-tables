import './App.css';
import BasicTableComponent from './components/basic.table';
import ColapseColTable from './components/colapseCol.table';
import FinalTableComponet from './components/finalTable';

function App() {
  return (
    <div className="App">
      <h3>Basic Table using <code>react-table</code></h3>
      {/* <BasicTableComponent /> */}
      {/* <ColapseColTable /> */}
      <FinalTableComponet />
    </div>
  );
}

export default App;
