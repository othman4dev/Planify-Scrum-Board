
//Code for sortable js

let all = document.querySelectorAll('.list-tasks');
all.forEach(element => {
   Sortable.create(element, {
     group: 'one',
     animation: 150
   })
});
let dash = document.querySelector('.dash');
Sortable.create(dash, {
 group: 'two',
 animation: 150
})
let checkList = document.querySelector('#CheckList');
Sortable.create(checkList, {
 group: 'foor',
 animation: 150
})
function refresh() {
    let dashes = document.querySelectorAll('.dash');
    dashes.forEach(element => {
        Sortable.create(element, {
          group: 'two',
          animation: 150
        })
    })
    all = document.querySelectorAll('.list-tasks');
    all.forEach(element => {
        Sortable.create(element, {
          group: 'one',
          animation: 150
        })
    });
}
document.getElementById('plus-add').addEventListener('click',function () {
    setTimeout(refresh(),100);
})
let projects = document.querySelector('.all-projects');
Sortable.create(projects, {
  group: 'three',
  animation: 150
  })
;

//those are global variables for the countf of number of tasks and number of tables.

let countOfProjects = 1;

let countOfCurrentTasks = 3;

let countOfCurrentColumns = 2;

let sideBarStatus = true;

//end of global vars;

function addCol(e) {
  countOfCurrentColumns++;
  e.insertAdjacentHTML(
    "beforebegin",
    `
  <div class="list">
      <div class="list-name" contenteditable="true" spellcheck="false">To Do</div>
      <div class="list-tasks"></div>
      <div class="add"><img src="Assets/plus.svg" alt="" class="plus" onclick="addTask(this.parentNode.previousElementSibling)"></div>
  </div>
    `
  );
  refresh();
}
function addTask(e) {
  countOfCurrentTasks++;
  e.insertAdjacentHTML(
    "beforeend",
    `
    <div class="task" id="t-${countOfCurrentTasks}" spellcheck="false" style="animation-name:pop-down;animation-duration:0.2s;animation-timing-function:linear;">
      <p contenteditable="true" class="task-text">New task </p>
      <img src="Assets/dots-3.png" onclick="showModal1(this)" class="dots" alt="" onclick="showModal1(this)">
      <div style="display: none;" class="task-data">
      <div class="date-data">

      </div>
      <div class="check-data">

      </div>
    </div>
  </div>
    `
  );
}
let currentTask = null;
function showModal1(e) {
  document.getElementById('label-meter').style.backgroundColor = '#bae8e8';
  let taskName = e.previousElementSibling.innerText;
  document.getElementById('taskName').innerHTML = taskName;
  var Modale = document.getElementById("Modale1");
  currentTask = e.parentNode;
  Modale.className = e.parentNode.id;
  Modale.style.display = "block";
  Modale.style.backdropFilter = "blur(5px)";
  document.getElementById('label-meter').style.backgroundColor = currentTask.style.backgroundColor;
  if (currentTask.querySelector('.check-data').innerHTML !== '') {
    document.getElementById('CheckList').innerHTML = currentTask.querySelector('.check-data').innerHTML;
  } else {
    document.getElementById('CheckList').innerHTML = `<div><input type="checkbox" onchange="checkThis(this)"><span contenteditable="true" spellcheck="false">Tache ...</span></div>`;
  }
}
function deleteTask() {
  currentTask.remove();
  hideModal1();
}
function hideModal1() {
  var Modale = document.getElementById("Modale1");
  Modale.style.display = "none";
  Modale.style.backdropFilter = "blur(0px)";
  document.querySelectorAll('.color-closet').forEach(element => {
    element.style.maxHeight = '0';
    element.style.display = 'none';
  });
  colorsShown = false;
  let checks = document.getElementById('CheckList').innerHTML;
  currentTask.querySelector('.check-data').innerHTML = checks;
}

// Zouhair : Account_Name

