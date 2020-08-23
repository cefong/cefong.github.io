import React from 'react';

import Arduino from '../../../assets/icons/arduinoIcon.png';
import CSharp from '../../../assets/icons/c#Icon.png';
import CPlusPlus from '../../../assets/icons/c++Icon.png';
import CSS from '../../../assets/icons/css3Icon.png';
import Github from '../../../assets/icons/githubIcon.png';
import HTML from '../../../assets/icons/htmlIcon.png';
import JavaScript from '../../../assets/icons/javascriptIcon.png';
import Office from '../../../assets/icons/officeIcon.png';
import Python from '../../../assets/icons/pythonIcon.png';
import ReactIcon from '../../../assets/icons/reactIcon.png';
import Unity from '../../../assets/icons/unityIcon.png';
import VStudio from '../../../assets/icons/vsIcon.png';

import './styles.css';

function MobileSkills(props) {
	return (
		<div id="skills">
			<h2>skills</h2>
			<img src={ CPlusPlus } alt='C++ Icon' className='skillsIcon'/>
			<img src={ Python } alt='Python Icon' className='skillsIcon'/>
			<img src={ HTML } alt='HTML Icon' className='skillsIcon'/>
			<img src={ CSS } alt='CSS Icon' className='skillsIcon'/>
			<img src={ JavaScript } alt='Javascript Icon' className='skillsIcon'/>
			<img src={ ReactIcon } alt='React Icon' className='skillsIcon'/>
			<img src={ Office } alt='Office Icon' className='skillsIcon'/>
			<img src={ CSharp } alt='C# Icon' className='skillsIcon'/>
			<img src={ Unity } alt='Unity Icon' className='skillsIcon'/>
			<img src={ VStudio } alt='VStudio Icon' className='skillsIcon'/>
			<img src={ Github } alt='Github Icon' className='skillsIcon'/>
			<img src={ Arduino } alt='Arduino Icon' className='skillsIcon'/>
		</div>
	);
}

export default MobileSkills;