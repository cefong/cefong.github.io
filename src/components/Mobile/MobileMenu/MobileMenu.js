import React from 'react';
import {stack as Menu } from 'react-burger-menu';
import "./styles.css";

export default props => {
	return (
		<Menu {...props}>
			<a id="aboutMeLink" className="menu-item" href="/">About Me</a>
			<a id="projectsLink" className="menu-item" href="#projects">Projects</a>
			<a id="contactLink" className="menu-item" href="/contact">Contact</a>
		</Menu>
	);
}