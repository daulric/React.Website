import {Fragment} from 'react'

import Description from './info_items/description';

function info() {
 
    return (

        <Fragment>
            <br></br> <br></br> <br></br>
            <Description 
                name = "hello"
                question = "Hello There"
                answer = "Hello there i made this site"
            ></Description>

            <br></br>
            <Description
                name= "daulric"
                question="Who is Ulric?"
                answer={<p>
                    Ulric is the guy that made this site!
                    <br></br> <br></br>
                    i go by many names:
                    <ul>
                        <li>daulric</li>
                        <li>middle g</li>
                    </ul>
                </p>}
            ></Description>

            <br></br>
            <Description
                name="topg"
                question = "Who is the Top G"
                answer = {<p>
                    This is the guy who changed some people's life!
                    <br></br> <br></br>
                    His name is Andrew Tate
                    <br></br> <br></br>
                    There are other people like him as well

                </p>}
            ></Description>

            <br></br>
            <Description
                name = "matrix"
                question = "RESIST THE SLAVE MIND"
                answer = {<p> The Matrix was designed by the people who control your world to keep you asleep and to keep you in subjection to their rule.</p>}

            ></Description>
            
        </Fragment>

    )
}

export default info;