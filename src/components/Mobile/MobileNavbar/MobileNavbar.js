import React from 'react';
import MobileMenu from '../MobileMenu';

import './styles.css';

function MobileNavbar(props) {
	return (
		<nav id="MobileNavbar">
			<MobileMenu /> 
			<h1 id="navbarTitle">Celine Fong</h1>
		</nav>
	);
}

export default MobileNavbar;