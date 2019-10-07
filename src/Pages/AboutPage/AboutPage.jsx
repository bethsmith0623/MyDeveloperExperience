import React, {Component} from 'react';
import styles from './AboutPage.module.css';

class AboutPage extends Component {
	render() {
		return (
			<h3>About</h3>
			<p>Hi folks. I'm Beth. I'm a full-stack developer 
				who loves the web and is fascinated with all the 
				cool things developers and engineers can make.</p>
			<br/>
			<p>I am a recent graduate from General Assembly's
				Software Engineering Immersive Course (October 2019).
				Every day I am shocked when I think back to how
				little I knew about coding before and what I can do 
				now. In the course of 12 short weeks we covered the 
				following programming languages:</p>
			<ul>
				Unit 1
				<li>HTML</li>
				<li>CSS </li>
				<li>JavaScript</li>
				Unit 2
				<li>MongoDB</li>
				<li>NodeJS</li>
				<li>ExpressJS and Express generator</li>
				<li>Mongoose</li>
				Unit 3
				<li>PostgreSQL</li>
				<li>Python3</li>
				<li>Django</li>
				Unit 4
				<li>MongoDB</li>
				<li>ExpressJS</li>
				<li>ReactJS</li>
				<li>NodeJS</li>
			</ul>
			<br/>
			<p>Along we way we had some Computer Science topics 
				sprinkled in as well as side topics like Bootstrap,
				Materialize, Socket.io, consuming APIs, wireframing,
				ERDs and planning using a Trello board.</p>
			<br/>
			<p>During my time at GA I created several things, but I
				an especially proud of my unit projects. </p>
			<br/>
			<p><strong>Unit 1: HTML/CSS/JavaScript Front-End Only.</strong>
				I created a Roulette game. I didn't realize
				until after I was in the thick of it's creation that
				I needed to learn Canvas in order to create the 
				spinning wheel. At the time, I iceboxed that feature.
				I plan to work on it in my free time to make the game
				complete.
			<a href="https://github.com/bethsmith0623/Roulette">Roulette Game</a>
			</p>
			<br/>
			<p><strong>Unit 2: MongoDB/Express/Node stack</strong>
				For the second project I created an app
				with the purpose of helping pet owners keep track
				of all their pet care providers. I know I sometimes
				struggle to remember when to schedule my furbabies'
				next groomer visit or their annual trip to the vet.
				This app solves all that. I hope to flesh it out and
				even get providers themselves involved with the 
				ability to send reminders to connected users. I really 
				had a blast creating this one.
				<a href="http://pet-central.herokuapp.com/">Pet Central</a>
			</p>
			<br/>
			<p><strong>Unit 3: Django/Python/PostgreSQL stack</strong>
				This was a group project to give us 
				experience working in a team setting. Our instructor
				chose the teams to simulate real-life: we don't 
				usually get to choose our coworkers. Ruben, Michael,
				and I decided to create an app to enable people
				to search for volunteer opportunities. This was
				a very informative project, as it also gave us
				practice with Github workflow.
				<a href="https://volungo.herokuapp.com/">Volun-Go!</a>
			</p>
				<br/>
			<p><strong>Unit 4: MERN stack</strong>
				I have wanted to build a <strike>blog</strike>, I 
				mean a Content Management Application for a 
				few years. I decided to use this oppertunity to 
				finally realize that goal. This site is the fruit
				of this labor. I already have the domain purchased
				and will be deploying it through Netlify as well
				as the required Heroku deployment.
				<a href="http://my-developer-experience.herokuapp.com/">My Developer Experience</a>
			</p>
		)
	}

}

export default AboutPage;