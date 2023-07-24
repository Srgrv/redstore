import "./App.css";

//containers
import Header from "./containers/Header/Header";
import Row from "./containers/Row/Row";

function App() {
  return (
    <div className="container">
      <div className="container__header">
        <Header />
        <Row />
      </div>
    </div>
  );
}

export default App;
