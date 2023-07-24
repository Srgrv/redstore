import "./App.css";

//containers
import Header from "./containers/Header/Header";
import Row from "./containers/Row/Row";
import Categories from "./containers/Categories/Categories";
import Products from "./containers/Products/Products";
import Offer from "./containers/Offer/Offer";

function App() {
  return (
    <div className="container">
      <div className="container__header">
        <Header />
        <Row />
      </div>
      <Categories />
      <Products />
      <Offer />
    </div>
  );
}

export default App;
