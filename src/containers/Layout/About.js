import React from 'react';
import classes from './About.module.css';
import State1 from 'F:/mushroom killer/MyIODorm/my-iolani-dorm/src/assets/Phases/d1.jpg';
import State2 from 'F:/mushroom killer/MyIODorm/my-iolani-dorm/src/assets/Phases/d2.jpg';
import State3 from 'F:/mushroom killer/MyIODorm/my-iolani-dorm/src/assets/Phases/d3.jpg';
import State4 from 'F:/mushroom killer/MyIODorm/my-iolani-dorm/src/assets/Phases/d4.jpg';


const About = () => {
	return (
		<html className={classes.About}>
            <head>
                <link rel="stylesheet" href="frostedGlass.css"/> 
            </head>
			<br />
			<br />
			<br />
			<header>
				<div>
					<h1>User Guide</h1>
                    </div>
				
			</header>
            <body>
                <br />
			<h3>How to use this site?</h3>
			<div>
				<h4>New Policies</h4>
				<p>
					1, A terminal of this site will be launched in the laundry
					room. That's the only place you are able to operate this
					site. You can always check the status of the machines.
				</p>
				<p>
					2, For anytime you do your laundry, you should register on the
					terminal accordingly.
				</p>
				<p>
					3, Once your laundry is done washing/drying, a timer will count
					down until you take out your laundry and sign up on the
					terminal.
				</p>
				<p>
					4, After the timer goes to zero, anyone is allowed to take out
					the laundry, but one should either move it to a dryer and
					sign up accordingly or move it to the user's laundry
					bag/laundry jail
				</p>
				<p>
					5, You are recommend to put your laundry bag in front of the
					dryer in case others want to remove your laundry
				</p>
			</div>
			<div>
				<h3>Terminal User Guide</h3>
				<h4>
					There are basically four states of either a washer or a
					dryer
				</h4>
				<ul>
					<li>
						<img src={State1} /> <strong>State 1: Empty</strong>{' '}
						<p>This is when you can put in your clothes</p>
					</li>
					<li>
						<img src={State2} /> <strong>State 2: Running</strong>
						<p>
							This is when you can check the time remaining or the
							user
						</p>
					</li>
					<li>
						<img src={State3} /> <strong>State 3: Waiting</strong>
						<p>
							This is when the laundry is done. If the user can
							not take it out in 15 minutes, you can take out the
							laundry{' '}
						</p>
					</li>
					<li>
						<img src={State4} />{' '}
						<strong>State 4: Out of Order</strong>
						<p>This is when the machine is not working</p>
					</li>
				</ul>
			</div>
			<div>
				<h3>How can this site make your life easier?</h3>
				<p>
					{' '}
					1. There will be much less laundry jam meaning your time of
					doing laundry becomes more flexible
				</p>
				<p>
					{' '}
					2. You can check this site to see if there is empty spots
					before you go downstairs{' '}
				</p>{' '}
				<p></p>
			</div>

			<h4>
				This site is created completely by React. Icons were made by
				Scarlett 20'
				<br />
				Source code has been set public at{' '}
				<a href="https://github.com/Lempickax/Lempickax.github.io">
					Github
				</a>
			</h4>
            </body>
		</html>
	);
};

export default About;
