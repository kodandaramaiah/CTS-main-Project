import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";

class Home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.title} />
            <div className="ribbon">
              <span>*NEW*</span>
            </div>
            <span className="card-title"></span>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              <i className="material-icons">add</i>
            </span>
          </div>

          <div className="card-footer d-flex justify-content-between">
            <b className="align-self-center mb-0">{item.title}</b>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {item.price}
            </h5>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h3 className="center">
          <marquee>
            {" "}
            <em style={{ color: "red" }}> *New Arrival Books* </em>
          </marquee>
        </h3>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
