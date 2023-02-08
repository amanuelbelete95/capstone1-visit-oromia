const menu = document.querySelector('.menu-bar');
const closeBtn = document.querySelector('.close-btn');
const humBurger = document.querySelector('.hum-burger');
const menuItems = document.querySelectorAll('.menu-mobile a');

humBurger.addEventListener('click', () => 
menu.classList.toggle('hidden-menu'));

closeBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden-menu');
})

function menuRemover() {
  menu.classList.toggle('hidden-menu');
}

menuItems.forEach((item) => {
  item.addEventListener('click', menuRemover);
});


// speaker-Dynamic


const objSpeakers = [{
  name: "Abiy Ahmed",
  speakerImg: "images/abiy.jpg",
  profession: "Ethiopian Prime Minister",
  statement: "Oromia region is a region with potentaial resource with deep cultural diversity"
}, 

{
  name:"Denzel Washington",
  speakerImg: "images/denzel.jpg",
  profession:"An American actor and filmmaker",
  statement:"When I visited Bale National Park of Oromia, I couldn't believe that these amazing natural beauty existed in the region. Different animals, birds and trees took my eyes."

},

{
  name: "Derartu Tullu",
  speakerImg: "images/derartu.jpg",
  profession: "An Ethiopian Athelete",
  statement: "Oromia is a land of beauty filled with natural heritage. I invite all my friends from all over the world to visit oromia.",

},

{
  name:"Uhuru Kenyata",
  speakerImg: "images/uhuru2.jpg",
  profession: "Former Kenyan President",
  statement: "Oromia region is a region with potentaial resource with deep cultural diversity",

},

{
  name:"Paul Kagamae",
  speakerImg:"images/kagame.jpg",
  profession:"Rwandian President",
  statement: "I was honoured to visit oromia on June 2016 when I went to Ethiopia for Economic Forum.",
},

{
  name:"Barack Obama",
  speakerImg:"images/obama.jpg",
  profession:"44th U.S. President",
  statement:"Oromia, one of the most beautiful place I have ever been to in my entire life. The weather and the natural beauty of the place is amazing."
}

]




const featureSpeakers = document.querySelector('.feature-container');


for(let i = 0; i < objSpeakers.length; i += 1)
{
  
  featureSpeakers.innerHTML += `<div class="feature">
        <img src="${objSpeakers[i].speakerImg}" alt="" class="img-speaker" />

       <div class="statement">
        <h3 class="speaker">${objSpeakers[i].name}</h3>
        <p class="speaker-pro">${objSpeakers[i].profession}</p>
        <p class="speaker-words">${objSpeakers[i].statement}
        </p>
       </div>
      </div>`
      ;

}




