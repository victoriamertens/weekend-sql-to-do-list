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
$('#task-list').on('click', '.checkbox', completeTask);
$('#task-list').on('click', '#delete-btn',deleteTask);
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
    <p class="${data[i].completed}">
    <input class="checkbox" type="checkbox" name="task" data-id="${data[i].id}">
    <label for="task">${data[i].task}</label>
    <button id="delete-btn" data-id="${data[i].id}">DELETE</button>
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
function completeTask(){
let checkboxId = $(this).data('id'); 
console.log(checkboxId);
$.ajax({ 
  method: 'PUT', 
  url: `/task_list/${checkboxId}`,
}).then(function(response){ 
  console.log("put completed", response); 
  getData(); 
}).catch(function(error){ 
  alert("Error with update:", error); 
})

}

//DELETE FUNCTION 
function deleteTask(){
  let id = $(this).data('id');
  $.ajax({ 
    method:'DELETE', 
    url: `/task_list/${id}`, 
  }).then(function(){ 
    console.log('Delete Complete'); 
    getData(); 
  }).catch(function(error){ 
    alert('Error, could not delete.Error', error);
  })

}
