import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import changeMood from './change-mood';

function component() {
    const element = document.createElement('div');
    const btn = document.getElementById('js-btn-change-mood');
    btn.onclick = changeMood;

    return element;
}

document.body.appendChild(component());