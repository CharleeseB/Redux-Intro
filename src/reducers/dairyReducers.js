const seedData = [
  {
    food: "cheese",
    quantity: 120
  },
  {
    food: "milk",
    quantity: 37
  },
  {
    food: "yogurt",
    quantity: 13
  },
  {
    food: "keifer",
    quantity: 18,
  }
];
export default (state = seedData, action) => {
  if (action.type === "updateDairy") {
    let newState = [...state];
    if (action.payload.operation === "+") {
      newState[action.payload.indexToChange].quantity++;
    } else if (action.payload.operation === "-") {
      newState[action.payload.indexToChange].quantity--;
    }
    return newState;
  } else if (action.type === "clearInventory") {
    return [];
  } else if (action.type === "resetInventory") {
    return seedData;
  }else if (action.type === "addItem-Dairy") {
    let newState =[...state];
    const food = action.payload.food
    const quantity = action.payload.quantity
    newState.push({
      food,
      quantity
    })
    return newState
  }
        return state;
}    

