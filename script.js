/*frevent from reload the page when click button.*/
var form = document.getElementById("form");
function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);

let p = null;
number_of_click = 0;

function startCountdown() {
    number_of_click += 1;

    /*Hide audio controls, source, and autoplay attributes until countdonwn time's finish.*/
    document.querySelector('#audio').setAttribute("src", "");
    document.querySelector('#audio').removeAttribute("autoplay");
    document.querySelector('#audio').removeAttribute("controls");

    /**Show Timer icon */
    document.getElementById('icon').setAttribute("href", "https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/timer/default/48px.svg");

    var h = parseInt(document.querySelector('#hour').value);
    var m = parseInt(document.querySelector('#minute').value);
    var s = parseInt(document.querySelector('#sec').value);

    /**exeption */
    if (isNaN(h) && isNaN(m) && isNaN(s)) {
        alert("Time can't be NULL, please check again!");
        return;
    }

    /*Display two colons */
    let none_show1 = document.getElementById("none-display-1");
    let none_show2 = document.getElementById("none-display-2");
    none_show1.style.display = "inline-block";
    none_show2.style.display = "inline-block";

    /*Count total number of seconds */
    var seconds = 0;
    if (isNaN(h))
        seconds += 0;
    else
        seconds += parseInt(h) * 3600;
    if (isNaN(m))
        seconds += 0;
    else
        seconds += parseInt(m) * 60;
    if (isNaN(s))
        seconds += 0;
    else
        seconds += parseInt(s)

    /*Then print the time repeatedly every one second until it reaches zero.*/
    p = new Print(seconds);
    p.printTime();
}


class Print {
    seconds;

    constructor(seconds) {
        this.seconds = seconds;
    }

    printTime() {
        let t = document.querySelector('.timer');
        let s = this.seconds;

        /**setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval. */
        let timerId = setInterval(function () {
            /**When user click Start button more than twice, we stop this (previous) Interval and start another Interval */
            if (number_of_click == 2) {
                number_of_click -= 1;
                clearInterval(timerId) //To stop further calls, we should call clearInterval(timerId).
            }

            if (s == 0) {
                clearInterval(timerId);

                /*.., and then play the audio and show Timer Off icon*/
                document.querySelector('#audio').setAttribute("src", "https://github.com/zerefshadow/Portfolio-Kha/blob/main/musics/ghibli.mp3?raw=true");
                document.querySelector('#audio').setAttribute("autoplay", "");
                document.querySelector('#audio').setAttribute("controls", "");
                document.getElementById('icon').setAttribute("href", "https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/timer_off/default/48px.svg");
            }
            let tmp = s;
            let _h = t.querySelector('.hour').innerHTML = parseInt(tmp / 3600);
            tmp %= 3600;
            let _m = t.querySelector('.minute').innerHTML = parseInt(tmp / 60);
            let _s = t.querySelector('.second').innerHTML = (tmp %= 60);
            document.querySelector('#title').innerHTML = _h + "h" + _m + "m" + _s + "s";

            s--;
        }, 1000); //The delay before run, in milliseconds (1000 ms = 1 second), by default 0.
    }
}