function show_hide_Account() {
  const Account = document.querySelector(".Account-name");
  if (Account.style.display == "flex") {
    Account.style.display = "none";
  } else {
    Account.style.display = "flex";
  }
}
function addCheckList() {
  var e = document.querySelector("#CheckList")
  e.insertAdjacentHTML(
    "beforeend",
    `
    <div><input type="checkbox" onchange="checkThis(this)"><span contenteditable="true" spellcheck="false">Tache ...</span></div>
    `
  );
}
function showTools(){
  var show = document.querySelector(".Div_Tools");
  if (show.style.display == "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
}
// Ajouter fonction qui ajoute un table .
function addTable() {
  countOfProjects++;
  countOfCurrentTasks += 9;
  const Project = document.querySelector(".all-projects");
  Project.insertAdjacentHTML( "beforeend", ` 
  <div class="project-name" spellcheck="false" onclick="saveData(this)" id="p-${countOfProjects}">
    <p class="projectName" contenteditable="true">Project...</p>
    <img src="Assets/dots-3.png" alt="" class="dots">
  </div> `);

  //add table content
  document.querySelector('.dash').insertAdjacentHTML('afterend',`
  <section class="dash" id="dash-${countOfProjects}" style="display:none">
            <div class="list">
                <div class="list-name" contenteditable="true" spellcheck="false">To Do</div>
                    <div class="list-tasks">
                        <div class="task" spellcheck="false">
                            <p contenteditable="true">task 1</p>
                            <img onclick="showModal1(this)" src="Assets/dots-3.png" class="dots" alt="" onclick="showModal1(this)">
                            <div style="display: none;" class="task-data">
                                <div class="date-data">

                                </div>
                                <div class="check-data">
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                <div class="add"><img src="Assets/plus.svg" alt="" class="plus" onclick="addTask(this.parentNode.previousElementSibling)"></div>
            </div>
            <div class="list">
                <div class="list-name" contenteditable="true" spellcheck="false">Doing</div>
                    <div class="list-tasks">
                        
                    </div>
                <div class="add"><img src="Assets/plus.svg" alt="" class="plus" onclick="addTask(this.parentNode.previousElementSibling)"></div>
            </div>
            <div class="list">
                <div class="list-name" contenteditable="true" spellcheck="false">Done</div>
                    <div class="list-tasks">
                        
                    </div>
                <div class="add"><img src="Assets/plus.svg" alt="" class="plus" onclick="addTask(this.parentNode.previousElementSibling)"></div>
            </div>
            <div class="list">
                <div class="add"><img src="Assets/plus.svg" alt="" class="plus" onclick="addCol(this.parentNode.parentNode)" id="plus-add"></div>
            </div>
        </section>
  `)
}
// show sideBar In mobile
function showSidebar(e) {
  if (sideBarStatus == true) {
    document.querySelector('.sideBar-body').style.animationName = 'decreaseWidth';
    e.style.rotate = '180deg';
    e.style.right = '-30px';
    e.style.borderRadius = '50% 0% 0% 50%';
    sideBarStatus = false;
  } else {
    document.querySelector('.sideBar-body').style.animationName = 'increaseWidth';
    e.style.rotate = '0deg';
    e.style.right = '-15px';
    e.style.borderRadius = '50%';
    sideBarStatus = true;
  }
}; 
 function saveData(e) {
  document.querySelector('.current').classList.remove('current');
  e.classList.add('current');
  let id = e.id;
  id = id.split('-')[1];
  document.querySelectorAll('.dash').forEach(element => {
    element.style.display = 'none';
  });
  document.getElementById(`dash-${id}`).style.display = 'flex';
  refresh();
 }
 function changeLabelColor(inp) {
  let color = inp.value;
  currentTask.style.backgroundColor = color;
  document.getElementById('label-meter').backgroundColor = color;
 }
 function toThisColor(e) {
  currentTask.style.backgroundColor = e.id;
  document.getElementById('label-meter').style.backgroundColor = e.id;
  console.log(e.id);
 }
 let colorsShown = false;
 function showColors() {
  if (colorsShown == false) {
    colorsShown = true;
    document.querySelectorAll('.color-closet').forEach(element => {
      element.style.maxHeight = 'none';
      element.style.display = 'flex';
    });
  } else {
    colorsShown = false;
    document.querySelectorAll('.color-closet').forEach(element => {
      element.style.maxHeight = '0';
      element.style.display = 'none';
    });
  }
 }
 function addChecks() {
  document.getElementById('checklists').style.display = 'block';
 }
function checkThis(inp) {
  if (inp.checked) {
   inp.nextElementSibling.style.textDecoration = 'line-through';
   inp.nextElementSibling.style.fontStyle = 'italic';
  } else {
    inp.nextElementSibling.style.textDecoration = 'none';
    inp.nextElementSibling.style.fontStyle = 'normal';
  }
}
let recentFocus = null;
function projectDots(e) {
  e.insertAdjacentHTML('afterend',`
  <div class="project-op">
    <div class="ops" onclick="saveThis()">Save</div>
    <div class="ops" onclick="deleteThisP()" style="color: red;">Delete</div>
  </div>
  `);
  recentFocus = e;
}
function deleteThisP() {
  recentFocus.parentNode.remove();
  document.querySelector('.project-op').style.display="none";
  let projectID = recentFocus.parentNode.id;
  projectID = projectID.match(/\d+/)[0];
  document.getElementById(`dash-${projectID}`).remove();
}