let express = require('express'); 
let router = epress.Router(); 

//use the pool export to run the requests


//GET Request to Database 

//take in url without anything behind it 
//write the queryText with SELECT
//SANITIZE the data 
//send the query text with pg pool 
//create the response to client.js 


//POST Request to Database 

//take in url without anything behind it 
//write the queryText with INSERT INTO
//SANITIZE the data 
//send the query text with pg pool 
//create the response to client.js 

//PUT Request to Database 

//take in url with id in as param
//write the queryText with UPDATE 
//SANITIZE the data 
//send the query text with pg pool 
//create the response to client.js 


//DELETE Request to Database 

//take in url with id in as param
//write the queryText with DELETE FROM 
//SANITIZE the data 
//send the query text with pg pool 
//create the response to client.js 


module.exports = router; 