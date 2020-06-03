import React, {Component} from 'react';
//import { Button } from '../node_modules/react-bootstrap';
import './bootstrap/css/bootstrap.css'
//import Todoitems from './components/Todoitems';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import {v4 as uuid} from 'uuid'
import './App.css'
//import { render } from '@testing-library/react';

// as es6 we may use
//class App extends Component
// render() (<div...)
class App extends Component{
  state = {
        todos: [{
                id: uuid(),
                title: "Git and Github",
                completed: false
            },
            {
                id: uuid(),
                title: "Git",
                completed: false
            },
            {
                id: uuid(),
                title: "Github",
                completed: false
            }
        ]
    }
    markComplete = (id) => {
      this.setState({ todos : this.state.todos.map(todo =>{ //mapping for each todo in todos
        if(todo.id === id)
        {
          todo.completed = !todo.completed  //toggle the value
        }
        return todo
      })
    })
    }

    //DEl Todo
    delTodo = (id) =>{
      this.setState({todos : [...this.state.todos.filter(todo => 
        todo.id !== id
        )]
      })
    }

    //addTodo
    addTodo = (title) =>{
      //console.log(title)
      const newTodo = {
        id: uuid() ,
        title: title,
        completed: false 
      }
      this.setState({ todos: [...this.state.todos, newTodo] })
    }

    render(){
    console.log(this.state.todos);  //Render App Component
    return (
    <div className="App">
    <div className="container">
    <Header/>
    <AddTodo addTodo={this.addTodo} />
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />  
      {/* <Todoitems/> */}
      {/* Add todos list as prop/attribute to the Todos Component */}
      {' '}
    </div>
    </div>
  );
  }

}

export default App;
