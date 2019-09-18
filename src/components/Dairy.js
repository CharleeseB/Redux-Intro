import React, { Component } from "react";
import { connect } from "react-redux";
import updateDairy from "../actions/dairyInvUpdate";
import { bindActionCreators } from "redux";
import AddItem from "./addItems";


class Dairy extends Component {
  componentDidMount() {}
  changeQuantity = (operation, indexToChange) => {
    this.props.updateDairy(operation, indexToChange);
  };

  render() {
    let dairyData = this.props.dairyData.map((dairy, i) => {
      return (
        <div key={i}>
          <h1>
            <li>
              {dairy.food}: {dairy.quantity}
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
          </h1>
        </div>
      );
    });
    return <div><AddItem dept="Dairy" />{dairyData}</div>;
  }
}
function mapStateToProps(state) {
  return {
    dairyData: state.dairy
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateDairy: updateDairy
    },
    dispatch
  );
}
export default connect(mapStateToProps,mapDispatchToProps)(Dairy);
