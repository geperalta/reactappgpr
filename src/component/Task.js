import React, {Component} from 'react';

import PropTypes from 'prop-types';

class Task extends Component {

    StyleCompleted(){
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'lightgray': 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render(){

        const {task} = this.props;

        return <p style={this.StyleCompleted()}>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox" />
            <button style={btnDelete}>
                x
            </button>
        </p>
    }
}

//Para debuggear y validad que el typo que espera Task.js es object y no otra cosa
Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '15px',
    background: 'red',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;