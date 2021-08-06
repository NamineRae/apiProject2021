//connect to the api
fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes')
    .then((resObject) => {
        return resObject.json()
    })
    .then((json) => {
        console.log(json.data)
        displayApiData(json.data)
    })


//get chosen data from api
function displayApiData(data) {
    let dataEl = document.querySelector('#data');
    data.forEach(card => {

        //<div> //box
        //     <h2>Beacon of White</h2> //h2
    
        //     <p>Equip</p> // typeP
        //     <p>Spell Card</p> // raceP
        //</div>

        //this is what you want it to look like
//         <div class="card"> 
        //   <div class="content"> 
        //     <div class="front">
        //       Front
        //     </div>
        //     <div class="back">
        //       Back!
        //     </div>
        //   </div>
//         </div>


        //step 1. Create all the div needed


        //step 2. Set the class attrabute for the divs

        //step 3. create 2 text nodes. One with the text front and one with the text back

        //step 4. append those 2 text nodes to the div with the class of front and back

        //step 5. replace the text nodes with the data from the API with the HTMl you would like.

                //this is what you want it to look like
//         <div class="card"> 
        //   <div class="content"> 
        //     <div class="front">
        //       <img src='imgageURL'
                //  <h2>card Name</h2>
        //     </div>
        //     <div class="back">
                // <p>race</p>
                // <p>type</p>
        //     </div>
        //   </div>
//         </div>


    // <div class="scene">
        // <div class="card">
        //     <div class="card__face card__face--front">front</div>
        //     <div class="card__face card__face--back"><div><p>Hi,I'm here on the back</p></div></div>
        // </div>
    // </div>


let cardContainer = document.createElement('div');
let content = document.createElement('div');
let front = document.createElement('div');
let back = document.createElement('div');

cardContainer.className = 'scene';
content.className = 'card';
front.className = 'card__face card__face--front';
back.className = 'card__face card__face--back';

cardContainer.append(content)
content.append(front)
content.append(back)

// console.log(cardContainer)

        // console.log(card.card_images[0].image_url_small)

        //create elements
        let h2 = document.createElement('h2');
        let raceP = document.createElement('p');
        let typeP = document.createElement('p');
        let img = document.createElement('img');


        //create text nodes to go into the elements
        let nameText = document.createTextNode(card.name)
        let raceText = document.createTextNode(card.race)
        let typeText = document.createTextNode(card.type)
       

        //<img src='' />

        img.setAttribute('src', card.card_images[0].image_url_small)
        //this sets the src attribute of the html img element

        //append the text to the correct elements
        h2.append(nameText)
        raceP.append(raceText)
        typeP.append(typeText)

        // //append the elements to the dataEl
        front.append(h2) 
        front.append(img)
        back.append(raceP) 
        back.append(typeP)

        cardContainer.addEventListener( 'click', function() {
            cardContainer.classList.toggle('is-flipped');
          });

        
        // var cardContainer = document.querySelector('.card');
        //     cardContainer.addEventListener( 'click', function() {
        //     cardContainer.classList.toggle('is-flipped');

        dataEl.append(cardContainer)

    });   
}