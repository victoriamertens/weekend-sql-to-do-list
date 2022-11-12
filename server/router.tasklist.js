let express = require('express'); 
let router = express.Router(); 

//use the pool export to run the requests
let pool = require('./modules/pool.js'); 

//GET Request to Database 
router.get('/', (req, res)=>{ 
  console.log("In GET request", req.body); 
  let queryText = `
  SELECT * 
  FROM "tasks" 
  `;
pool.query(queryText).then((result)=> {
console.log("completed get", result.rows); 
res.send(result.rows);
}).catch((error)=>{ 
  console.log(error); 
  res.sendStatus(500); 
})
})

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

//PUT Request to Database 

//take in url with id in as param
router.put('/:id', (req, res)=>{ 
  console.log("In PUT request", req.params.id); 
  let id = req.params.id; 
  let queryText = `
  UPDATE "tasks" 
  SET "completed" = 'true'
  WHERE "id" = $1
  `;
pool.query(queryText, [id]).then((result)=> {
console.log("completed put", result); 
res.sendStatus(200);
}).catch((error)=>{ 
  console.log(error); 
  res.sendStatus(500); 
})
})



//DELETE Request to Database 

//take in url with id in as param
//write the queryText with DELETE FROM 
//SANITIZE the data 
//send the query text with pg pool 
//create the response to client.js 


module.exports = router; 