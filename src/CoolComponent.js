import React, {useContext} from 'react'
import {Context} from './Store'

function CoolComponent() {
    const [state, setState] = useContext(Context)

    const handleClick = () => {
        const newPerson = {
            name: 'Nitesh',
            email: 'nitesh@gmail.com'
        }
        setState(newPerson)
    }

    return (
        <>
            <h2>Cool Component</h2>
            <p>Name: {state.name}</p>
            <p>Email: {state.email}</p>
            <button onClick={handleClick}>Show new user</button>
        </>
    )
}

export default CoolComponent
