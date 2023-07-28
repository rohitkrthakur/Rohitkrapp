// const cards = document.querySelectorAll('.card')

// const observer = new IntersectionObserver(entries =>{
//     entries.forEach(entry =>{
//         entry.target.classList.toggle('show',entry.isIntersecting)
//     })  
// }, {
//     threshold:.3,
// }
// )
// cards.forEach(card =>{
//     observer.observe(card)
// })

// projects box by js





function navGrow(){
    document.querySelector('nav').classList.add('Navgrow')
    // console.log('clicked')
    document.querySelector('.Navgrow').innerHTML = `<ul 
    
    class="responsiveNav"  
    <div id="kk">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>  
    <li> <a href="#skill"> Skill</a></li> 
    <li> <a href="#services"> Services</a></li> 
    <li> <a href="#projects"> Projects </a></li>
    <li> <a href="#contact">Contact</a></li> 
     </div>
    <div class="mobile-navbar-btn">
    <i class="uil uil-times cancleBtn " onclick="cencleButton()"></i>
      </div> 
      
   </ul>`

}
function cencleButton(){
    document.querySelector('nav').classList.remove('Navgrow')
    // console.log('cencle')

    document.querySelector('nav').innerHTML =`
    
    <ul class="name nav-name"><li><a href="">Rohit</a> </li>   
    </ul>
    <div class="mobile-navbar-btn responsive_menubar">
    <i class="uil uil-bars" id="menuBar" onclick="navGrow()"></i>
   
    
    </div> 
    `    

}
// email send system

const userName = document.getElementById('name').value
const userEmail = document.getElementById('email').value
const userMessage = document.getElementById('blog').value

  function handleClick(){
    console.log('clicked')
    // console.log(userMessage)
    if(userName === " "|| userEmail === " "|| userMessage===" "){
        alert("Please write your message!")
    }
    else{
        var templateParams = {
            to_name:'Rohit',
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('blog').value,
        }
        emailjs.send('service_9qq5she', 'template_xd8bucq', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert("Your respond has submitted successfully")
    }, function(error) {
       console.log('FAILED...', error);
    });
    emailjs.sendForm('service_9qq5she', 'template_xd8bucq', '#myForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    }
  }
 