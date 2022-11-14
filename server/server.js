//Set Port
const PORT = process.env.PORT || 5000;
//Inport express
const express = require('express');
const app = express();
//Import BodyParser 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
//Serve Static Files 
app.use(express.static('server/public'));

// ROUTES
//const taskRouter = require('./router.tasklist.js')
//app.use('/task_list', taskRouter);


// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
