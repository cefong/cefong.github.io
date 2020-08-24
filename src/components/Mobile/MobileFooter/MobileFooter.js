import React from 'react';

import GithubIcon from '../../../assets/icons/githubCircle.png';
import LinkedIn from '../../../assets/icons/linkedIn.png';
import Gitconnected from '../../../assets/icons/gitconnected.png';

import './styles.css';

function MobileFooter() {
	return (
		<div id='footer'>
			<a href='https://github.com/cefong' target="_blank" rel="noreferrer noopener" ><img src={GithubIcon} alt='Github Icon' id='githubLink'/></a>
			<a href='https://www.linkedin.com/in/cefong/' target="_blank" rel="noreferrer noopener" ><img src={LinkedIn} alt='LinkedIn Icon' id='linkedInLink' /></a>		
			<a href='https://gitconnected.com/cefong' target="_blank" rel="noreferrer noopener" ><img src={Gitconnected} alt='Gitconnected Icon' id='gitconnectedLink' /></a>	
		</div>
	);
}

export default MobileFooter;