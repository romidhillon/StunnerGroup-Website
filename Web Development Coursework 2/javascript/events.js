// ------------------------------------------------------------------------------------------------------------------------- 
//      Stunner Group Fitness Newsletter Website

//      Assignment Title: Web Development Coursework 2
//      Submission Date: March 22, 2020
//      Filename: events.js
// ------------------------------------------------------------------------------------------------------------------------- 

//  The Javascript code in this file corresponds to the html code used for the eventtest.html file (events and exhibition webpage) 
//  In the last semester, i took a module named Introduction to Programming 1, and I created a bubble effect, where bubbles would move across a canvas. 
//  I created a canvas in HTML, and gave it an ID of mycanvas. 
//  The bubblecanvas variable is declared
//  The bubblecanvas element is targeted with the getElementByID command.
//  The context variable is set with the bubble.getContext('2d'). 
//  The bubble height and width has been set to the window width and height. 
const bubblecanvas = document.getElementById("mycanvas");
const ctx = bubblecanvas.getContext('2d'); 
bubblecanvas.width = window.innerWidth;
bubblecanvas.height = window.innerHeight;


let bubbleevent; 

// To get the current mouse position, an event listener has been created with the same methods taught in the course material, and has been used to get the current mouse position,  and works every time the user moves the mouse.

let mouse = { 

    x:null,
    y:null,
    radius: (bubblecanvas.height/2000)*(bubblecanvas.width/2000)

}

window.addEventListener('mousemove', 
function(event){ 
    mouse.x = event.x;
    mouse.y = event.y; 
}

);

//  A class for for the bubbles has been created, to fill the bubble array, so that individual bubbles  have randomised values.
//  I have used constructor functions and learnt how to use them effectively by looking at an example on w3 schools 
//  These examples can be found at the following link: [30] https://www.w3schools.com/JS/js_object_constructors.asp. 

class Bubble { 
    constructor(x,y,directionX,directionY,size,color) { 
        this.x=x;
        this.y=y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size; 
        this.color = color; 
    }

//  Individual bubbles are drawn and are repeated via the update function and for every frame of the animation.
//  The bubble screen position and mouse interaction is also updated on each frame.

    draw () {

        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*3,false);
        ctx.fillstyle = '';
        ctx.fill();
    }
    //  The check particle position is a technique learnt in the module Introduction to Programming 1.
    //  The current bubble position is checked, the mouse position is checked, and then the bubble moves accordingly, and then the draw method is called.
    //  As the bubbles bounces around the bubblecanvas, the purpose of the code is to check if the bubbles have reached the edge of the screen.
    //  After it is checked,  the direction is reversed through the directionX or directionY to make it animate in the opposite direction. 
    update () { 

         
        if(this.x>bubblecanvas.width || this.x<0) {
            this.directionX = -this.directionX;
        }
        if(this.y>bubblecanvas.width || this.y<0) {
            this.directionY = -this.directionY;
        }

        //  Collision detection has been used, which was also covered in the module Intro to Programming 1.
        //  To do this, i took the centre point of the mouse curser and the centre point of the bubble, and checked if the distance between the two centre points is less than a set distance. 
        //  Additional guidance was taken from:  https://code.tutsplus.com/tutorials/generating-a-particle-system-with-javascript--net-10668. 
        //  A deeper explanation of the remaining steps is given in the report.html file.

        let dx= mouse.x - this.x;
        let dy= mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if (distance<mouse.radius+this.size) {

            if(mousex.x<this.x && this.x<bubblecanvas.width - this.size*5) {

                this.x+=1;
            }

            if(mousex.x>this.x && this.x> this.size*5) {

                this.x-=1;
            }

            if(mousex.y<this.y && this.y<bubblecanvas.height - this.size*5) {

                this.y+=1;
            }


            if(mousex.y>this.y && this.y> this.size*5) {

                this.y-=1;
            }
        }
        //move bubble

        this.x+=this.directionX;
        this.y+=this.directionY;
        // draw bubble
        this.draw();
    }
}

 //A bubble array has been created 

function init () {

    bubbleevent = [];
    let numberOfBubbles = (bubblecanvas.height * bubblecanvas.width)/500;
    for (let i=0; i<numberOfBubbles;i++) {

        let size=(Math.random() *2) +1;
        let x = (Math.random() * ((innerWidth- size *2) - (size *2)) + size * 2);
        let y = (Math.random() * ((innerHeight- size *2) - (size *2)) + size * 2);
        let directionX = (Math.random() *2) - 1;
        let directionY = (Math.random() *2) - 1;
        let color = '';

        bubbleevent.push(new Bubble(x,y,directionX,directionY,size,color));
    }
}

// The animation is looped

function animate () {

    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);

    for(let i= 0; i<bubbleevent.length; i++) {

        bubbleevent[i].update();
    }

}

init();
animate();







