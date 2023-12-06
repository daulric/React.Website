import {Fragment} from 'react'
import NavBar from '../tools/navbar'

function onReturn() {
    window.location.href = "/"
    console.log("works")
}

function error_page() {
    return (
        <Fragment>
            <NavBar />

            <div class='err-div'>
                <h1 class='err-tag'>404: Page Doesn't Exist</h1>
                <p1 class='err-para'>
                    This page doesn't exsist because you got the wrong link or you trynna do something fishy!
                    <br/>
                    Please return to the previous page or the Home page!
                </p1>

                <br/><br/>

                <button onClick={onReturn} class='return-button'>Return</button>

            </div>

        </Fragment>
    )
}

export default error_page;