import React from 'react'
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import '../styles/left.css'
import { FaTwitter, FaHome, FaHashtag, FaRegBell, FaWhatsapp, FaBookmark } from "react-icons/fa";
import { IconContext } from "react-icons";
export default function Left() {
    return (
        <div className="left-container">
            
            <IconContext.Provider value={{ style: {fontSize: '30px', color: "white",}}}>
                <div>
                    <FaTwitter />
                </div>
            </IconContext.Provider>
            <Nav vertical>
                <NavItem style={{ margin: '7px' }}>
                    <NavLink color="primary" href="#" style={{ fontSize: '22px', color: "white", paddingLeft: "0" }}><FaHome />  Home</NavLink>
                </NavItem>
                <NavItem style={{ margin: '7px' }}>
                    <NavLink href="#" style={{ fontSize: '22px', color: "white", paddingLeft: "0" }}><FaHashtag /> Explore</NavLink>
                </NavItem>
                <NavItem style={{ margin: '7px' }}>
                    <NavLink href="#" style={{ fontSize: '22px', color: "white", paddingLeft: "0" }}><FaRegBell /> Notifications</NavLink>
                </NavItem>
                <NavItem style={{ margin: '7px' }}>
                    <NavLink href="#" style={{ fontSize: '22px', color: "white", paddingLeft: "0" }}><FaWhatsapp /> Messages</NavLink>
                </NavItem>
                <NavItem style={{ margin: '7px' }}>
                    <NavLink href="#" style={{ fontSize: '22px', color: "white", paddingLeft: "0" }}><FaBookmark /> Bookmarks</NavLink>
                </NavItem>
                <Button color="primary">Tweet</Button>
            </Nav>
        </div>

    )
}