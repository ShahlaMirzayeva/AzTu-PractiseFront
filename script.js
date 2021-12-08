//task 1

// let main=document.querySelector(".main");
// let move=document.querySelector(".move");

// let left_move=0;
// let top_move=0;

// let main_width=main.offsetWidth;
// let main_height=main.offsetHeight;
// let move_width=move.offsetWidth;
// let move_height=move.offsetHeight;

// document.addEventListener("keydown",function(event){
  
// if(event.key=="ArrowUp"&&top_move>0){
//     top_move-=10;
// }
// if(event.key=="ArrowLeft"&&left_move>0){
//     left_move-=10;
// }
// if(event.key=="ArrowRight"&&main_width-move_width>left_move){
//     left_move+=10;
// }
// if(event.key=="ArrowDown"&& main_height-move_height>top_move){
//    top_move+=10;
// }
// move.style.top=top_move+"px";
// move.style.left=left_move+"px";
// });

// document.addEventListener("click",function(e){
// console.log(e.offsetY);
// })




//task2
let image =document.getElementById("image")
let imagecontainer=document.getElementById("imagecontainer")

image.addEventListener("click", function(event)
{
let circle =document.createElement("div");
circle.classList.add("style");
circle.style.position='absolute';
circle.style.top=event.offsetY+'px'
circle.style.left=event.offsetX+'px'
imagecontainer.appendChild(circle)

})