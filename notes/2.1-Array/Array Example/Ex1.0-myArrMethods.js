///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var personArr = [
    {name: 'alpha', scr: './src/img.1.png', des: 'hello world', sex: 'm'},
    {name: 'beta', scr: './src/img.2.png', des: 'hello world', sex: 'f'},
    {name: 'omega', scr: './src/img.3.png', des: 'hello world', sex: 'm'},
    {name: 'game', scr: './src/img.4.png', des: 'hello world', sex: 'm'},
];


// personArr.forEach(function (value, index, array) {
//
//     this[index].className = value.name;
//
// }, document.getElementsByTagName('li'));


Array.prototype.myForEach = function (fn) {

    let _arr = this,
        len = _arr.length,
        param2 = arguments[1] || window;

    for (let i = o; i < len; i++) {

        fn.apply(param2, [_arr[i], i, _arr]);
    }
};


//-------------------------------------------------------------------------------------------------------------------//


Array.prototype.myFilter = function (fn) {

    let _arr = this,
        len = arr.length,
        param2 = arguments[1] || window,
        newArr = [];

    for (let i = 0; i < len; i++) {

        _arr.apply(param2, [_arr[i], i, _arr]) ? newArr.push(arr[i]) : '';
    }
};


//-------------------------------------------------------------------------------------------------------------------//


Array.prototype.myMap = function (fn) {

    let _arr = this,
        len = _arr.length,
        param2 = arguments[1],
        newArr = [];

    for (let i = 0; i < len; i++) {

        newArr.push(deepClone(), _arr.apply(param2, [_arr[i], i, _arr]));
    }
};


//-------------------------------------------------------------------------------------------------------------------//


Array.prototype.myEvery = function (fn) {

    let _arr = this,
        len = _arr.length,
        param2 = arguments[1] || window,
        flag = true;

    for (let i = 0; i < len; i++) {

        if (!fn.apply(param2, [_arr[i], i, _arr])) {

            flag = false;
            break;
        }
    }

    return flag;
};


// let arr = [11, 12, 13, 14];
//
// console.log(arr.myEvery(function (val, idx, arr) {
//
//     return val > 10;
// }));


//-------------------------------------------------------------------------------------------------------------------//


Array.prototype.mySome = function (fn) {

    let _arr = this,
        len = _arr.length,
        param2 = arguments[1] || window,
        flag = false;

    for (let i = 0; i < len; i++) {

        if (fn.apply(param2, [_arr[i], i, _arr])) {

            flag = true;
            break;
        }
    }

    return flag;
};

// console.log(arr.mySome(function (val, idx, arr) {
//
//     return val > 13;
// }));


//-------------------------------------------------------------------------------------------------------------------//


Array.prototype.myReduce = function (fn, initial) {

    let _arr = this,
        len = this.length,
        param2 = arguments[2];

    for (let i = 0; i < len; i++) {

        // initial: previouValue;
        // arr[i]: currentValue;

        initial = fn.apply(param2, [initial, _arr[i], i, _arr]);
    }

    return initial;
};


// let result = arr.myReduce(function (pre, val, idx, arr) {
//
//     console.log(pre, val, idx, arr);
//
//     return pre + idx;
//
// }, 40);
//
// console.log(result);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


let cookit = 'BAIDU_SSP_lcr=https://www.baidu.com/link?url1ruc-2sIaJz6XSpSiR3s3lCH4i5nFqyF1uYbiko3pLwRYAJMFAI02GR5yqt4RX7Qg9UWMpmSzwgS1ClBFL5j0_&wd&eqid8c7b424300205c35000000065e3afedf; uuid_tt_dd=10_7944382460-1577017541798-558743; dc_session_id=10_1577017541798.848728; Hm_ct_6bcd52f51e9b3dce32bec4a3997715ac=6525*1*10_7944382460-1577017541798-558743; __yadk_uid=WeJzaIrlmJ7AIO7dgNQyCzML9Aseri3O; Hm_ct_e5ef47b9f471504959267fd614d579cd=6525*1*10_7944382460-1577017541798-558743; Hm_lvt_e5ef47b9f471504959267fd614d579cd=1577198650,1578536764; searchHistoryArray=%255B%2522webstorm%2522%252C%2522webstrom%2520%25E6%25BF%2580%25E6%25B4%25BB%25E7%25A0%2581%2522%252C%2522webstrom%2522%255D; TY_SESSION_ID=118302ad-3646-4f4c-b7a6-cd26c77a2a1b; dc_tos=q58p9k; Hm_lvt_6bcd52f51e9b3dce32bec4a3997715ac=1579364619,1579364621,1579424883,1580924649; Hm_lpvt_6bcd52f51e9b3dce32bec4a3997715ac=1580924649; c-login-auto=27; announcement=%257B%2522isLogin%2522%253Afalse%252C%2522announcementUrl%2522%253A%2522https%253A%252F%252Fblog.csdn.net%252Fblogdevteam%252Farticle%252Fdetails%252F103603408%2522%252C%2522announcementCount%2522%253A0%252C%2522announcementExpire%2522%253A3600000%257D; __gads=ID=935d54e3439f29c7:T=1580924650:S=ALNI_MaY2WkbD729ctEyqKh-7hGRZbiDaQ';

function parseCookie(str) {

    let arrCookie = str.split('; '),
        cookieObj = {};

    arrCookie.myReduce(function (pre, val, idx, arr) {

        let curVal = val.split('=');

        cookieObj[curVal[0]] = curVal[1];

        return pre;

    }, cookieObj);

    return cookieObj;
}

console.log(parseCookie(cookit));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
