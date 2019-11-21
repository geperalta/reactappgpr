import React, {Component} from 'react';
//import PropTypes from 'prop-types';

import Task from './Task';

class Tasks extends Component {
    render (){
        return this.props.tasks.map(task => 
        <Task 
            task={task} 
            key={task.id} 
            deleteTask={this.props.deleteTask}
            checkDone={this.props.checkDone} 
        /> ); 
    }
}

//me generaba errores al requerir el tipo array y mejor lo comenté
/* Task.propTypes = {
    tasks: PropTypes.array.isRequired
} */

export default Tasks;