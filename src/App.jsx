import './App.css';
import Body from './Components/Body/Body';
import DataContext from './Context/DataContext';

function App() {
  return (<>
    <DataContext>
      <div className="app">
        <Body />
      </div>
    </DataContext>
  </>
  );
}

export default App;
