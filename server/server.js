const express = require('express');
const taskRouter = express.Router();

const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const taskRouter = require('server/router.tasklist.js')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));



// ROUTES
app.use('/task_list', taskRouter);

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
