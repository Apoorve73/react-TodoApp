import React from 'react'

function Header() {
    return (
        <header style={headerStyler}>
            <h1>ToDo App</h1>
        </header>
    )
}
const headerStyler={
    background: '#333',
    color:'#fff',
    textAlign: 'center',
    padding:'10px'
}

export default Header;
