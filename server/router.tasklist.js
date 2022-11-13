let express = require('express'); 
let router = express.Router(); 

//use the pool export to run the requests
let pool = require('./modules/pool.js'); 

//GET Request to Database 
router.get('/', (req, res)=>{ 
  console.log("In GET request", req.body); 
  let queryText = `
  SELECT * 
  FROM "updated_tasks" 
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
  INSERT INTO "updated_tasks" 
  ("task", "list")
  VALUES
  ($1, $2)
  `;
pool.query(queryText, [input.task, input.list]).then((result)=> {
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
  UPDATE "updated_tasks" 
  SET "completed" = 'true'
  WHERE "id" = $1;
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
router.delete('/:id', (req, res)=>{ 
  console.log("In DELETE request", req.params.id); 
  let id = req.params.id; 
  let queryText = `
  DELETE
  FROM "updated_tasks" 
  WHERE "id" = $1
  `;
pool.query(queryText, [id]).then((result)=> {
console.log("completed DELETE", result); 
res.sendStatus(200);
}).catch((error)=>{ 
  console.log(error); 
  res.sendStatus(500); 
})
})



module.exports = router; 