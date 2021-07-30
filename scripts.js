//create request varible
var request = new XMLHttpRequest()

//open connection
request.open('GET', 'https://db.ygoprodeck.com/api/v7/cardinfo.php', true)

request.onload = function () {
//begin accessing data here
var defense = 
var stregnth = 
var name = 
//trying to make variables for the atk, def, and name of each monster
}

//send request
request.send()

//I think this is how you link an api?