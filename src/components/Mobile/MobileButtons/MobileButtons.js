import React from 'react';
import Button from 'react-bootstrap/Button'

import './styles.css';

function MobileButtons() {
	return (
		<div id="contact">
			<Button variant="primary" size="lg" block id="resume" target="_blank" rel="noreferrer noopener" href="https://drive.google.com/file/d/1rdebHNHPkrBKtznqBnr5dz0JEiEn7EEI/view?usp=sharing">
				view my resume
			</Button>
			<Button variant="primary" size="lg" block id="contactButton" target="_blank" rel="noreferrer noopener" href="mailto:cfong@ualberta.ca">
				let's chat!
			</Button>
		</div>
	);
}

export default MobileButtons;