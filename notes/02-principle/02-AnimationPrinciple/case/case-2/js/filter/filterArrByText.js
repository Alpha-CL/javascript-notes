function filterArrByText(date, text) {

    if (!text) {

        return date;

    } else {

        return date.filter(function (val, idx) {

            return val.name.indexOf(text) != -1;
        });
    }
}