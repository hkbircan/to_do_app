

// let task = {"description" : "aaaa", "priorty" : "M"}
// let task2 = {"description" : "bbbb", "priorty" : "H"}
// let task3 = {"description" : "cccc", "priorty" : "L"}
// let taskList = {"24.04.2023" : [task,task2, task3], "25.04.2023" : [task,task2, task3]}
let taskList = {"" : []}


// taskList['24.04.2023'] = [task]
// taskList['25.04.2023'].pop();
// taskList['24.04.2023'].splice(1,2);


console.log(taskList);

const addBtn = document.querySelector(".addBtn"),
     listOfTasks = document.querySelector(".listTask"),
     descriptionInput = document.querySelector(".addTaskDescription"),
     startDateForList = document.querySelector("#startDateForList");


     


// add task to tasklist
const addTaskToList = (taskList) => {
        
    const addTaskDate = document.querySelector("#startDateForTask").value,
     addTaskDescription = String(document.querySelector(".addTaskDescription").value),
     addPriorty = document.getElementById('btnradio1').checked ? "danger": document.getElementById('btnradio2').checked ? "warning" : "success" ;

    // check desc not null
    if(!addTaskDescription){
        alert("Pls add a task description")
        return;
    }
    // crate new task obj
    const newTask = {};
    newTask["taskDescription"] = addTaskDescription;
    newTask["priorty"] = addPriorty;
    
    // check day has already a new task
    if(taskList[`${addTaskDate}`] ){
        let a = true
        taskList[`${addTaskDate}`].forEach(element => {
            console.log(element);
            
            if(element["taskDescription"] == newTask["taskDescription"]){
                alert("Pls uniq Task Desc")
                a = false
            }
        });

        if(a){
            taskList[`${addTaskDate}`].push(newTask);
        }  
        // if not create new task for a day
    }else {
        taskList[`${addTaskDate}`] = [];
        taskList[`${addTaskDate}`].push(newTask);
    }
    
        
    
    
    console.log(taskList);
    showList();
    descriptionInput.value = "";
    descriptionInput.focus();

}

addBtn.onclick = () =>{
    addTaskToList(taskList);
    
    
}

const showList = () => {
     listOfTasks.innerHTML = "";

    taskList[`${startDateForList.value}`].forEach(element => {
        let a = "";
        if(element["status"] == "checked"){
        a = "text-decoration-line-through";
       };

        listOfTasks.innerHTML += 
    `<li class="list-group-item list-group-item-action list-group-item-${element["priorty"]} d-flex justify-content-between mb-1 rounded listlist"
    style="cursor: default">

    <span class="my-auto fs-4 ${a} descriptionOftask" disabled>${element["taskDescription"]}</span>

    <div class="btn-group" role="group" aria-label="Button group with nested dropdown" >

        <div class="dropdown d-inline-block justify-content-end me-1 " >

            <button type="button" class="btn btn-primary dropdown-toggle editBtn " disabled data-bs-toggle="dropdown"
               >Edit
            </button>

            <form class="dropdown-menu p-4">
                <div class="mb-3">
                    <label for="exampleDropdownFormEmail2" class="form-label">Some Task</label>
                    <input type="text" class="form-control newDescription2"  placeholder="Description">
                </div>
                <div class="mb-3">
                    <div class=" d-flex">
                        <label class="list-group-item bg-body border-0 newTaskDate" for="startDateEdit"></label>
                        <input id="startDateEdit" class="form bg-body-tertiary border-1" type="date"
                            style="outline: none;" value="2023-04-24" min="2023-01-01" max="2023-12-31" />
                    </div>

                    

                    

                </div>
                <button class="btn btn-outline-secondary editAddBtn" type="button">Add</button>
            </form>
        </div>

        <input type="checkbox" class="btn-check" id="btn-check-outlined ${element["taskDescription"]}" autocomplete="off" ${element["status"]} >
        <label class="btn btn-outline-success rounded me-1 doneBtn " for="btn-check-outlined ${element["taskDescription"]}"
        >Done</label>
        <button type="button" class="btn btn-danger rounded me-1 deleteBtn">Delete</button>
    </div>
    </li>`

    })  
    
    deleteTaskFromList();
    changeTaskStatus();
    editOfTask();
}

const deleteTaskFromList = () => {

    document.querySelectorAll(".deleteBtn").forEach((a) =>{
        a.onclick = () => {
            
            taskList[`${startDateForList.value}`].forEach(element => {
                if(element["taskDescription"] == a.closest("li").querySelector("span").textContent){

                    const indexOfTask = taskList[`${startDateForList.value}`].indexOf(element)
                    taskList[`${startDateForList.value}`].splice(indexOfTask,1);
                }
            })

            showList();
             
        }
    })


}

startDateForList.addEventListener("change", () => {
    showList();
})

