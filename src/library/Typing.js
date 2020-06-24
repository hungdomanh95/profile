import React from 'react'
import "./TypewriteEffect"
const Typing = (props) => {
    console.log('props: ', props);
    const varText=[
        props.children
    ]
    return (
        <div>
            <b href="" className="typewrite" data-period="1000" data-type={JSON.stringify(props.data)}>
                <span className="wrap"></span>
            </b>
        </div>
    )
}

export default Typing
