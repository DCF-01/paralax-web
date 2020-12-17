
function navToggle (x){
    const height = document.getElementById('myNav').clientHeight;
    
    let toggle = x.classList;
    
    if(toggle.contains('change')) {
        document.getElementById('myNav').style.height = '0%';
        x.classList.toggle('change');
    }

    else {
        document.getElementById('myNav').style.height = '100%';
        x.classList.toggle('change');
    }
}







// Animations with @keyframes (css)

const arr = [];
const arr_2 = [];


const ul_ignore = document.querySelector('footer');
const ul_ignore_2 = document.querySelector('.footer-links');
const vertical_line = document.querySelector('.vertical-line');
const bg_img = document.querySelector('.background-img');
const image = document.querySelector('.image');


var all = document.getElementsByTagName('*');

for (var i=0, max=all.length; i < max; i++) {
    if(all[i].nodeName === 'H2') {
        arr.push(all[i]);
    }
    if(all[i].nodeName === 'P') {
        arr.push(all[i]);
    }
    if((all[i].nodeName === 'A')&&(all[i].parentNode.parentNode.parentNode !== ul_ignore_2)&&(all[i].parentNode.parentNode !== ul_ignore)) {
        arr.push(all[i]);
    }
    if(all[i].className === 'line') {
        arr.push(all[i]);
    }
    if(all[i].className === 'top-decoration') {
        arr.push(all[i]);
    }
    if(all[i].className === 'grey-line') {
        arr.push(all[i]);
    }
    if((all[i].nodeName === 'UL')&&(all[i].parentNode !== ul_ignore_2)&&(all[i].parentNode.parentNode !== ul_ignore)){
        arr.push(all[i]);
    }
    if(all[i].className === 'vertical-line'){
        arr.push(all[i]);
    }
    if(all[i].className === 'background-img'){
        arr.push(all[i]);
    }
    if(all[i].className === 'image'){
        arr.push(all[i]);
    }
    
}

        observer1 = new IntersectionObserver((entries) => {
            var count = 0;
            entries.forEach(entry => {
                if(entry.intersectionRatio > 0) {
                    count = 1;
                    entry.target.style.animation = 'anim1 0.8s forwards ease-out';
                    entry.target.style.opacity = '1';
                }
                
            });
        })

      

    
        arr.forEach(element => {
            observer1.observe(element);
        });


  
// MOVE LOGO WITH MOUSE

const el = document.querySelector(".background");


el.addEventListener("mousemove", (e) => {
    const x = -e.offsetX * 0.025;
    const y = -e.offsetY * 0.025;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});


