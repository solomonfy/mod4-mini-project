import React from "react";
import products from "./products-array";
import NavBar from "./NavBar";
import ProductInfo from "./ProductInfo";

class App extends React.Component {
  //   state = {};

  constructor() {
    super();
    this.state = {
      products,
    };
    console.log(products);
  }
  upRating = (prodId) => {
    // console.log("Clicked");
    let newProducts = this.state.products.map((product) => {
      if (product.id === prodId) {
        //
        product.rating += 1
      }
        return product
    });
    // debugger;
    this.setState({
      products: newProducts,
    });
  };

  
  downRating = (prodId) => {
    // console.log("Clicked");
    let newProducts = this.state.products.map((product) => {
      if (product.id === prodId) {
        //
        product.rating -= 1
      }
        return product
    });
    // debugger;
    this.setState({
      products: newProducts,
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        {this.state.products.map((prod) => (
          <ProductInfo prod={prod} upRating={this.upRating} downRating={this.downRating} />
        ))}
      </div>
    );
  }
}

export default App;
