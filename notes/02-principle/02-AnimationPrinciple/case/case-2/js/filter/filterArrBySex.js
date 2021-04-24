function filterArrBySex(date, sex) {

    if (sex == 'a') {

        return date;

    } else {

        return date.filter(function (val, idx, arr) {

            return val.sex == sex;
        });
    }
}