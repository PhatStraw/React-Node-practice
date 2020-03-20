import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'reactstrap'

import '../styles/right.css'

export default function Right() {
    return (
        <div className="right-wrapper">
                <ListGroup flush>
                <h3>Trends For You</h3>
                    <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                </ListGroup>
        </div>

    )
}