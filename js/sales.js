var  menu = document.getElementById('menu');
//var menuContent = document.getElementById('menuContent');
var loading = document.getElementById('loading');
var success = document.getElementById('success');

var failed = document.getElementById('failed');
var sendEmail = document.getElementById('send');
var sellLink = document.getElementById('sellLink');


console.log(window.innerHeight);





loading.style.display = 'none';
success.style.display = 'none';

failed.style.display = 'none';
//menuContent.style.display = 'none';
// menu.addEventListener('click', function(){
//     if(menuContent.style.display == 'none'){
//         menuContent.style.display = 'inline-flex';
//     }else if(menuContent.style.display == 'inline-flex'){
//         menuContent.style.display = 'none';
//     }
// });

function feading(name){
  const elem = document.getElementById(name);   
  let clarity = 0;
  elem.style.display = "inline-flex";
  elem.style.opacity = "1";
  
    
        setTimeout(function(){
            setInterval(function(){
                for(var i = 1; i >= 0.0; i = i - 0.1 ){
                elem.style.opacity = i;
                }
            },1000)
            },1000) 
     
      
    
 
}

function showLoading(){
    if(loading.style.display == 'none'){
        loading.style.display = 'inline-flex';
    }else if(loading.style.display == 'inline-flex'){
        loading.style.display = 'none';
    }
}
function showFailed(){
    if(failed.style.display == 'none'){
        failed.style.display = 'inline-flex';
    }else if(failed.style.display == 'inline-flex'){
        failed.style.display = 'none';
    }
}
function showSuccess(){
    success.style.display = 'inline-flex';
    
  
}


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   loading.style.display = 'inline-flex';
   success.style.display = 'none';
   failed.style.display = 'none';
   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_66y53lj';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      loading.style.display = 'none';
      showSuccess();
      feading('success');
    }, (err) => {
      btn.value = 'Send';
      loading.style.display = 'none';
      success.style.display = 'none';
      failed.style.display = 'inline-flex';
      feading('failed');
      //alert(JSON.stringify(err));
    });
});
