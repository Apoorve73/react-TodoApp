import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header style={headerStyler}>
            <h1>ToDo App</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}
const headerStyler={
    background: '#333',
    color:'#fff',
    textAlign: 'center',
    padding:'10px'
}

const linkStyle={
    color:"#fff"
}

export default Header;
