const seedData = [
  {
    food: "chicken",
    quantity: 80
  },
  {
    food: "steak",
    quantity:90
  },
  {
    food: "crab",
    quantity: 130
  },
  {
    food: "turkey",
    quantity: 45
  }
];
export default (state = seedData, action) => {
  if (action.type === "updateMeat") {
    let newState = [...state];
    if (action.payload.operation === "+") {
      newState[action.payload.indexToChange].quantity++;
    } else if (action.payload.operation === "-") {
      newState[action.payload.indexToChange].quantity--;
    }
    return newState;
  } else if (action.type === "clearInventory") {
    return [];
  } else if (action.type === "resetInventory"){
    return seedData;
  }else if (action.type === "addItem-Meat") {
    let newState =[...state];
    const food = action.payload.food
    const quantity = action.payload.quantity
    newState.push({
      food,
      quantity
    })
    return newState
  }return state;
};