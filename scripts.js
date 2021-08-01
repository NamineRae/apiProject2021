//connect to the api
fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
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
        let h2 = document.createElement('h2');
        let h2TExt = document.createTextNode(card.name)
        let h2TExt1 = document.createTextNode(card.race)
        let h2TExt2 = document.createTextNode(card.type)
        h2.append(h2TExt)
        h2.append(h2TExt1)
        h2.append(h2TExt2)
        dataEl.append(h2)  
    }); 
     //this put ALL of the data into a single div, when I need a seperate div for each "card" but I don't know how to do that
}
//flip the card
data.addEventListener( 'click', function () {
    data.classList.toggle('is-flipped');
    console.log("flip")
})      