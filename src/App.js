import React, { Component } from 'react';
import './App.css';

import tasks from './sample/task.json';

//Importando los componentes
import Tasks from './component/Tasks';
import TaskForm from './component/TaskForm';

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    //console.log(title, description)
    //en la const newTask el titulo va a recibir el tiulo de arriba de addtask que le estan pasando
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  render(){
    return <div>
      <TaskForm addTask={this.addTask}/>  {//{addTask= agrega una propiedad (que es una func) a la funcion}
      <Tasks tasks={this.state.tasks} />
  }</div>
  }
}

export default App;
