describe('ToDoApp', () => {
  let list;

  beforeEach(() => {
    setupDOM();

    list = new ToDoApp();
    list.initialize();
  });

  afterEach(() => {
    resetDOM();
  });

  describe('when typing a todo', () => {
    it('adds todo item to the list', () => {
      addToDo('Walk dog');
      expect(list.todos.lastChild.textContent).toEqual('Walk dog');
    });

    it('does not add todo item to the list if empty', () => {
      let before = list.todos.children.length
      addToDo('');
      let after = list.todos.children.length
      expect(before).toEqual(after);
    });

    it('sets todo item id', () => {
      addToDo('Walk dog');
      expect(list.todos.lastChild.id).toEqual('todo-0');
    });

    it('increments succesive todo item ids', () => {
      addToDo('first to-do');
      addToDo('second to-do');
      expect(list.todos.lastChild.id).toEqual('todo-1');
    });

    it('clears up the input contents', () => {
      addToDo('Walk dog');
      expect(list.todoInput.value).toEqual('');
    });
  });

  describe('when showing next stage', () => {
    let stages;

    beforeEach(() => {
      stages = document.querySelectorAll('g');
      addToDo('I will be removed');
      list.todos.lastChild.click();
    });

    it('strokes todo when user clicks it', () => {
      expect(list.todos.lastChild.classList).toContain('stroked');
    });

    it('removes stroked todo when user clicks it again', () => {
      list.todos.lastChild.click();
      expect(list.todos.lastChild).toBeNull();
    });

    it('shows the first stage on first user click', () => {
      expect(stages[0].classList).not.toContain('hidden');
    });

    it('shows the next stage on next user click', () => {
      addToDo('irrelevant');
      list.todos.lastChild.click();

      addToDo('irrelevant');
      list.todos.lastChild.click();

      expect(stages[1].classList).not.toContain('hidden');
    });

    it('stops after adding all stages', () => {
      function removeAll() {
        Array.from(stages.length + 1).forEach(() => {
          addToDo('irrelevant');
          list.todos.lastChild.click();
        });
      }

      expect(removeAll).not.toThrowError(TypeError, /null/);
    });
  });

  function setupDOM() {
    let container = document.createElement('div');

    container.setAttribute('id', 'container');
    container.innerHTML = `
    <input id="todo-input" type="text">
    <div id="todos"></div>
    <svg>
      <g id="body" class="hidden"></g>
      <g id="hair" class="hidden"></g>
      <g id="clothes" class="hidden"></g>
      <g id="mic" class="hidden"></g>
      <g id="left-blast" class="hidden"></g>
      <g id="right-blast" class="hidden"></g>
    </svg>`;

    document.body.appendChild(container);
  }

  function addToDo(value) {
    list.todoInput.value = value;

    let event = new Event('keydown');
    event.code = 'Enter';
    list.todoInput.dispatchEvent(event);
  }

  function resetDOM() {
    document.getElementById('container').remove();
  }
});
