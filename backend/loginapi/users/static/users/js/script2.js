// START OF JI XUAN JAVASCRIPT
 // Rotates .button_box to swap between login and register
 var rotatebox = document.getElementById("rotatebox");

 function openLogin(){
     rotatebox.style.transform="rotateY(0deg)";
 }
 function openRegister(){
     rotatebox.style.transform="rotateY(-180deg)";
 }
 
 // Lottie animation disappears on page load
 let lottie_container = document.querySelector(".lottie_container");
 let lottie_loading = document.querySelector(".lottie_loading");
 
 window.addEventListener("load", function(){
     lottie_container.style.display = 'none';
     lottie_container.style.opacity="0";
     lottie_loading.style.display = "none";
     lottie_loading.style.opacity="0";
 })
 
 // Login fetch function
 async function login(){
     console.warn(username, password);
     let item = {username, password};
     let result = await fetch("http://127.0.0.1:8000/users/", {
         method: 'POST', 
         headers: {
             "Content-Type": "application/json",
             "Accept": 'application/json'
         },
         body:JSON.stringify(item)
     });
     result = await result.json();
     localStorage.setItem(JSON.stringify(result))
 }
 // END OF JI XUAN JAVASCRIPT