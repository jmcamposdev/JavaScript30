const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

//Elementos a Cambiar por CSS
const clock = document.getElementsByClassName("clock")[0];
const body = document.getElementsByClassName("body")[0];
const styletag = document.createElement("style");


setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    });

function checked() {
    let checkbox = document.querySelector('#checkbox');
    checkbox.addEventListener('click',function click(){
        if (checkbox.checked == true) {
            clock.style.backgroundImage = "url(img/clock.png)";
            clock.style.border = "15px solid #091921";
            clock.style.BoxShadow = "0 -15px 15px rgb(255 255 255 / 5%), inset 0 -15px 15px rgb(255 255 255 / 5%), 0 15px 15px rgb(0 0 0 / 30%), inset 0 15px 15px rgb(0 0 0 / 30%)";
            body.style.backgroundColor = "#091921";

            styletag.innerHTML = ".hr:before{background-color: #ff105e}.mn:before{background-color: #fff}.sc:before{background-color:#4d91fc}";
            document.head.insertAdjacentElement('beforeend', styletag);

        } else {
            clock.style.backgroundImage = "url(img/clocklight.jpg)";
            clock.style.border = "15px solid #FFF";
            clock.style.boxShadow = "0 -15px 15px rgb(255 255 255 / 5%), inset 0 -15px 15px rgb(255 255 255 / 5%), 0 15px 15px rgb(0 0 0 / 30%), inset 0 1px 15px rgb(0 0 0 / 30%)"
            body.style.backgroundColor = "#68A3FF";

            styletag.innerHTML = "";
            document.head.insertAdjacentElement('beforeend', styletag);
        }
    })
}

checked();