import React from "react";

class ProductForm extends React.Component {
  state = {};
  render() {
    // console.log(this.props);
    return (
      <div>
        {/* <form onSubmit={(e) => props.addPainting(e)}> */}
        <form onSubmit={(e) => this.props.addProduct(e)}>
          <input type="text" placeholder="Product" />
          <input type="text" placeholder="Image URL" />
          <input type="text" placeholder="Manufacturer" />
          <input type="number" placeholder="Rating" />
          <input type="submit" value="Add Product" />
        </form>
      </div>
    );
  }
}

export default ProductForm;
