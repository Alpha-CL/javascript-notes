let personArr = [
    {name: '韩跳琪', src: 'img/avator1.jpg', des: '王者荣耀-No1', sex: 'm'},
    {name: '安琪忠', src: 'img/avator2.jpg', des: '王者荣耀-No2', sex: 'f'},
    {name: '黄忠文', src: 'img/avator3.jpg', des: '王者荣耀-No3', sex: 'm'},
    {name: '貂美姬', src: 'img/avator4.jpg', des: '王者荣耀-No4', sex: 'f'},
    {name: '程咬忠', src: 'img/avator5.jpg', des: '王者荣耀-No5', sex: 'm'},
    {name: '蔡文姬', src: 'img/avator6.jpg', des: '王者荣耀-No6', sex: 'f'}
];


// initial variable
let oWrao = document.getElementsByClassName('wrap'),
    oUl = document.getElementsByTagName('ul')[0],
    oInput = document.getElementsByTagName('input')[0],
    oBtnArr = [].slice.call(document.getElementsByClassName('btn'), 0),
    lastActiveBtn = oBtnArr[2];


let state = {
    text: '',
    sex: 'a'
};


function ReaderPage(date) {

    let htmlStr = '';
    oUl.innerHTML = '';

    date.forEach(function (val, idx, arr) {

        htmlStr = htmlStr + '<li class=\"opt\">' + '<img src=' + val.src + ' class=\"avatar\">' + '<p' + ' class=\"name\">' + val.name + '</p>' + '<p class=\"des\">' + val.des + '</p>' + '</li>';
    });

    oUl.innerHTML = htmlStr;
}

ReaderPage(personArr);


oInput.oninput = function () {

    state.text = this.value;

    // ReaderPage(filterArrByText(personArr, this.value));

    store.dispatch( {
        type: 'text',
        value: this.value
    });

    // ReaderPage(lastFilterArr(personArr));
};


oBtnArr.forEach(function (val, idx, arr) {

    val.onclick = function () {

        changeActive(this);

        store.dispatch({type: 'sex', value: this.getAttribute('sex')});

        // state.sex = this.getAttribute('sex');

        // ReaderPage(filterArrBySex(personArr, this.getAttribute('sex')));

        // ReaderPage(lastFilterArr(personArr));
    };
});


function changeActive(curActiveBtn) {

    curActiveBtn.className = 'btn active';

    lastActiveBtn.className = 'btn';

    lastActiveBtn = curActiveBtn;
}


store.subscribe(function () {

    ReaderPage(lastFilterArr(personArr));
});




