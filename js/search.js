var searchButton = document.getElementById('searchButton');
var searchBar = document.getElementById('searchform');

searchBar.addEventListener('mouseleave', function(){
    searchBar.style.transition = '2s';

});
searchBar.addEventListener('mouseenter', function(){
    searchBar.style.transition = '2s';


});


// searchButton.addEventListener('click', function(){
    
//     if(searchBar.value == ""){
//         alert("Type what is to be searched !!");

//     }
//     else if(searchBar.value != ""){
//       //  alert(searchBar.value);
//       var url =  searchBar.value;
//         var http = new XMLHttpRequest();
//         var dis = document.getElementById('responseArea');
//         loading.style.display = 'inline-flex';
//         success.style.display = 'none';
//         failed.style.display = 'none';
//         loading.style.display = 'none';
      
      
//         http.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 alert('found');
//                 showSuccess();
//                 feading('success');
//                 dis.innerHTML =
//                 this.responseText;

//            }else{
//                 loading.style.display = 'none';
//                 success.style.display = 'none';
//                 failed.style.display = 'inline-flex';
//                 feading('failed');
//            }
//         };
        
//         http.open('GET', url, true);
//         http.send();
        
   
//     }
// });