import React from 'react';
import Button from 'react-bootstrap/Button'

import './styles.css';

function MobileButtons() {
	return (
		<div id="contact">
			<Button variant="primary" size="lg" block id="resume" href="https://drive.google.com/file/d/1HgpBmwuqAFufuuJItZEvko1Ynb4uRvvz/view?usp=sharing">
				view my resume
			</Button>
			<Button variant="primary" size="lg" block id="contactButton" href="mailto:cfong@ualberta.ca">
				let's chat!
			</Button>
		</div>
	);
}

export default MobileButtons;