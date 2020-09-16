import React from "react";

class ProductInfo extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <img src={this.props.prod.image} />
        <h3>Name: {this.props.prod.product}</h3>
        <span>Manufacturer: {this.props.prod.manufacturer}</span>
        <h4>Rating: {this.props.prod.rating}</h4>
        {/* category image rating */}
        <button onClick={() => this.props.upRating(this.props.prod.id)}>
          Like
        </button>
        <button onClick={() => this.props.downRating(this.props.prod.id)}>Dislike</button>
        <br />
      </div>
    );
  }
}

export default ProductInfo;
