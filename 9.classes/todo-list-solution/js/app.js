class ToDoApp {
  constructor() {
    this.todoInput = document.getElementById('todo-input');
    this.todos = document.getElementById('todos');

    this._todoCount = 0;
    this._stageCount = 0;

    this._stages = ['body', 'hair', 'clothes', 'mic', 'left-blast', 'right-blast'];
    this.maximumStages = this._stages.length;
  }

  initialize() {
    this.todoInput.addEventListener('keydown', event => {
      if (event.code === 'Enter') {
        this.addToDo();
      }
    });

    this.todos.addEventListener('click', event => {
      this.removeToDo(event.target.id);
    });
  }

  addToDo() {
    if (this.todoInput.value === '') { return; }

    let div = document.createElement('div');
    div.textContent = this.todoInput.value;
    div.setAttribute('id', `todo-${this._todoCount}`);

    this.todos.appendChild(div);
    this._todoCount++;
    this.todoInput.value = '';
  }

  removeToDo(todoID) {
    this.discardToDo(todoID)
    this.showNextStage();
    this.updateStageCount();
  }

  discardToDo(todoID) {
    let todo = document.getElementById(todoID);

    if (Array.from(todo.classList).includes('stroked')) {
      return todo.remove();
    }

    todo.classList.toggle('stroked');
  }

  showNextStage() {
    let nextStage = this._stages[this._stageCount];
    document.getElementById(nextStage).classList.remove('hidden');
  }

  updateStageCount() {
    this._stageCount++;
    if (this._stageCount >= this.maximumStages) {
      this._stageCount = this.maximumStages - 1;
    }
  }
};

(new ToDoApp()).initialize();
