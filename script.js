/*frevent from reload the page when click button.*/
var form = document.getElementById("form");
function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);

function startCountdown() {
    /*Hide audio controls, source, and autoplay attributes until countdonwn time's finish.*/
    document.querySelector('#audio').setAttribute("src", "");
    document.querySelector('#audio').removeAttribute("autoplay");
    document.querySelector('#audio').removeAttribute("controls");

    /*Display two colons */
    let none_show1 = document.getElementById("none-display-1");
    let none_show2 = document.getElementById("none-display-2");
    none_show1.style.display = "inline-block";
    none_show2.style.display = "inline-block";

    /*Count total number of seconds */
    var h = parseInt(document.querySelector('#hour').value);
    var m = parseInt(document.querySelector('#minute').value);
    var s = parseInt(document.querySelector('#sec').value);
    var seconds = 0;
    if (isNaN(h))
        seconds += 0;
    else
        seconds += parseInt(h) * 3600;
    if (isNaN(m))
        seconds += 0;
    else
        seconds += parseInt(m) * 60;
    seconds += parseInt(s)
    printTime(seconds);
}

let t = document.querySelector('.timer');
function printTime(s) {
    /**setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval. */
    let timerId = setInterval(function () {
        let tmp = s;
        let _h = t.querySelector('.hour').innerHTML = parseInt(tmp / 3600);
        tmp %= 3600;
        let _m = t.querySelector('.minute').innerHTML = parseInt(tmp / 60);
        let _s = t.querySelector('.second').innerHTML = (tmp %= 60);
        document.querySelector('#title').innerHTML = _h + "h" + _m + "m" + _s + "s";

        if (s == 0) {
            clearInterval(timerId); //To stop further calls, we should call clearInterval(timerId).
            /*.., and then play the audio */
            document.querySelector('#audio').setAttribute("src", "https://github.com/zerefshadow/Portfolio-Kha/blob/main/musics/ghibli.mp3?raw=true");
            document.querySelector('#audio').setAttribute("autoplay", "");
            document.querySelector('#audio').setAttribute("controls", "");
        }
        s--;
    }, 1000); //The delay before run, in milliseconds (1000 ms = 1 second), by default 0.
}