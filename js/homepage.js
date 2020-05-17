var i = 0;
var textIndex = 1;
var textIds = ["typeText", "typeText2", "typeText3"];
var texts = ['<Hi! I am Shreyas />', 'A Computer Science major at BITS Goa', 'I am passionate about coding, and love working on mobile apps']
textId = textIds[0];
var speed = 80;
var txt = texts[0];
var blink = 0;


var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
//		console.log('Element has just become visible in screen');
        document.getElementById(entries[0].target.id + "-navitem").classList.add("selected-navitem");
    else
        document.getElementById(entries[0].target.id + "-navitem").classList.remove("selected-navitem");
}, { threshold: [0.3] });

observer.observe(document.querySelector("#home"))
observer.observe(document.querySelector("#projects"));
observer.observe(document.querySelector("#elearningcourses"));
observer.observe(document.querySelector("#about"));
observer.observe(document.querySelector("#connect"));


typeWriter();


function typeWriter() {
    if (i < txt.length) {
        document.getElementById(textId).innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        return;
    }
    
    if (i === txt.length) {
        if (textIndex != 3) {
            speed = 50;
            i = 0;
            textId = textIds[textIndex];
            txt = texts[textIndex++];
            typeWriter();
        }
        else
            blinkCursor();
    }
}

function blinkCursor() {
    if (blink)
        document.getElementById(textId).innerHTML += '_';
    
    blink = (blink + 1) % 2;
//    setTimeout(blinkCursor, speed);
}
