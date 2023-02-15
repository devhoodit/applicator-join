const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('left_fade_show')
        } else {
            entry.target.classList.remove('left_fade_show')
        }
    })
})

const animationElements = document.querySelectorAll('.left__hidden')
animationElements.forEach((el) => observer.observe(el))

var sec = 0
const max_sec = 4
const sec_href = ["title", "study", "project", "next", "last"]

const up_btn = document.querySelector('#up-btn')
const down_btn = document.querySelector('#down-btn')

var sclock = false
var keys = {37: 'up', 38: 'up', 39: 'down', 40: 'down', 32: 'down', 33: 'up', 34: 'down', 35: 'end', 36: 'start'};
 
function preventDefault(e) {
  e.preventDefault();
}
 
function preventDefaultForScrollKeys(e) {
    switch(keys[e.keyCode]) {
        case 'up':
            up()
            break
        case 'down':
            down()
            break
        case 'start':
            sec=0
            location.href = '#' + sec_href[sec]
            break
        case 'end':
            sec=max_sec
            location.href = '#' + sec_href[sec]
            break
    }
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
window.addEventListener('keydown', preventDefaultForScrollKeys, true);

function up() {
    if (sec > 0 && sclock == false) {
        sec -= 1
        location.href = '#' + sec_href[sec]
    } 
}

function down() {
    if (sec < max_sec && sclock == false) {
        sec += 1
        location.href = '#' + sec_href[sec]
    }
}

up_btn.addEventListener('click', (event) => {
    up()
})
down_btn.addEventListener('click', (event) => {
    down()
})

