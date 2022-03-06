import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { HomeScreen } from "./screens/HomeScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />}></Route>
              <Route path="/product/:id" element={<ProductScreen />}></Route>
              <Route path="/cart">
                <Route path=":id" element={<CartScreen />} />
                <Route path="" element={<CartScreen />} />
              </Route>
            </Routes>
          </Container>
        </main>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
