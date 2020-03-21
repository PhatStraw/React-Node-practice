import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

import '../styles/right.css'

export default function Right() {
    return (
        <div className="right-wrapper">
            <div className="list-wrapper">
                <ListGroup flush>
                    <h3 className="right-header">Trends For You</h3>
                    <ListGroupItem style={{ backgroundColor: "rgb(25, 39, 52)",color: "white", minHeight: "100px", borderBottom: "1px solid rgb(56, 68, 77)" }} tag="a" href="#">Cras justo odio</ListGroupItem>
                    <ListGroupItem style={{ backgroundColor: "rgb(25, 39, 52)",color: "white", minHeight: "100px", borderBottom: "1px solid rgb(56, 68, 77)" }} tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem style={{ backgroundColor: "rgb(25, 39, 52)",color: "white", minHeight: "100px", borderBottom: "1px solid rgb(56, 68, 77)" }} tag="a" href="#">Morbi leo risus</ListGroupItem>
                    <ListGroupItem style={{ backgroundColor: "rgb(25, 39, 52)",color: "white", minHeight: "100px", borderBottom: "1px solid rgb(56, 68, 77)" }} tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem style={{ backgroundColor: "rgb(25, 39, 52)",color: "white", minHeight: "100px", borderBottom: "1px solid rgb(56, 68, 77)" }} tag="a" href="#">Vestibulum at eros</ListGroupItem>
                </ListGroup>
            </div>
        </div>

    )
}