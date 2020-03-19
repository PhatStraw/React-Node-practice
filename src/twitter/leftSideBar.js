import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../styles/left.css'

export default function Left() {
    return (
        <Nav vertical>
            <NavItem>
                <NavLink color="primary" href="#">Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Link</NavLink>
            </NavItem>
        </Nav>
    )
}