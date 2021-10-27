document.getElementById('send-mail').addEventListener('click', function(){
    alert('Your E-mail address is sent.')
})
document.getElementById('send').addEventListener('click', function(){
    alert('Your information is sent.')
})
document.getElementById('send-email').addEventListener('click', function(){
    alert('Your E-mail address is sent.')
})

let Navigation=document.getElementById('NavigationID');
let burgerIcon=document.getElementById('burgerIcon');

burgerIcon.addEventListener('click', function() {
  Navigation.classList.toggle('active');
});
