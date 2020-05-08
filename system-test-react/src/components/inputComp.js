import React from 'react';
import { Container } from "react-bootstrap"

const InputComp =(props)=>{
    return (
        <div style={{'display':'flex', 'flex-direction':'row'}}>
        <h6> {props.fieldName}</h6><span>&nbsp;&nbsp;&nbsp;</span>
        <input className="form-control"  type="text" placeholder={props.placeHolderData} onChange={props.handleInput}/>
        </div>

    )
}

export default InputComp