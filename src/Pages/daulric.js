import Navbar from '../tools/navbar'
import {Fragment} from 'react'

import profile_pic from '../images/profile.jpg'

function daulric_page() {
    return (
        <Fragment>
            <Navbar/>
            <br/>
            
            <div class='ua-container'>
                <h1 class='ua-question'>Who is Ulric?</h1>
                
                <p class="ua-profile">
                    My name is Ulric.
                    <br/> <br/>
                    I am currently a Year 1 Student at the TA Marryshow Community College.
                    <br/> <br/>
                    I am currently studying Information Technology which is one of the best course and i recommend you study it.
                    <br/> <br/>
                    I like women, programming and other various types of things
                    <br/> <br/>
                </p>

                <br/>
                <img src={profile_pic} alt='Profile Pic' class='ua-profile-pic'>

                </img>

            </div>

        </Fragment>
    )
}

export default daulric_page;