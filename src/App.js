import React, {Component} from 'react';
//import { Button } from '../node_modules/react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './bootstrap/css/bootstrap.css'
//import Todoitems from './components/Todoitems';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import {v4 as uuid} from 'uuid'
// import axios from 'axios'
import './App.css'

//import { render } from '@testing-library/react';

// as es6 we may use
//class App extends Component
// render() (<div...)
class App extends Component{
  state = {
        todos: [{
          id: uuid(),
          title: "Example Todo",
          completed: "false"
        }
        ]
    }

    // componentDidMount(){
    //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //   .then(res => this.setState({todos: res.data})) 
    // }

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
        todo.id !== id)]})
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
      // axios.post("https://jsonplaceholder.typicode.com/todos", {
      //   title,
      //   comlpeted: false
      // })
      // .then(res => this.setState({
      //   todos: [...this.state.todos, res.data] 
      // }))
    }


    render(){
    //console.log(this.state.todos);  //Render App Component
    return (
      <Router>
    <div className="App">
    <div className="container">
    <Header/>
    <Route exact path="/" render={props => (
      <React.Fragment>
      <AddTodo addTodo={this.addTodo} />
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />  
      {/* <Todoitems/> */}
      {/* Add todos list as prop/attribute to the Todos Component */}
      {' '}
      </React.Fragment>
    )}/>
    <Route path="/about" component={About}/>

    </div>
    </div>
    </Router> 
  )
  }

}

export default App;
