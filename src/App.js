import React from "react";
import Products from "./products-array";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";

class App extends React.Component {
  // state = {  }

  render() {
    return (
      <div>
        <NavBar />
        <ProductCard />
      </div>
    );
  }
}

export default App;
