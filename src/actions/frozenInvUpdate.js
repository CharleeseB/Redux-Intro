export default (operation, indexToChange)=>{
    return{
        type:"updateFrozen",
        payload: {
            operation,
            indexToChange
        }
    }
}