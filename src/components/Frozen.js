import React, { Component } from "react";
import { connect } from "react-redux";
import updateFrozen from "../actions/frozenInvUpdate";
import { bindActionCreators } from 'redux';
import AddItem from "./addItems";
class Frozen extends Component {
  componentDidMount(){
  // this.props.updateFrozen([]);
}
changeQuantity= (operation, indexToChange)=>{
  // console.log(operation,indexToChange)
  this.props.updateFrozen(operation,indexToChange)
}
  render() {
    let frozenData = this.props.frozenData.map((frozen, i) => {
      return (
        <div key={i}>
            <li>{frozen.food}: {frozen.quantity}</li>
            <input className="add-button" type="button" onClick={()=>{this.changeQuantity('+',i)}} value="+" />
            <input className="add-button" type="button" onClick={()=>{this.changeQuantity('-',i)}} value="-" />
        </div>
      );
    });
    return (
      <div>
        <AddItem dept="Frozen" />
        {frozenData}
      </div>
    );
  }
}
      function mapStateToProps(state) {
      return {
            frozenData: state.frozen
        }

  
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    updateFrozen: updateFrozen
  }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Frozen);





