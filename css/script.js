document.getElementById('send-mail').addEventListener('click', function(){
    alert('Your E-mail address is sent.')
})
document.getElementById('send').addEventListener('click', function(){
    alert('Your information is sent.')
})


let Navigation=document.getElementById("Navigation");
let burgerIcon=document.getElementById("burgerbar");

burgerIcon.addEventListener('click', function() {
    Navigation.classList.toggle("active");
});