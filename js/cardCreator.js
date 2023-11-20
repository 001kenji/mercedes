var showCase  = document.getElementById('showcase');
var Cartshowcase = document.getElementById('Cartshowcase');
var sales = document.getElementById('Sales');
sales.addEventListener('click', function(){
create();
});

const myCars =[
   {
      id : 1,
      img:"/image/mercedes yatch.jpg",
      carTitle :"Audi Q3",
      details : " Tenders & Toys onboard the yacht MERCEDES include 2 (two person) Yamaha Waverunners, 2 (one person) Ocean Kayaks, 1 15' Novorania w/90hp Yamaha, 2 sets dive gear, 8 tanks & dive compressor, Ample snorkel gear, water skis, fishing equipment, Guest Accommodation One King Stateroom Two Queen Staterooms Audio Visual Equipment and Deck Facilities: Main Salon TV/VCR/CD/Cassette, video, music & Book libraries, board games. Powder room on main deck, Formal dining in main salon w/wetbar seating for 6. Aft deck seating for 4 Upperdeck seating for 18 w/dining table that seats 10, BBQ Cockpit and swim platform with swim ladder Communications: SSB, VHF, Sat Phone, Sky Phone, Cell Phone"
   },
   {
      id : 2,
      img:"/image/mercedes yatch.jpg",
      carTitle :"Audi Q3",
      details : " Tenders & Toys onboard the yacht MERCEDES include 2 (two person) Yamaha Waverunners, 2 (one person) Ocean Kayaks, 1 15' Novorania w/90hp Yamaha, 2 sets dive gear, 8 tanks & dive compressor, Ample snorkel gear, water skis, fishing equipment, Guest Accommodation One King Stateroom Two Queen Staterooms Audio Visual Equipment and Deck Facilities: Main Salon TV/VCR/CD/Cassette, video, music & Book libraries, board games. Powder room on main deck, Formal dining in main salon w/wetbar seating for 6. Aft deck seating for 4 Upperdeck seating for 18 w/dining table that seats 10, BBQ Cockpit and swim platform with swim ladder Communications: SSB, VHF, Sat Phone, Sky Phone, Cell Phone"
   },
   {
      id : 3,
      img:"/image/mercedes yatch.jpg",
      carTitle :"Audi Q3",
      details : " Tenders & Toys onboard the yacht MERCEDES include 2 (two person) Yamaha Waverunners, 2 (one person) Ocean Kayaks, 1 15' Novorania w/90hp Yamaha, 2 sets dive gear, 8 tanks & dive compressor, Ample snorkel gear, water skis, fishing equipment, Guest Accommodation One King Stateroom Two Queen Staterooms Audio Visual Equipment and Deck Facilities: Main Salon TV/VCR/CD/Cassette, video, music & Book libraries, board games. Powder room on main deck, Formal dining in main salon w/wetbar seating for 6. Aft deck seating for 4 Upperdeck seating for 18 w/dining table that seats 10, BBQ Cockpit and swim platform with swim ladder Communications: SSB, VHF, Sat Phone, Sky Phone, Cell Phone"
   },

]
function displayMycars(){
 myCars.map()
}

windows.onload(){
   
}
function addCar (){
   myCars.push();
}

function create(){




   var card = document.createElement('section');
   card.setAttribute('id', 'cardId');
   card.classList.add('my-7','text-white','shadow-lg','md:w-44','shadow-pink-400','sm:mx-auto','rounded-sm','max-w-2xl','border-2','border-slate-300','font-serif','p-2','sm:w-fit','text-base','sm:text-xl','h-fit');
   var picDiv = document.createElement('div');
   picDiv.setAttribute('id','img-preview');
  
   var imgPreview = document.getElementById("img-preview");
    picDiv.classList.add('w-full','h-full','justify-center');
   var imageFile= document.createElement('input');
   imageFile.setAttribute('type', 'file');
   imageFile.setAttribute('id','choose-file')
   imageFile.setAttribute('name', 'choose-file')
   imageFile.accept = 'image/*';
   var picture = document.createElement('img')
   var chooseFile = document.getElementById("choose-file");
   picture.classList.add('rounded-full','w-52','h-32','sm:h-52','sm:hover:h-56','sm:w-72','sm:hover:w-80','md:w-full','md:h-full','md:rounded-sm','sm:rounded-md','md:float-right','md:hover:h-full','md:hover:w-full');
     var content = document.createElement('div');

     content.setAttribute('id', 'card1')
    var title= document.createElement('textarea');
    title.classList.add('sm:float-right','text-white','h-10','-my-9','rounded-md','text-center','border-2','resize-x','border-black','justify-center','font-semibold','underline','md:mt-0','md:justify-center','md:float-none');
     title.placeholder = 'Type the title of the car';
     title.setAttribute('id', 'paragraphId');
    var paragraph = document.createElement('textarea')
    paragraph.classList.add('text-white','pt-3','inline-block','h-40','w-full','resize-y', 'border-2','rounded-md','border-black');
    paragraph.setAttribute('id', 'paragraphId');
paragraph.placeholder = 'type here a text';
  var buy = document.createElement('button');
     buy.classList.add('border-2','my-2','border-black','p-2','bg-slate-600','rounded-md','cursor-pointer');
    buy.textContent = 'Buy';
    var saveContainer = document.createElement('button');
    saveContainer.classList.add('border-2','my-2','border-black',',m-2','p-2','bg-slate-600','rounded-md','cursor-pointer');
   saveContainer.textContent = 'Save';
   var deleteContainer = document.createElement('button');
  deleteContainer.setAttribute('id', 'deleteCardButton');
   deleteContainer.classList.add('border-2','my-2','border-black','p-2','bg-slate-600','rounded-md','cursor-pointer');
  deleteContainer.textContent = 'Delete';

picDiv.appendChild(imageFile)
picDiv.appendChild(picture)
content.appendChild(title)
content.appendChild( paragraph)
content.appendChild(buy)
content.appendChild(saveContainer)
content.appendChild(deleteContainer)

card.appendChild(picDiv)
card.appendChild(content)


   showCase.appendChild(card);

   saveContainer.addEventListener('click', function(){
      picDiv.appendChild(imageFile)
      content.appendChild(title)
      content.appendChild( paragraph)
      content.appendChild(buy)
      content.appendChild(deleteContainer)
      saveContainer.style.display = 'none';
      imageFile.style.display = 'none';
      card.appendChild(picDiv)
      card.appendChild(content)
      showCase.appendChild(card)
      Cartshowcase.appendChild(card)

   
   });
   deleteContainer.addEventListener('click', function(){
      //showCase.removeChild(card);
      
      Cartshowcase.removeChild(card)
   });
   buy.addEventListener('click', function(){
            alert('buy')


   });
   imageFile.addEventListener("change", function () {
      
         const files = imageFile.files[0];
         if (files) {
           const fileReader = new FileReader();
           fileReader.readAsDataURL(files);
           fileReader.addEventListener("load", function () {
          picture.setAttribute('src', this.result);
          //picture.setAttribute.add('class','h-32','sm:h-52');
          
            });    
         }
       
    });

}


