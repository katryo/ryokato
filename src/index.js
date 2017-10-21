import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import changeMood from './change-mood';
import Ocean from './ocean.jpg';

function component() {
    const element = document.createElement('div');

    const btn = document.getElementById('js-btn-change-mood');

    const bg = document.getElementById('js-bg');
    const main = document.getElementById('js-main');

    const setNormalMode = function() {
        bg.style.opacity = '1';
        main.style.color = 'black';
        main.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        btn.onclick = setOceanMode;
    }

    const doAndWait = function(fun) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(fun());
            }, 200);
        })
    }

    const decreaseOpacity = function(fun) {
        doAndWait(function () { bg.style.opacity = '0.9'})
            .then(doAndWait(function () {
                bg.style.opacity = '0.8';
            }))
            .then(doAndWait(function () {
                bg.style.opacity = '0.7';
            }))
            .then(doAndWait(function () {
                bg.style.opacity = '0.4';
            }))
            .then(doAndWait(function () {
                bg.style.opacity = '0.2';
            }))
            .then(fun());
    }

    const setOceanMode = function() {

        const time = window.performance.now();

        window.requestAnimationFrame(function fade)

            decreaseOpacity(function () {
                main.style.color = 'white';
                main.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                btn.onclick = setNormalMode;
            }
        );
    }

    btn.onclick = setOceanMode;

    document.body.setAttribute('background', Ocean);
    document.body.style.backgroundSize = "cover";
    return element;
}

document.body.appendChild(component());