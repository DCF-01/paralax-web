var source = document.querySelectorAll('.box-special');
var destination = document.querySelectorAll('.contain-1');
var destination_reverse = document.querySelectorAll('.box-wrapper');
var reference = document.querySelectorAll('.box-3');


// set bg height
const body = document.querySelector('.parallax').children;
console.log(body);
const bg = document.querySelector('.bg');


//copy height of one element to other
function setHeight(body, to){
    let height = 0;
    for(i = 1; i < body.length; i++){
        height += body[i].scrollHeight;
    }
    to.style.height = height + 'px';
}

document.addEventListener('load', setHeight(body, bg));




// console.log(destination_reverse);
// console.log(source);
// console.log(reference[0]);




// document.addEventListener('load', checkScreen_Append());

// window.addEventListener('resize', checkScreen_Append);


// function checkScreen_Append(){
//     var screen_W = window.innerWidth;
//     if(screen_W > 1250){
//         var i = 0;
//         destination.forEach(element => {
//             destination[i].appendChild(source[i]);
//             i++;
//         });
//     }
//     if(screen_W < 1250){
//         var i = 0;
//         var j = 1;
//         reference.forEach(element => {
//             destination_reverse[j].insertBefore(source[i], reference[i]);
//             j++;
//             i++;
            
//     });
// }}