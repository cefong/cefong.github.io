import React from 'react';

import './styles.css';

import Img from 'react-cool-img';
import profile from '../../../assets/squareWebsiteProfile.jpg';

function MobileProfile(props) {
	return (
		<div id="profile">
			<Img
				id="profilePicture"
				src={profile} 
				alt="Me!"
			/>
			<p id="hi">Hi!</p>
			<p id="profileParagraph">My name is Celine, and I'm a computer engineering student at the University of Alberta. 
			I'm interested in many aspects of technology, from its role in making our daily lives a little more convenient with IoT and embedded systems, 
			to its importance in tackling issues in medicine and sustainability with advanced technologies like deep learning applications in medical imaging analysis. 
			In my spare time, you'll catch me creating content for my series on sustainability, reading, listening to a podcast, spending some time in the mountains, or hanging out with my dog!
			</p>
		</div>
	);
}

export default MobileProfile;