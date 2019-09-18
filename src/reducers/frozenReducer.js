

// all reducers have two params:
// current statement, usually provide a default
// teh action object

const seedData =[
    {
        food:'pizza',
        quantity: 12,
    },
    {
        food: 'ice cream',
        quantity: 21,
    },
    
    {
        food: 'Tv Dinner',
        quantity: 210,
    },
    {
        food: 'veggies',
        quantity: 10,
    }

];

export default (state = seedData, action)=>{
    // console.log("frozen reducer is running!")
    if (action.type === "updateFrozen") {
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
    }else if (action.type === "addItem-Frozen") {
    let newState =[...state];
    const food = action.payload.food
    const quantity = action.payload.quantity
    newState.push({
      food,
      quantity
    })
    return newState
    }return state;
}