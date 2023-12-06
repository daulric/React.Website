import {Fragment} from 'react'

function description(props) {
    return (
        <Fragment>
            <div class={props.name} id={props.name}>
                <h1>{props.question}</h1>
                <p>{props.answer}</p>   
            </div>    
        </Fragment>
    )
}

export default description;