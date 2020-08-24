import React, { Component } from 'react';
import Particles from 'react-particles-js';

import './styles.css';

import MobileNavbar from '../MobileNavbar';
import MobileProfile from '../MobileProfile';
import MobileProjects from '../MobileProjects';
import MobileExperience from '../MobileExperience';
import MobileSkills from '../MobileSkills';
import MobileAwards from '../MobileAwards';
import MobileButtons from '../MobileButtons';
import MobileFooter from '../MobileFooter';
import MobileMenu from '../MobileMenu';

function MobileLayout(props) {
	console.log("got to mobile layout");
	return (
		<div id="MobileLayout">
			<div id="page-wrap">
				<Particles
					canvasClassName="page-wrap"
					width="100%"
					height="100%"
				    params={{
					    "particles": {
					        "number": {
					            "value": 200
					        },
					        "size": {
					            "value": 3
					        }
					    },
					    "interactivity": {
					        "events": {
					            "onhover": {
					                "enable": true,
					                "mode": "repulse"
					            }
					        }
					    }
					}} 
					className="particles"
					/>
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