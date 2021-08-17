import React from 'react'

export default function Colorize (props) {
    const {color}=props;
    return (
        <div >
           <p style={{color:color}}>{color}</p> 
        </div>
    )
}
