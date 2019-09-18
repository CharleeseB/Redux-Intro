import React, { Component } from "react";
import { connect } from 'react-redux';
import updateMeat from "../actions/meatInvUpdate";
import { bindActionCreators } from "redux";
import AddItem from '../actions/addItemAction'


class Meat extends Component {
  componentDidMount() {
  }
  changeQuantity = (operation, indexToChange) => {
    this.props.updateMeat(operation, indexToChange);
  };

  render() {
    let meatData = this.props.meatData.map((meat, i) => {
      return (
        <div key={i}>
          <li>
            {meat.food}: {meat.quantity}
          </li>
          <input
            className="add-button"
            type="button"
            onClick={() => {
              this.changeQuantity("+", i);
            }}
            value="+"
          />
          <input
            className="add-button"
            type="button"
            onClick={() => {
              this.changeQuantity("-", i);
            }}
            value="-"
          />
        </div>
      );
    });
    return <div><AddItem dept="Meat" />{meatData}</div>;
  }
}
      function mapStateToProps(state) {
      return {
            meatData: state.meat
        }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateMeat: updateMeat
    },
    dispatch
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(Meat);
