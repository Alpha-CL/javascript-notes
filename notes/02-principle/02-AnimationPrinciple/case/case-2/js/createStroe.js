function createStore(initialState) {

    let state = initialState || {},
        list = [];

    function getState(type) {

        return state[type];
    }

    function dispatch(action) {

        state[action.type] = action.value;

        list.forEach(function (value, index, array) {

            value();
        });
    }
    
    function subscribe(fn) {

        list.push(fn);
    }

    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe
    };
}

let store = createStore(state = {
    text: '',
    sex: 'a'
});




