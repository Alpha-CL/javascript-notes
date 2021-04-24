let sliderPage = document.getElementsByClassName('sliderPage')[0],
    moveWidth = sliderPage.children[0].offsetWidth,
    num = sliderPage.children.length - 1,
    leftBtn = document.getElementsByClassName('leftBtn')[0],
    rightBtn = document.getElementsByClassName('rightBtn')[0],
    lock = true,
    index = 0,
    oSpanArray = document.getElementsByClassName('sliderIndex')[0].getElementsByTagName('span');


leftBtn.addEventListener('click', function () {

    clearTimeout(timer);

    autoMove('right->left');

}, false);


rightBtn.addEventListener('click', function () {

    clearTimeout(timer);

    autoMove('left->right');

}, false);


for (let i = 0; i < oSpanArray.length; i++) {

    (function (myIndex) {

        oSpanArray[i].addEventListener('click', function () {

            lock = false;

            clearTimeout(timer);

            index = myIndex;

            startMove(sliderPage, {left: -myIndex * moveWidth}, function () {

                lock = true;

                timer = setTimeout(autoMove, 1500);

                changeIndex(index);
            });

        }, false);

    }(i));
}


function autoMove(direction) {

    if (lock) {

        lock = false;

        if (!direction || direction === 'left->right') {

            index++;

            startMove(sliderPage, {left: sliderPage.offsetLeft - moveWidth}, function () {

                if (sliderPage.offsetLeft === -num * moveWidth) {

                    sliderPage.style.left = 0;

                    index = 0;
                }

                timer = setTimeout(autoMove, 1500);

                lock = true;

                changeIndex(index);
            });

        } else if (direction === 'right->left') {

            if (sliderPage.offsetLeft === 0) {

                sliderPage.style.left = -num * moveWidth + 'px';

                index = num;
            }

            index--;

            startMove(sliderPage, {left: sliderPage.offsetLeft + moveWidth}, function () {

                timer = setTimeout(autoMove, 1500);

                lock = true;

                changeIndex(index);
            });
        }
    }
}


function changeIndex(_index) {

    for (let i = 0; i < oSpanArray.length; i++) {

        oSpanArray[i].className = '';
    }

    oSpanArray[_index].className = 'active';
}


timer = setTimeout(autoMove, 1500);


// test

HTMLDivElement.prototype.createTurnPage = function () {


};