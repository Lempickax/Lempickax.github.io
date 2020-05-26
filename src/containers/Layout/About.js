import React from 'react';
import classes from './About.module.css';
import State1 from '../../assets/Phases/d1.jpg';
import State2 from '../../assets/Phases/d2.jpg';
import State3 from '../../assets/Phases/d3.jpg';
import State4 from '../../assets/Phases/d4.jpg';



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
			<h3>HOW TO USE</h3>
			<div>
				{/* <h4>HOW TO USE</h4> */}
				<p> 
					1. You are able to make changes to the status of laundry machines using the terminal in the laundry room. 
					You are only able to view this website on your own devices.
				</p>
				<p>
					2. Register on the terminal every time when you do your laundry. A timer will start count down automatically.
				</p>
				<p>
					3. Once your laundry is done, a 15 minutes (TBD) timer will start to count
					down until you take out your laundry and sign out on the
					terminal.
				</p>
				<p>
					4. After 15 minutes (TBD), anyone is allowed to take out
					the laundry. It should either be moved to a dryer and
					gets signed up accordingly or moved to the user's laundry
					bag.
				</p>
				<p>
					5, You are recommend to put your laundry bag in front of the
					dryer in case others want to remove your laundry.
				</p>
			</div>
			<div>
				<h3>Terminal User Guide</h3>
				<h4>
					There are four states of washers and dryers
				</h4>
				<ul>
					<li>
						<img src={State1} alt="state1"/> <strong>State 1: Empty</strong>{' '}
						<p>You can put in your clothes</p>
					</li>
					<li>
						<img src={State2} alt="state2"/> <strong>State 2: Running</strong>
						<p>
							You can check the user and the time remaining
						</p>
					</li>
					<li>
						<img src={State3} alt="state3"/> <strong>State 3: Waiting</strong>
						<p>
							The laundry is done. If the user can
							not take it out in 15 minutes, you can take it out{' '}
						</p>
					</li>
					<li>
						<img src={State4} alt="state4"/>{' '}
						<strong>State 4: Out of Order</strong>
						<p>The machine is not working</p>
					</li>
				</ul>
			</div>
			<div>
				<h3>How can this site make your life easier?</h3>
				<p>
					{' '}
					1. There will be  less laundry jam and make your laundry runs more flexible
				</p>
				<p>
					{' '}
					2. You can check this site to see if there is empty spots
					before you go downstairs{' '}
				</p>{' '}
				<p></p>
			</div>

			<h4>
				This site is created by Tony Dang'21 using Reactjs. Icons are made by
				Scarlett Hao'20.
				<br />
				Source code is public at{' '}
				<a href="https://github.com/Lempickax/Lempickax.github.io">
					Github
				</a>
			</h4>
            </body>
		</html>
	);
};

export default About;
