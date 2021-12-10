import ApiScreen from './screens/ApiScreen'
import './App.css'
import DatasetScreen from './screens/DatasetScreen';
import { useState } from 'react';

function App() {
  const [firstPage, setFirstPage] = useState(true)

  if (firstPage) {
    return <ApiScreen onSwitch={() => setFirstPage(false)} />
  } else {
    return <DatasetScreen onSwitch={() => setFirstPage(true)} />
  }
}

export default App;
