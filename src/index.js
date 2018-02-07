import { createStore, combineReducers } from 'redux'
require('file-loader!./index.html')

var root = combineReducers({counter: counter, greeting: greeting})

function counter(state = 0, action){
    switch (action.type) {
    case 'INCREMENT':
        return state + 1
    case 'DECREMENT':
        return state - 1
    default:
        return state
    }
}

function greeting(state = "", action){
    switch (action.type) {
    case 'HELLO':
        return "HI"
    case 'BYE':
        return "BYE"
    default:
        return state
    }
}

let store = createStore(root)

store.subscribe(() => document.querySelector("#counter").innerHTML = store.getState().counter)
store.subscribe(() => document.querySelector("#greet").innerHTML = store.getState().greeting)

document.querySelector("#hi").onclick = () => {
    store.dispatch({type: "HELLO"})
};

document.querySelector("#bye").onclick = () => {
    store.dispatch({type: "BYE"})
};

document.querySelector("#inc").onclick = () => {
    store.dispatch({type: "INCREMENT"})
};

document.querySelector("#dec").onclick = () => {
    store.dispatch({type: "DECREMENT"})
};
