function changeText(){
    let element = document.getElementById("A");
    if (element.value=="Login") 
        element.value = "Logout";
    else 
        element.value = "Login";
   }


function hideButton(x){
  x.style.display = 'none';
 }

 
function LikeButton (){
     alert("Ninja was Liked!");
 }