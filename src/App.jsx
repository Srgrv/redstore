import "./App.css";

//containers
import Header from "./containers/Header/Header";
import Row from "./containers/Row/Row";
import Categories from "./containers/Categories/Categories";
import Products from "./containers/Products/Products";

function App() {
  return (
    <div className="container">
      <div className="container__header">
        <Header />
        <Row />
      </div>
      <Categories />
      <Products />
    </div>
  );
}

export default App;
