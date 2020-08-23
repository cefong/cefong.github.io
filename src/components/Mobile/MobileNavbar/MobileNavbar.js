import React from 'react';
import MobileMenu from '../MobileMenu';

import './styles.css';

function MobileNavbar(props) {
	return (
		<nav id="MobileNavbar">
			<MobileMenu right disableAutoFocus pageWrapId={"page-wrap"} outerContainerId={"MobileLayout"}/> 
			<h1 id="navbarTitle">Celine Fong</h1>
		</nav>
	);
}

export default MobileNavbar;