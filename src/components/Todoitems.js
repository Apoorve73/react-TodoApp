import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todoitems extends Component {
    getStyle = () =>{
        return {
            background: this.props.todo.completed ? '#fff' : '#a8a1a2bd',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            padding: '18px',
            border: this.props.todo.completed ?  '1px #000 solid' : '1px #000 dashed'
        }
    }

    // markComplete = (e) => { //Arrow function using this.markComplete.bind(this)
    //     //e.preventDefault()
    //     console.log(this.props)
        
    // }
    render() {
        const {id, title} = this.props.todo
        return (
            <div style={this.getStyle()}>
                <h3>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{'  '}
                {title}
                <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)} className="btn btn-danger">Delete</button></h3> 
            </div>
        )
    }
}

Todoitems.propTypes = {
    todo: PropTypes.object.isRequired   //.isReq means it need to have a single child
}    

const btnStyle = {
    float:'right',
    cursor: 'pointer'
}

Todoitems.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}  

export default Todoitems
