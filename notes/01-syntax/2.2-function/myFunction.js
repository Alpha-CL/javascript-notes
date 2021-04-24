let myFunction = {

    isOdd: function (num) {

        return num % 2 !== 0;
    },

    isPrime: function (num) {

        if (num < 2) {

            return false;
        }

        for (let i = 2; i < num; i++) {

            if (num % i === 0) {

                return false;
            }
        }

        return true;
    },

    sumOfArray: function (arr) {

        return arr.reduce(function (pre, value) {

            return pre + value;
        });
    },

    maxOfArray: function (arr) {

        return arr.reduce(function (total, value) {

            return total > value ? total : value;
        });
    },

    minOfArray: function (arr) {

        return arr.reduceRight(function (total, value) {

            return total < value ? total : value;
        });
    },

    hasEmptyInArray: function (arr) {

        for (let i = 0; i < arr.length; i++) {

            if (!arr[i]) {

                return false;
            }
        }

        return true;
    },

    isLeap: function (year) {

        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },

    getDays: function (year, month) {

        if (month === 2) {

            return myFunction.isLeap(year) ? 29 : 28;

        } else if (month < 8 && myFunction.isOdd(month) || month >= 8 && !myFunction.isOdd(month)) {

            return 31;

        } else {

            return 30;
        }
    },

    getTopFreqInArray: function (arr) {

        let record = {};

        for (let i = 0; i < arr.length; i++) {

            if (record[arr[i]]) {

                record[arr[i]]++;

            } else {

                record[arr[i]] = 1;
            }
        }

        let result;

        for (let index in record) {

            if (!result || record[index].freq < result.number) {

                result = {

                    number: +index,
                    freq: record[index]
                }
            }
        }

        return result;
    },

    goldBach: function (num) {

        if (isNaN(num) || num < 3) {

            return console.log('Please enter a legal number');
        }

        for (let i = 2; i < num - 2; i++) {

            let j = num - i;

            if (myFunction.isPrime(i) && myFunction.isPrime(j)) {

                return `${num} = ${i} + ${j}`;
            }
        }
    },

    getDaysOfEveMonth: function (year) {

        if (isNaN(num) || num < 1990) {

            return console.log('Please enter a legal number');
        }

        for (let i = 1; i < 13; i++) {

            console.log(`${year}年${i}有${myFunction.getDays(year, i)}`);
        }
    },

    mySort: function (arr, compare) {

        if (!compare) {

            compare = function (a, b) {

                if (a - b) {

                    return 1;

                } else if (a === b) {

                    return 0;

                } else {

                    return -1;
                }
            };
        }

        for (let i = 0; i < arr.length; i++) {

            for (let j = 0; j < arr.length - i; j++) {

                if ((compare(arr[i], arr[i + j]) > 0)) {

                    let temp = arr[i];

                    arr[i] = arr[i + j];

                    arr[i + j] = temp;
                }
            }
        }

        return arr;
    },

    myFilter: function (arr, callback) {

        let newArr = [];

        for (let i = 0; i < arr.length; i++) {

            if (callback(arr[i], i)) {

                newArr.push(arr[i]);
            }
        }

        return newArr;
    },

    myFind: function (arr, callback) {

        for (let i = 0; i < arr.length; i++) {

            if (callback(arr[i], i)) {

                return arr[i];
            }
        }
    },

    myCount: function (arr, callback) {

        let newArr = [];

        for (let i = 0; i < arr.length; i++) {

            if (callback(arr[i], i)) {

                newArr.push(arr[i]);
            }
        }

        return newArr.length;
    }
};































