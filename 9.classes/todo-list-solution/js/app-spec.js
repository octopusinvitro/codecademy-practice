describe('ToDoApp', function() {
  let list, input, todos;

  beforeEach(function() {
    list = new ToDoApp();
    input = list.todoInput;
    todos = list.todos;
  });

  afterEach(function() {
    resetInput();
    resetToDos();
  });

  describe('when adding a todo', function() {
    beforeEach(function() { addToDo('Walk dog'); });

    it('adds todo item to the list', function() {
      expect(todos.lastChild.textContent).toEqual('Walk dog');
    });

    it('does not add todo item to the list if empty', function() {
      let before = todos.children.length
      list.addToDo();
      let after = todos.children.length

      expect(before).toEqual(after);
    });

    it('sets todo item id', function() {
      expect(todos.lastChild.id).toEqual('todo-0');
    });

    it('increments succesive todo item ids', function() {
      [1, 2, 3].forEach(function() { addToDo('irrelevant'); });
      expect(todos.lastChild.id).toEqual('todo-3');
    });

    it('clears up the input contents', function() {
      expect(input.value).toEqual('');
    });
  });

  describe('when showing next stage', function() {
    let stages = document.querySelectorAll('g');

    beforeEach(function() {
      addToDo('I will be removed');
      todos.lastChild.click();
    });

    it('strokes todo when user clicks it', function() {
      expect(list.todos.lastChild.classList).toContain('stroked');
    });

    it('removes stroked todo when user clicks it again', function() {
      todos.children[0].click();
      expect(todos.children[0]).toEqual(undefined);
    });

    it('shows the first stage on first user click', function() {
      expect(stages[0].classList).not.toContain('hidden');
    });

    it('shows the next stage on next user click', function() {
      [1, 2, 3].forEach(function() {
        addToDo('irrelevant');
        todos.lastChild.click();
      });

      expect(stages[3].classList).not.toContain('hidden');
    });

    it('stops after adding all stages', function() {
      function removeAll() {
        Array.from(Array(list.maximumStages).keys()).forEach(function(irrelevant) {
          addToDo('irrelevant');
          todos.lastChild.click();
        });
      }

      expect(removeAll).not.toThrowError(TypeError, /null/);
    });
  });

  function addToDo(value) {
    input.value = value;
    list.addToDo();
  }

  function resetInput() {
    input.value = '';
  }

  function resetToDos() {
    while (todos.hasChildNodes()) {
      todos.removeChild(todos.lastChild);
    }
  }
});
