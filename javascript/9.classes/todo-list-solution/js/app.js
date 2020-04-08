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
        this._addToDo();
      }
    });

    this.todos.addEventListener('click', event => {
      this._removeToDo(event.target.id);
    });
  }

  _addToDo() {
    if (this.todoInput.value === '') { return; }

    let todo = document.createElement('div');
    todo.textContent = this.todoInput.value;
    todo.setAttribute('id', `todo-${this._todoCount}`);

    this.todos.appendChild(todo);
    this._todoCount++;
    this.todoInput.value = '';
  }

  _removeToDo(todoID) {
    this._discardToDo(todoID)
    this._showNextStage();
    this._updateStageCount();
  }

  _discardToDo(todoID) {
    let todo = document.getElementById(todoID);

    if (Array.from(todo.classList).includes('stroked')) {
      todo.remove();
      return;
    }

    todo.classList.toggle('stroked');
  }

  _showNextStage() {
    let nextStage = this._stages[this._stageCount];
    document.getElementById(nextStage).classList.remove('hidden');
  }

  _updateStageCount() {
    if (this._stageCount < this.maximumStages) {
      this._stageCount++;
    }
  }
};
