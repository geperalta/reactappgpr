import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description);
        //console.log(this.state); ver el estado
        e.preventDefault();
    }

    onChange = e => {
        //console.log(e.target.name, e.target.value) ver los valores de cambio y de donde son
        this.setState({
            [e.target.name]: e.target.value,

        })
    }

    render (){
        //this.props.addTask('Titulo 01','Descripcion 01'); pasar este titulo y desc a los props de app.js
        return(
            <form onSubmit={this.onSubmit}>
                <input 
                name='title'
                type='text' 
                placeholder='Write a task' 
                onChange={this.onChange} 
                value={this.state.title}/>
                <br/>
                <br/>
                <textarea 
                name='description'
                placeholder='Write a description' 
                onChange={this.onChange} 
                value={this.state.description}>
                </textarea>
                <input type='submit'/>
            </form>
        )
    }

}