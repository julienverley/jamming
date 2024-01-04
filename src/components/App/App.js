// import logo from "./logo.svg";
// import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <header className={styles.Header}>
        <div>Jamming</div>
      </header>
      <SearchBar />
    </div>
  );
}

export default App;
