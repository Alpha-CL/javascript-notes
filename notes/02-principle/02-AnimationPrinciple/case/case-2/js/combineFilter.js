function combineFilter(config) {

    return function (date) {

        for (let prop in config) {

            console.log(prop, config[prop], state[prop]);

            // date = config[prop](date, state[prop]);

            date = config[prop](date, store.getState(prop));
        }

        return date;
    };
}


let lastFilterArr = combineFilter({
    text: filterArrByText,
    sex: filterArrBySex
});