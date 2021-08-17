import React from 'react'

export default function Task(props) {
    const{task}=props;
    return (
        <p>
           {props.children}
        </p>
    )
}
