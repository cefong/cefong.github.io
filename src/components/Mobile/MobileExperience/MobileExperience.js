import React from 'react';

import './styles.css';

function MobileExperience() {
	return (
		<div id="experience">
			<h1>experience</h1>
			<div className="job">
				<h3>Viva Musica Academy</h3>
				<p>As a music teacher at Viva Musica Academy, I was reponsible for teaching students of all ages to play the piano and violin, as well as
				teaching music theory. I often draw on the analytical and creative skills I acquired during my time at Viva Musica to inform my developer habits.
				As a teacher, I would often need to break down complex ideas to a step-by-step solution for my students, similar to how a program is simply
				a set of step-by-step instructions of a complex task a computer needs to accomplish. 
				<br /> <br />I also gained valuable troubleshooting skills while trying to determine the root cause of issues in my students' performances. For example, one of my students struggled to keep 
				her fingers curved while playing the piano. Working together with her, we determined that because she couldn't reach the ground with her feet, her posture wasn't straight, which meant her wrists dropped as she played, causing the problem
				with keeping her fingers curved. We solved the problem by getting a small stool to rest her feet on as she played, and her progress skyrocketed from there! I find these problem solving skills
				invaluable as a developer - it is crucial to track down bugs to their root cause to solve each problem at hand.
				<br /><br /> Aside from the analytical skills, I learned how to communicate well with clients as a teacher, from communicating with
				parents to set goals for their children's musical education, to representing the studio at public engagement events and encouraging others to pursue a 
				music journey. </p>
			</div>
			<div className="job">
				<h3>Sustainability Coordinator</h3>
				<p>I've always been really passionate about sustainability, and joining the Sustainability branch of the Engineering Students' Society at my university has 
				helped me create a tangible positive impact on the environment. This past summer, a team member and I began creating content for a series on the intersection between sustainability and the 
				STEM field. We've had the most wonderful opportunities to interview inspirational university students launching sustainability initiatives in their community, to Google Brain researchers working
				on using deep learning models to prevent illegal deforestation. Speaking with these people really opened my mind to the possibilities and applications of the technology I hope to 
				be a part of developing in the future.</p>
			</div>
		</div>
	);
}

export default MobileExperience;