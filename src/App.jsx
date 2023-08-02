import "./App.css";
import { Provider } from "react-redux";

//store
import store from "./store/store";

//containers
import Header from "./containers/Header/Header";
import Row from "./containers/Row/Row";
import Categories from "./containers/Categories/Categories";
import Products from "./containers/Products/Products";
import Offer from "./containers/Offer/Offer";
import Testimonial from "./containers/Testimonial/Testimonial";
import Brands from "./containers/Brands/Brands";
import Footer from "./containers/Footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="container__header">
          <Header />
          <Row />
        </div>
        <Categories />
        <Products />
        <Offer />
        <Testimonial />
        <Brands />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
