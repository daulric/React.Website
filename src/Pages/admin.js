import Navbar from '../tools/navbar'
import {Fragment} from 'react'

function getMessage(message) {
    const submit = document.getElementById("admin-submit")

    console.log(message)
    submit.value = `${message}`

    setTimeout(function () {
        submit.value = "Login"
    }, 2000)
}

function GetUser() {

    const users = [
        { 
            Username: "Ulric", 
            Password: "Password" 
        },

        {
            Username: 'daulric',
            Password: "i am the best"
        }

    ]

    const user = document.getElementById("admin-user") 
    const password = document.getElementById("admin-password")
    

    users.forEach((m) => {

        if ((user.value && password.value) === "") {
            getMessage("no params")
            return
        }

        if (m.Username === user.value && m.Password === password.value) {
            getMessage( "Success!")  
            // window.location.href = `/admin?user=${user.value}&password=${password.value}`
        } else {
            getMessage("Invalid Login!")
        }
    })
}

function AdminPage() {
    return (
        <Fragment>
            <Navbar />
            <br/> <br/>
            <center>
                <h1>Login Here</h1>

                    <table>
                        <tr> 
                            <td class='admin-text' >Username:</td>
                            <td>
                                <input type='text' name='user' class='input-adm' id='admin-user'></input>
                            </td>
                        </tr>

                        <tr>
                            <td class='admin-text' >Password:</td>
                            <td>
                                <input type='password' name='user-pass' class='input-adm' id='admin-password'></input>
                            </td>
                        </tr>

                        <br/>
                        <tr>
                            <td>
                                <input 
                                    type='submit' 
                                    name='submit' 
                                    value='Login' 
                                    class='admin-submit'
                                    id='admin-submit'
                                    onClick={GetUser}
                                />
                            </td>
                        </tr>

                    </table>
            </center>

        </Fragment>

    )
}

export default AdminPage;