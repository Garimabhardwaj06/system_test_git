import * as React from "react"
import { Container } from "react-bootstrap"
import ProductsTblPage from "./guiTable";
import '../App.css';


export let Grid = (props) => {
    return(
        <Container style={{width:"70%"}}>
        <div className="grid-container">
              <div className="item1 gallery-item">{props.item1} </div>
              
              <div className="item2 gallery-item">{props.item2}</div>
              
        </div>
        </Container>
    );
}