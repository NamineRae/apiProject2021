// //create request varible
// var request = new XMLHttpRequest()

// //open connection
// request.open('GET', 'https://db.ygoprodeck.com/api/v7/cardinfo.php', true)

// request.onload = function () {
// //begin accessing data here
// var defense = "def"
// var stregnth = "atk"
// var name = "name"
// var cardImg = "image_url"
// //trying to make variables for the atk, def, image, and name of each monster
// }

// //send request
// request.send()

//I think this is how you link an api?

fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    .then((resObject) => {
        return resObject.json()
    })
    .then((json) => {
        console.log(json.data)
        displayApiData(json.data)
    })

// var defense = "def"
// var stregnth = "atk"
// var name = "name"

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
    
}