//Document ready function 
$(document).ready(onReady); 

function onReady (){
  console.log("in onReady");
 clickListeners(); 
  getData();
}

function clickListeners(){
  console.log("in ClickListeners"); 
$('#add-btn').on('click', addTask);
//$(CHECKBOX PARENT).on('click', completeTask);
//$(DELETE PARENT).on('click',deleteTask);
}


//GET FUNCTION 
function getData(){
$.ajax({ 
  method: 'GET', 
  url: '/task_list'
}).then(function(response){ 
  console.log("Returned GET request", response); 
renderDOM(response); 
})
}


//Render Function 
//note, go back and use the addClass function to clean this up 
function renderDOM(data){
  console.log("in renderDOM", data); 
  $('#task-list').empty(); 
  for(let i = 0; i<data.length; i++){
    $('#task-list').append(`
    <p class="uncompleted">
    <input type="checkbox" name="task" id="${data[i].id}">
    <label for="task">${data[i].task}</label>
    <button id="delete-btn">DELETE</button>
  </p>
    `)} 
}

//POST FUNCTION 
function addTask(){ 
  let task = $(this).siblings().val(); 
  let data = {task: task}; 
  $.ajax({ 
    method: 'POST', 
    url: '/task_list',
    data: data
  }).then(function(){ 
    console.log("post succes"); 
    getData(); 
  }).catch(function(error){ 
    alert("Could not input task. Error:", error); 
  })
}

//PUT FUNCTION 
//function completeTask(){}
//ajax PUT, url: /task_list/id

//DELETE FUNCTION 
//function deleteTask(){}
//ajax DELETE, url: /task_list/id