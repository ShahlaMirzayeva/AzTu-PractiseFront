let allLi=document.querySelectorAll("ul li");

// console.log(allLi);
for (let i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener("click",function(){
     // console.log(this);
    let active_menu=document.querySelector(".active-menu");
     this.classList.add("active-menu");
     active_menu.classList.remove("active-menu");

     let active_content=document.querySelector(".active-content");
    let id=this.classList.item(0);
    
    document.getElementById(id).classList.add("active-content");
    active_content.classList.remove("active-content");


    });
    
}


















