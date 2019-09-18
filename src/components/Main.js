import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import clearInventory from '../actions/clearInv';
import resetInventory from '../actions/ResetInv';

class Main extends Component {
  render() {
    const frozenQuantity = this.props.frozenData.reduce((a,b)=>a+b.quantity,0)
    const meatQuantity = this.props.meatData.reduce((a,b)=>a+b.quantity,0)
    const dairyQuantity = this.props.dairyData.reduce((a,b)=>a+b.quantity,0)


    console.log(frozenQuantity)
    const storeInventorArray =[
      ...this.props.frozenData,
      ...this.props.dairyData,
      ...this.props.meatData,
    ];
    
    let storeProducts = storeInventorArray.map((product, i)=>{
      return(
        <div key={i}>
          <h5>{product.food}:{product.quantity}</h5>
        </div>
      )
    })
    return(
      <div>
      <h2>Frozen Dept Total:{frozenQuantity}</h2>
      <h2>Dairy Dept Total:{dairyQuantity}</h2>
      <h2>Meat Dept Total:{meatQuantity}</h2>
        {storeProducts}
        <button onClick={this.props.clearInventory}>Clear All Inventory</button>
        <button onClick={this.props.resetInventory}>Reset All Inventory</button>
      </div>
    )
  }
}
function mapStateToProps(state) {
      return {
            frozenData: state.frozen,
            dairyData: state.dairy,
            meatData: state.meat
}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      clearInventory, resetInventory
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);

