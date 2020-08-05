import React, { useState } from 'react'
import UserContext from './Context'

const App = (props) => {
    const [user, setUser] = useState(null)

    const logIn = (user) => {
        setUser({...user, isLoggedIn: true})
    }

    const logOut = () => {
        document.cookie = 'x-auth-token='
        setUser({isLoggedIn: false})
    }

    return (
        <UserContext.Provider value={{
            isLoggedIn,
            user,
            logIn,
            logOut
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default App