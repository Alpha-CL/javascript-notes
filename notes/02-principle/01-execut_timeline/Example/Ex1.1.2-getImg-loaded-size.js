let imgOut = document.querySelector('img');

imgOut.onload = function () {

    console.log(this.width, this.height);

};


function loadScript(url, callback) {

    var script = document.createElement('script');

    script.type = "text/javascript";

    if(script.readyState) {

        script.onreadystatechange = function () {

            if(script.readyState === "complete" || script.readyState === "loaded") {

                tools[callback]();
            }
        }

    } else {

        script.onload = function () {

            tools[callback]();
        }
    }

    script.src = url;
}
