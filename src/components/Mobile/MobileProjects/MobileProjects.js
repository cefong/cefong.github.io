import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './styles.css';

// import images
import JuanWick1 from '../../../assets/JuanWick1.jpg';
import JuanWick2 from '../../../assets/JuanWick2.gif';
import JuanWick3 from '../../../assets/JuanWick3.gif';
import JuanWick4 from '../../../assets/JuanWick4.jpg';

import Weathery from '../../../assets/weatheryPreview.jpg';
import Galaga from '../../../assets/GalagaVideo.gif';
import Snowboard from '../../../assets/snowboard.jpeg';
import WindTurbine from '../../../assets/windTurbine.jpg';

// controls a reel of projects
function MobileProjects() {
	return (
		<div id="projects">
			<h1>projects</h1>
			<Carousel className = "featureSlide">
			  <Carousel.Item>
			    <img
			      className="d-block featureSlide"
			      src={JuanWick1}
			      alt="Opening screen to Juan Wick"
			    />
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block featureSlide"
			      src={JuanWick2}
			      alt="Juan Wick gameplay"
			    />
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block featureSlide"
			      src={JuanWick3}
			      alt="Juan Wick gameplay"
			    />
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block featureSlide"
			      src={JuanWick4}
			      alt="Juan Wick Cinematic Screen"
			    />
			  </Carousel.Item>
			</Carousel>
			<h3>Juan Wick: The Game</h3>
			<p>With no prior experience with C# or Unity, my team of four members managed to create a complete game with four levels in 48 hours for the Yeehaw Hacks hackathon hosted by Major League Hacking. 
			Since we were unable to find free assets that suited our needs, we created original art and soundtracks for our game. 
			I was responsible for scripting the heads up display, enemy bots, player movement, shooting mechanism and created all the art for the game. 
			<br /> <br /> It was my first endeavour into game development, but I had an incredible time and look forward to improving my skills in the field. 
			We are currently working on upgrades to the game, making it mobile friendly, and hoping to publish our game for play on the site itch.io by December!

			<br /><br /> Read more about our project here: <a href='https://devpost.com/software/juan-wick' target="_blank" rel="noreferrer noopener" > Our Devpost Submission </a>
			<br /> Play the game here (only on desktop, for now!): <a href='https://connect.unity.com/mg/other/juan-wick-1' target="_blank" rel="noreferrer noopener" > Juan Wick: The Game </a></p>
			<a href='https://github.com/cefong' target="_blank" rel="noreferrer noopener" ><h3>see more...</h3></a>
			<Carousel className="projectSlide">
			  <Carousel.Item>
			    <img
			      className="d-block projectSlide"
			      src={Weathery}
			      alt="Weathery"
			    />
			    <Carousel.Caption>
			      <a href='https://github.com/cefong/weathery' target="_blank" rel="noreferrer noopener" className='CarouselCaption' id="weatheryTitle">Weathery</a>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100 projectSlide"
			      src={Galaga}
			      alt="Arduino Galaga Project"
			    />
			    <Carousel.Caption>
			      <a href='https://github.com/cefong/CMPUT275FinalProject' target="_blank" rel="noreferrer noopener" className="CarouselCaption">Galaga on Arduino</a>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
		</div>
	);
}

export default MobileProjects;