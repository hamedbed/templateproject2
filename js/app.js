// const navBtn=document.getElementById("nav-btn");
// const navbar=document.getElementById("navbar");
// const navClose=document.getElementById("nav-close");

// navBtn.addEventListener("click",()=>{
//     navbar.classList.add("showNav");
// });

// navClose.addEventListener("click", ()=>{
//     navbar.classList.remove("showNav");
// });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge:right});
  });




  // console.log(1);
  // new Promise(
  //   function(resolve, reject){
  //     setTimeout(function(){
  //       console.log(2);
  //       resolve("ok")
        
  //     }, 2000);
  //   }
  //   ).then(
  //     function(response){
  //       console.log(response);
  //       console.log(3);
  //     }
  //   ).catch(
  //     function(error){
  //       console.log(error);
  //     }
  //   )



  fetch('https://jsonplaceholder.typicode.com/posts/users')
  .then((response) => response.json())
  .then((json) => console.log(json));

  
  