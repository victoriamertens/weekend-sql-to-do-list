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
$('#task-list').on('click', '#complete-btn', completeTask);
$('#task-list').on('click', '#delete-btn',deleteTask);
$('.list-type').on('click', changeList);
}

let list = 'Casual'; 
function changeList(){ 
list = $(this).data('id'); 
}

//GET FUNCTION 
function getData(){
$.ajax({ 
  method: 'GET', 
  url: '/task_list'
}).then(function(response){ 
  console.log("Returned GET request", response); 
  let casualArr = response.filter(test=>
    test.list === 'Casual');
  let timeArr = response.filter(test=>test.list === 'Time'); 
  let importantArr = response.filter(test=>test.list === 'Important'); 
  console.log(casualArr); 
 let lastArr = timeArr.concat(importantArr, casualArr); 
renderDOM(lastArr); 
})
}


//Render Function 
//note, go back and use the addClass function to clean this up 
function renderDOM(data){
  console.log("in renderDOM", data); 
  $('#new-task').val(''); 
  $('#task-list').empty(); 
  for(let i = 0; i<data.length; i++){
    $('#task-list').append(`
    <tr class="${data[i].list}">
    <td class="${data[i].completed}">${data[i].task}
    </td>
    <td>
      <button id="complete-btn" class="btn btn-outline-success " data-id="${data[i].id}">COMPLETE</button>
    </td>
    <td>
      <button id="delete-btn" class="btn btn-outline-danger" data-id="${data[i].id}">DELETE</button>
    </td>
    </tr>
    `)} 
}

//POST FUNCTION 
function addTask(){ 
  let task = $(this).siblings().val(); 
  let data = {task, list}; 
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
