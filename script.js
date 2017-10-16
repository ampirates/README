var todoList = {
  todos: [],
  displayTodos: function() {
    if(this.todos.length === 0) {
      console.log('Your to do list is empty!');
    } else {
      console.log('My to dos:');
      for(var i=0 ; i < this.todos.length; i++) {
        if(this.todos[i].completed===true) {
          console.log('(x)',this.todos[i].todoText);
        } else {
          console.log('( )',this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText : todoText,
      completed : false
    });
 
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  
  deleteTodo: function(position) {
    this.todos.splice(position,1);
  },
  
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed=!todo.completed;
  },
  
  toggleAll: function(){
    var totalTodos=this.todos.length;
    var completedTodos = 0;
    
    for(i=0;i<totalTodos;i++){
      if(this.todos[1].completed===true){
        completedTodos++;
      }
      else{
        this.todos[1].completed=true;
      }
    }
  }
};

var handler = {

  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value='';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value='';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() { 
    var todosUl = document.querySelector('ul')
    todosUl.innerHTML = '';
    
    for (var i=0; i< todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      
      if (todo.completed === true) {
        todoTextWithCompletion = '(x)' + todo.todoText;
      } else {
        todoTextWithCompletion = '( )' + todo.todoText;
      }
      
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}
