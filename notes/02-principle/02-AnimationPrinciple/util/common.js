/**
 * Elemental acceleration
 *
 * bufferMove(ele: elementObject; target: number): void;
 */

function bufferMove(element, target) {

    let iSpeed = null;

    clearInterval(timer);

    timer = setInterval(function () {

        iSpeed = (target - element.offsetLeft) / 7;

        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

        if (element.offsetLeft == target) {

            clearInterval(timer);

        } else {

            element.style.left = element.offsetLeft + iSpeed + 'px';
        }

    }, 30);
}


/**
 * addEvent
 *
 * addEvent(elem: HTMLElement; type: string, handle: EventListenerOrEventListenerObject): void;
 */

function addEvent(elem, type, handle) {

    if (elem.addEventListener) {                            // Chrome

        elem.addEventListener(type, handle, false);

    } else if (elem.attachEvent) {                          // IE

        elem.attachEvent('on' + type, function () {

            handle.call(elem);
        });

    } else {                                                // Set CSS Script

        elem['on + type'] = handle;
    }
}


/**
 * get element style compatible
 *
 * getStyle(ele: element, prop: string): CSSStyleDeclaration;
 */

function getStyle(elem, prop) {

    if (window.getComputedStyle) {

        return window.getComputedStyle(elem, null)[prop];

    } else {

        return elem.currentStyle[prop];
    }
}


/**
 *
 *
 *
 */

function startMove(ele, attrObj, callback) {

    clearInterval(ele.timer);

    let iSpeed = null,
        iCur = null;

    ele.timer = setInterval(function () {

        let bStop = true;

        for (var prop in attrObj) {

            if (prop == 'opacity') {

                iCur = parseFloat(getStyle(ele, prop)) * 100;

            } else {

                iCur = parseInt(getStyle(ele, prop));
            }

            iSpeed = (attrObj[prop] - iCur) / 7;

            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            if (prop == 'opacity') {

                ele.style.opacity = (iCur + iSpeed) / 100;

            } else {

                ele.style[prop] = iCur + iSpeed + 'px';

            }

            if (iCur != attrObj[prop]) {

                bStop = false;
            }
        }

        if (bStop) {

            clearInterval(ele.timer);

            typeof callback == 'function' && callback();
        }

    }, 30);
}













