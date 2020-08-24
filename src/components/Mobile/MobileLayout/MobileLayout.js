import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import MobileNavbar from '../MobileNavbar';
import MobileProfile from '../MobileProfile';
import MobileProjects from '../MobileProjects';
import MobileExperience from '../MobileExperience';
import MobileSkills from '../MobileSkills';
import MobileAwards from '../MobileAwards';
import MobileButtons from '../MobileButtons';
import MobileFooter from '../MobileFooter';

function MobileLayout(props) {
	console.log("got to mobile layout");
	return (
		<div id="MobileLayout">
			<div id="page-wrap">
				<MobileProfile />
				<MobileProjects />
				<MobileExperience />
				<MobileSkills />
				{/*<MobileAwards />*/}
				<MobileButtons />
				<MobileFooter />
				<MobileNavbar />
			</div>
		</div>
	);
}

export default MobileLayout;