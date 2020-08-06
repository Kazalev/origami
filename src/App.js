import React, { useState, Component } from 'react'
import UserContext from './Context'
import { render } from '@testing-library/react'

function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^]*)(;|$)')
    return cookieValue ? cookieValue[2] : null
}

// const App = (props) => {
//     const [user, setUser] = useState(null)
//     const [isLoggedIn, setIsLoggedIn] = useState(false)

//     const logIn = (user) => {
//         setUser({...user, isLoggedIn: true})
//     }

//     const logOut = () => {
//         document.cookie = 'x-auth-token='
//         setUser({isLoggedIn: false})
//     }

//     return (
//         <UserContext.Provider value={{
//             isLoggedIn,
//             user,
//             logIn,
//             logOut
//         }}>
//             {props.children}
//         </UserContext.Provider>
//     )
// }


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: null,
            user: null
        }
    }

    logIn = (user) => {
        this.setState({
            isLoggedIn: true,
            user
        })
    }

    logOut = () => {
        document.cookie = 'x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'
        this.setState({
            isLoggedIn: false,
            user: null
        })
    }

    componentDidMount() {
        const token = getCookie('x-auth-token')

        if (!token) {
            this.logOut()
            return
        }

        fetch('http://localhost:9999/api/user/verify', {
            method: "POST",
            body: JSON.stringify({
                token
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(promise => {
            console.log(promise)
            return promise.json()

        }).then(response => {
            if (response.status) {
                this.logIn({
                    username: response.user.username,
                    id: response.user._id
                })
            } else {
                this.logOut()
            }
        })
    }

    render() {
        const { isLoggedIn, user } = this.state

        if (isLoggedIn === null) {
            return (
                <div>Loading....</div>
            )
        }

        return (
            <UserContext.Provider value={{
                isLoggedIn,
                user,
                logIn: this.logIn,
                logOut: this.logOut
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default App