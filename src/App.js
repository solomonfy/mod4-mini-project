import React from "react";
import products from "./products-array";
import NavBar from "./NavBar";
import ProductInfo from "./ProductInfo";
import ProductForm from "./ProductForm";

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
        product.rating += 1;
      }
      return product;
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
        product.rating -= 1;
      }
      return product;
    });
    // debugger;
    this.setState({
      products: newProducts,
    });
  };

  addProduct = (e) => {
    // debugger;
    e.preventDefault();
    let product = e.target[0].value;
    let image = e.target[1].value;
    let manufacturer = e.target[2].value;
    let rating = e.target[3].value;

    let newProduct = {
      product: product,
      image: image,
      manufacturer: manufacturer,
      rating: rating,
    };
    this.setState({
      products: [newProduct, ...this.state.products],
    });
    e.target.reset();
  };

  render() {
    return (
      <div>
        <NavBar />
        <ProductForm addProduct={this.addProduct} />
        {this.state.products.map((prod) => (
          <ProductInfo
            prod={prod}
            upRating={this.upRating}
            downRating={this.downRating}
          />
        ))}
      </div>
    );
  }
}

export default App;
