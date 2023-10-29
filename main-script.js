function addCol(e) {
    e.insertAdjacentHTML('beforebegin',`
        <div class="list" draggable="true">
            <div class="list-name" contenteditable="true" spellcheck="false">To Do</div>
            <div class="add"><img src="Assets/plus.svg" alt="" class="plus" onclick="addTask(this.parentNode)"></div>
        </div>
    `);
}
function addTask(e) {
    e.insertAdjacentHTML('beforebegin',`
    <div class="task" contenteditable="true" spellcheck="false">New task</div>
    `)
}