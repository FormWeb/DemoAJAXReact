import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import SearchBar from './component/search-bar/search-bar';
import Result from './component/result/result';

function App() {

  const [name, setName] = useState("")

  const onNameSearch = (name) => {
    setName(name)
  }

  return (
    <div className="App">
      <SearchBar onSearch={onNameSearch}/>
      <Result name={name} />
    </div>
  );
}

export default App;