const changeTaskStatus = () => {
    document.querySelectorAll(".doneBtn").forEach((a) => {
        a.onclick = () => {

            taskList[`${startDateForList.value}`].forEach(element => {
                if(element["taskDescription"] == a.closest("li").querySelector("span").textContent){

                    if(element["status"] && element["status"] == "checked"){
                    element["status"] = "";
                    }else if(element["status"] && element["status"] == ""){
                        element["status"] = "checked";
                    }else {
                        element["status"] = "checked";
                    }
                }
            })
            showList();

        }
        
    })
    
}

const editOfTask = () => {
    
    document.querySelectorAll(".editAddBtn").forEach((editBtnFromAllEdits) => {
        editBtnFromAllEdits.onclick = () => {

            taskList[`${startDateForList.value}`].forEach(task => {
                if(task["taskDescription"] == editBtnFromAllEdits.closest("li").querySelector("span").textContent){
                    
                    
                    
                    let indexOfTaskforDel = taskList[`${startDateForList.value}`].indexOf(task);

                    const newDescFromInput = editBtnFromAllEdits.closest("form").querySelector(".newDescription2").value
                    console.log(newDescFromInput);
                    const newTaskDateFromEdit = document.querySelector(".newTaskDate").value
                    if(!newDescFromInput){
                        alert("Pls add a task description")
                        return;
                    }else if(taskList[`${newTaskDateFromEdit}`] ){
                        let a = true
                        taskList[`${newTaskDateFromEdit}`].forEach(task => {
                            console.log(task);
                            
                            if(task["taskDescription"] == newDescFromInput){
                                alert("Pls uniq Task Desc")
                                a = false
                            }
                        });
                
                        if(a){
                            const newTask = {};
                            newTask["taskDescription"] = task["taskDescription"];
                            newTask["priorty"] = task["priorty"];
                            newTask["status"] = task["status"];
                            taskList[`${newTaskDateFromEdit}`].push(newTask);
                            taskList[`${newTaskDateFromEdit}`].push(newTask);
                            taskList[`${startDateForList.value}`].splice(indexOfTaskforDel,1);
                            return;
                        }}else {
                        const newTask = {};
                            newTask["taskDescription"] = task["taskDescription"];
                            newTask["priorty"] = task["priorty"];
                            newTask["status"] = task["status"];
                        taskList[`${newTaskDateFromEdit}`] = [];
                        taskList[`${newTaskDateFromEdit}`].push(newTask);
                    }
                    
                    showList();
                }
            })

        }

    })
}








{/* <li class="list-group-item list-group-item-action list-group-item-${element["priorty"]} d-flex justify-content-between mb-1 rounded listlist"
    style="cursor: default">

    <span class="my-auto fs-4 ${a} descriptionOftask" disabled>${element["taskDescription"]}</span>

    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">

        <div class="dropdown d-inline-block justify-content-end me-1 ">

            <button type="button" class="btn btn-primary dropdown-toggle editBtn " data-bs-toggle="dropdown"
               >Edit
            </button>

            <form class="dropdown-menu p-4">
                <div class="mb-3">
                    <label for="exampleDropdownFormEmail2" class="form-label">Some Task</label>
                    <input type="text" class="form-control" id="newDescription" placeholder="Description">
                </div>
                <div class="mb-3">
                    <div class=" d-flex">
                        <label class="list-group-item bg-body border-0 newTaskDate" for="startDateEdit"></label>
                        <input id="startDateEdit" class="form bg-body-tertiary border-1" type="date"
                            style="outline: none;" value="2023-04-24" min="2023-01-01" max="2023-12-31" />
                    </div>

                    <label for="exampleDropdownFormPassword2" class="form-label">Priorty</label>

                    <div class="btn-group gap-1" >
                        <input type="radio" class="btn-check" name="btnradio" data-toggle="collapse" id="btnradioDm1${element["taskDescription"]}"
                            autocomplete="off">
                        <label class="btn btn-outline-danger rounded-0" for="btnradioDm1${element["taskDescription"]}">High</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2Dm2${element["taskDescription"]}"
                            autocomplete="off">
                        <label class="btn btn-outline-warning" for="btnradio2Dm2${element["taskDescription"]}">Mid</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3Dm3${element["taskDescription"]}"
                            autocomplete="off" checked>
                        <label class="btn btn-outline-success rounded-0" for="btnradio3Dm3${element["taskDescription"]}">Low</label>
                    </div>

                </div>
                <button class="btn btn-outline-secondary " type="button">Add</button>
            </form>
        </div>

        <input type="checkbox" class="btn-check" id="btn-check-outlined ${element["taskDescription"]}" autocomplete="off" ${element["status"]} >
        <label class="btn btn-outline-success rounded me-1 doneBtn " for="btn-check-outlined ${element["taskDescription"]}"
        >Done</label>
        <button type="button" class="btn btn-danger rounded me-1 deleteBtn">Delete</button>
    </div>
    </li>` */}