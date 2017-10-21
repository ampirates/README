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




var potenciaGerador = [75, 1000, 5000] ;                    // [ kW ] 
var tensaoRede;                                             // [ V ]        Volts
var tempo;                                                  // [ h ]      
var energia;                                                // [ kWh ]    
var custoGerador;                                           // [ R$ ]        FIAT
var tarifaDistribuidora = [ ] ;                             // [ R$ / kWh ] 
var pingoRede = true ;                                      // boolean
var HSP = [ ] ;                                             // 
var eficienciaSistema;                                      // [ - ] 
var inflacao;                                              // [ % ]
var estabelecimentos = [ ] ; 

var producaoEnergia = function( potenciaGerador, tempo, eficiencia, HSP ) { 
  energia = ( potenciaGerador * tempo * eficiencia * HSP ); 
  } ;

var custoLocacao = function (producaoEnergia, desconto, tarifaDistribuidora) {
  for ( i = 1 ; i > 26 ; i++) { 
    valorLocacao = producaoEnergiaAnual * ( tarifaDistribuidora * ( 1 + ( inflacao ^ i ))) ;
    } ;
  } ;
  
var adicionarEstabelecimento = function ( novoEstabelecimento, tabelaDescontos, custoEnergiaMedio) {
  nomesEstabelecimentos.append(novoEstabelecimento),
  novoEstabelecimentos.tabelaDescontos = tabelaDescontos,
  novoEstabelecimentos.custoEnergiaMedio = custoEnergiaMedio,
  } ;

var adicionarUsuarioFinal = function ( investimentoInicial, mensalidade, prazoMensalidade, estabelecimentosFavoritos ) {

  }


DataBase: { 

HSP = [ 
        curitiba, 5,4;
        saoPaulo, 5,8;
        londrina, 5,8;
        salvador, 6,2;
      ]                   // [ cidade, [ kWh / m2 / dia] ] 
  
Custos: { 
  if( potenciaGerador > 75kW ) {
    tensaoRede: BT,                                     //  tensao = 0,11kV / 0,22kV - conexão em baixa tensão
    custoGerador: [ 400mil telhado ; 450mil solo], 
    tarifaDistribuidora: [ R$0,60 ; ... ; R$0,90], 
    pingoRede: True,
    } 
  
  if(potenciaGerador > 1MW ) { 
    tensaoRede: MT,                                     //  tensao = 13,8kV / 34,5kV - conexão em média tensão
    custoGerador: [ 4mi telhado ; 5mi solo], 
    tarifaDistribuidora: [ R$0,40 ; ... ; R$0,55], 
    pingoRede: True,                                    // limite do pingo na rede 
    }

  if(potenciaGerador > 5MW ) { 
    tensaoRede: MT,                                     //  tensao = 13,8kV / 34,5kV - conexão em média tensão
    custoGerador: [ 20mi telhado ; 25mi solo],          // mais conexão com rede
    tarifaDistribuidora: [ R$0,18 ; ... ; R$0,25], 
    pingoRede: False,                                    // limite do pingo na rede 
    
    // conexão complexa, necessidade de conexão direta em subestação
    // solicitação de acesso à rede para verificar se há bay livre para conexão na subestação mais próxima
    // sem bay livre - custo e obra de reforço - no mínimo 1 ano
    }
} 
