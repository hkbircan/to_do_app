

const taskListBase = {};

const call = () =>{

const addTaskDate = document.querySelector("#startDateForTask").value;
const addTaskDescription = document.querySelector(".addTaskDescription").value;
const addPriorty = document.getElementById('btnradio1').checked ? "H": document.getElementById('btnradio2').checked ? "M" : "L" ;


console.log(addTaskDate);
console.log(addTaskDescription);
console.log(addPriorty);
}



const addBtn = document.querySelector(".addBtn");

const selectedDay = document.querySelector("#startDateForList");

selectedDay.addEventListener("change", () => {
    const newList = taskListBase;
    const selectedDay = document.querySelector("#startDateForList").value;
    deleteTasks();
    writeTasksPre(newList[selectedDay]);
    delEventListener();
})


addBtn.onclick = () =>{
    addTaskToList(taskListBase);
    
    call();
}

addBtn.addEventListener("click", () => {
    const newList = taskListBase;
    const selectedDay = document.querySelector("#startDateForList").value;
    deleteTasks();
    writeTasksPre(newList[selectedDay]);
    delEventListener();
})

const addTaskToList = (taskList) => {
    const addTaskDate = document.querySelector("#startDateForTask").value;
    const addTaskDescription = String(document.querySelector(".addTaskDescription").value);
    const addPriorty = document.getElementById('btnradio1').checked ? "H": document.getElementById('btnradio2').checked ? "M" : "L" ;

    const newTask = {};
    newTask["addTaskDescription"] = addTaskDescription;
    newTask["addPriorty"] = addPriorty;


    if(taskList[addTaskDate]){
        taskList[addTaskDate].push(newTask);
    }else{
    const newDayArrayObjects =[];
    newDayArrayObjects.push(newTask);
    taskList[addTaskDate] = newDayArrayObjects;
    }
    
    console.log(taskListBase);

}


const deleteTaskFromListMain = (des) => {
    const addTaskDate = document.querySelector("#startDateForTask").value;
    const addTaskDescription = String(document.querySelector(".addTaskDescription").value);
    const addPriorty = document.getElementById('btnradio1').checked ? "H": document.getElementById('btnradio2').checked ? "M" : "L" ;

    // const newListLast =taskListBase.map((x ,i , array) => );


    // taskListBase['addTaskDate'].

    for (const iterator of taskListBase[addTaskDate]) {
        if(iterator['addTaskDescription'] == des){
            taskListBase[addTaskDate].pop(iterator);
        }
    }



    // Object.values(taskListBase).forEach((x) => x['addTaskDescription'] == des ? e.remove : console.log(x));

    // taskListBase['addTaskDate'].forEach((e) => e['addTaskDescription']= des ? e.remove : e.remove)

    // writeTasksPre(taskListBase[selectedDay]);
    
    // console.log(taskListBase);

}








const writeTasksPre = (tasks) => {

    for (const iterator of tasks) {
        const description = iterator.addTaskDescription;
        const priority = iterator.addPriorty == "H" ? "danger list-group-item-action" : iterator.addPriorty == "M" ? "warning list-group-item-action opacity-100" : "success  list-group-item-action";
        writeTaskAll( description, priority);
    }
}

const writeTaskAll = (des,prio) => {

    const baseLine = document.querySelector(".listTask");

    const newLine = baseLine.cloneNode(true);
    const uId = idGenerator();
    newLine.id = uId;
    newLine.className = "list-group d-flex justify-content-between g-1 listTaskNew";

    newLine.childNodes[1].className = "list-group-item list-group-item-"+prio+" d-flex justify-content-between mb-1 rounded";
    
    // newLine.childNodes[1].childNodes[2].childNodes[3].id ="btn-check-outlined" + uId+"checkBtn checkBtn"; 
    // newLine.childNodes[1].childNodes[2].childNodes[4].id = uId+"deleteBtn"; 

    newLine.childNodes[1].childNodes[1].textContent = des;
    newLine.childNodes[1].childNodes[1].id = uId + "span";

    // newLine.childNodes[1].childNodes[2].childNodes[3].className = "btn btn-outline-success rounded me-1 newDoneBtn";

    document.querySelector(".listOfTasks").appendChild(newLine);

    // baseLine.innerHTML += newLine;

    


}

const deleteTasks = () => {
    const baseLine = document.querySelectorAll(".listTaskNew").forEach(e => e.remove());
}

const idGenerator = () => {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2));
}

const allDoneBtn = document.querySelectorAll("checkBtn");




const doneTask = () => {
    const baseLine = document.querySelectorAll("[class~='checkBtn']").forEach(e => console.log(e));
}



// const allDelBtn = document.querySelectorAll("deleteBtn");

// for (const iterator of allDelBtn) {
//     iterator.addEventListener("click", () => {
//         deleteTaskFromList();
//     })
// }

// allDelBtn.addEventListener("click", () => {
//     deleteTaskFromList();
// })


// const a = allDelBtn.onclick = () => {
//     const selectedDay = document.querySelector("#startDateForList").value;
//     deleteTasks();
//     writeTasksPre(taskListBase[selectedDay]);
// }



const delEventListener = ()=> {
    const allDelBtn = document.getElementsByClassName("deleteBtn");
    

    
    
    console.log(allDelBtn); 

    // allDelBtn.forEach( function (a) {
    //     a.addEventListener("click", function () {
    //         const description =a.parentElement.parentElement.childNodes[1].textContent;
    //       deleteTaskFromListMain(description);

    //       const selectedDay = document.querySelector("#startDateForList").value;
    //         deleteTasks();
    //         writeTasksPre(taskListBase[selectedDay]);
          
    //     })
    // })
    


    for (const iterator of allDelBtn) {
        iterator.addEventListener("click", () =>{
          const description =iterator.parentElement.parentElement.childNodes[1].textContent;
          deleteTaskFromListMain(description);

            const selectedDay = document.querySelector("#startDateForList").value;
            deleteTasks();
            writeTasksPre(taskListBase[selectedDay]);

        })
    }

}



// function deleteTaskFromList(a) {
    //     const allDelBtn = document.querySelectorAll("deleteBtn");
    // for (const iterator of allDelBtn) {
    //     if(iterator.onclick){
    //         let idOfTask = iterator.parentElement.parentElement.parentElement.id;
    //         document.getElementById(idOfTask).remove;
    //     }
    // }
// }

 //      const newList = taskList;

    //      const newList2 = {};
         
    //      for (const key in newList) {
            
    //             const element = newList[key];
    //             let a = [];
    //             for (const iterator of element) {
    //                if(iterator["addTaskDescription"] == description){
    //                 iterator.remove;
    //                 return
    //                } 
    //                a.push(iterator);
    //             }
    //         newList2.key = a;
    //      }

    //      console.log(newList2);
         

    //      const selectedDay = document.querySelector("#startDateForList").value;
    //      newList2[selectedDay]

    
    // deleteTasks();
    
    // writeTasksPre(newList2[selectedDay]);