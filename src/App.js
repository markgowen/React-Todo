import React from 'react';

// Components
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
  {
    task: '',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: todoData
    };
  }

  toggleTodo = id => {
    console.log(id);
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    console.log(newTask);
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  clearTask = () => {
    this.setState({
      tasks: this.state.tasks.filter(item => !item.completed)
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    
    return (
      <div className='App'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        <TodoList
          tasks={this.state.tasks}
          toggleTodo={this.toggleTodo}
          clearTask={this.clearTask}
        />
      </div>
    );
  }
}

export default App;
