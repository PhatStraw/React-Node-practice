import React from 'react'
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import '../styles/left.css'
import { FaTwitter, FaHome, FaHashtag, FaRegBell, FaWhatsapp, FaBookmark } from "react-icons/fa";
import { IconContext } from "react-icons";
export default function Left() {
    return (
        <div className="left-container">
            
            <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>
                <div>
                    <FaTwitter />
                </div>
            </IconContext.Provider>
            <Nav vertical>
                <NavItem style={{ margin: '7px' }}>
                    <NavLink color="primary" href="#" style={{ fontSize: '22px' }}><FaHome /> Home</NavLink>
                </NavItem>
                <NavItem style={{ margin: '7px' }}>
                    <NavLink href="#" style={{ fontSize: '22px' }}><FaHashtag /> Explore</NavLink>
                </NavItem>
                <NavItem style={{ margin: '7px' }}>
                    <NavLink href="#" style={{ fontSize: '22px' }}><FaRegBell /> Notifications</NavLink>
                </NavItem>
                <NavItem style={{ margin: '7px' }}>
                    <NavLink href="#" style={{ fontSize: '22px' }}><FaWhatsapp /> Messages</NavLink>
                </NavItem>
                <NavItem style={{ margin: '7px' }}>
                    <NavLink href="#" style={{ fontSize: '22px' }}><FaBookmark /> Bookmarks</NavLink>
                </NavItem>
                <Button color="primary">Tweet</Button>
            </Nav>
        </div>

    )
}