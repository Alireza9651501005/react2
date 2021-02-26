const initialState = {
    name1:'',
    name2:''
}

const Reducer = (state = initialState, action) => {
    if(action.type === 'ADD') {
        return {...state, name1: action.payload1, name2: action.payload2}
    } else {
        return state
    }
}
export default Reducer
