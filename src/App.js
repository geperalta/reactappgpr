import React, { Component } from 'react';
//importando el enrutador para web, Router para llamarlos, Route para definirlos, Link para escribirlos y picarles
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import tasks from './sample/task.json';

//Importando los componentes
import Tasks from './component/Tasks';
import TaskForm from './component/TaskForm';
import Posts from './component/Posts';

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

  deleteTask = (id) => {
    const newTask = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTask})
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: newTasks})
  }
//{addTask= agrega una propiedad (que es una func) a la funcion}

//Route va dentro de Router y dentreo de Router van mis elementos a renderizar (TaskForm y Taks)
  render(){
    return <div>
      <Router>

          <Link to='/'>Home</Link>
          <br/>
          <Link to='/posts'>Posts</Link>
          

          <Route exact path='/' render={()=>{
            return <div>
              <br/>
              <TaskForm addTask={this.addTask}/>  
              <Tasks 
                tasks={this.state.tasks} 
                deleteTask={this.deleteTask} 
                checkDone={this.checkDone}
              />
            </div>
          }}>
          </Route>

          <Route path='/posts' component={Posts} />

      </Router>
      
  </div>
  }
}

export default App;
