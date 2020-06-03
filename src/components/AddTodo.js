import React, { Component } from 'react'
import '../bootstrap/css/bootstrap.css'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    onChange = (e) => this.setState({ 
        [e.target.name] : e.target.value 
    })

    onSubmit = (e) => {
        e.preventDefault(); //learn
        this.props.addTodo(this.state.title)
        this.setState({ title : '' })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} >
                <input 
                style ={{ flex:'10', padding:'5px' }}
                className ="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-lg"
                type="text" 
                name="title" 
                placeholder="Add a Todo..."
                value = {this.state.title}
                onChange={this.onChange}
                />
                {/* <div className="form-group"> */}
                <button type="submit" 
                style= {{ flex:'1' }}
                className="btn btn-primary">Submit</button>
                {/* </div> */}
            </form>
        )
    }
}

export default AddTodo
