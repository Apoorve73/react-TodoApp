import React, {Component} from 'react';
import Todoitems from './Todoitems';
import PropTypes from 'prop-types'

// as es6 we may use
//class App extends Component
// render() (<div...)
class Todos extends Component {
render(){
    //console.log(this.props.todos)
    return this.props.todos.map((todo) => (
       // <h3>{ todo.title }</h3>
       <Todoitems todo={todo} key={todo.id} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />    //passing child prop todo to Todoitems
    ))
}
}
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}    

export default Todos;