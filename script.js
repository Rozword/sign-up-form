let submit = document.getElementById('sub');
const password = document.querySelector('#pass');
let section = document.querySelector('#divForm')
let form = document.querySelector('form');
let logIn = document.querySelector('#log');





submit.addEventListener('click', function(e){
    if (document.getElementById('confirmPass')){
        const confirmPassword = document.querySelector('#confirmPass');
        if(password.value !== confirmPassword.value){
            password.setCustomValidity("Passwords don\'t match");
            confirmPassword.setCustomValidity("Passwords don\'t match");
        }
    
    else if (password.value !== '') {
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");        
        section.children[0].style.width = '0px'
        section.children[0].style.height = '0px'
        section.children[0].style.fontSize = '0px'
        section.children[1].style.width = '0px'
        section.children[1].style.height = '0px'
        section.children[1].style.fontSize = '0px'        
        form.style.width= '0px';
        form.style.height = '0px';        
        let success = document.querySelector('#success');
        success.style.width = '100%';
        success.style.height = '15%';
        success.style.fontSize = '3.5rem'       
       }
    }

    else if (!document.getElementById('confirmPass')){
        if(form.checkValidity()){
        section.children[0].style.width = '0px'
        section.children[0].style.height = '0px'
        section.children[0].style.fontSize = '0px'
        form.style.width= '0px';
        form.style.height = '0px';         
        success.style.width = '100%';
        success.style.height = '15%';
        success.style.fontSize = '3.5rem' 
        success.textContent = 'You\'re logged in!'
    }   

}
});

logIn.addEventListener('click', function(e){   
    let tel = document.querySelector('#tel');
    let confirmPass = document.querySelector('#confirmPass');    
    let tLabel = document.querySelector('#tLabel')
    let confirmPassLabel = document.querySelector('#confirmPassLabel')    
    let legend = document.querySelector('legend')
    let required = document.querySelectorAll('abbr');    
    form.style.width= '100%';
    form.style.height = '100%';  
    section.removeChild(section.children[2]); 
    section.removeChild(section.children[1]);    
    tLabel.parentElement.removeChild(tLabel);
    confirmPassLabel.parentElement.removeChild(confirmPassLabel);  
    tel.parentElement.removeChild(tel);
    confirmPass.parentElement.removeChild(confirmPass);
    required.forEach(req =>{
        req.remove();
    },);
    legend.textContent = 'Let\'s log in!';
    let success = document.querySelector('#success');
    success.textContent = 'Let\'s log in!';
    submit.value = 'Log in!'
}, {once : true});



