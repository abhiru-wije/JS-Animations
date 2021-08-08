document.querySelector('body').addEventListner('mousemove', eyeball);
function eyeball(){
    let eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye){
        let x = (eye.getBoundingClientRect().left) + (eye.clientwidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(Event.pageX - x, Event.pageY - y);
        let rot = (radian * (180/Math.PI) * -1) + 270;
        eye.style.transform = "rotate("+ rot + "deg)";
    }
})
