let express = require('express'); 
let router = express.Router(); 

//use the pool export to run the requests
let pool = require('./modules/pool.js'); 

//GET Request to Database 

//take in url without anything behind it 
//write the queryText with SELECT
//SANITIZE the data 
//send the query text with pg pool 
//create the response to client.js 


//POST Request to Database 
router.post('/', (req, res)=>{ 
  console.log("In POST request", req.body); 
  let input = req.body;
  let queryText = `
  INSERT INTO "tasks" 
  ("task")
  VALUES
  ($1)
  `;
pool.query(queryText, [input.task]).then((result)=> {
console.log("completed post"); 
res.sendStatus(201);
}).catch((error)=>{ 
  console.log(error); 
  res.sendStatus(500); 
})
})
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