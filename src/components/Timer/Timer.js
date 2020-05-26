import React, { Component } from 'react';
import classes from './Timer.module.css';

export default class Timer extends Component {
	state = {
		minutes: 0,
		seconds: this.props.timeLeft,
	};

	componentDidMount() {
		this.myInterval = setInterval(() => {
			const { seconds, minutes } = this.state;

			if (seconds > 0) {
				this.setState(({ seconds }) => ({
					seconds: seconds - 1,
				}));
			}
			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(this.myInterval);
				} else {
					this.setState(({ minutes }) => ({
						minutes: minutes - 1,
						seconds: 59,
					}));
				}
			}
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.myInterval);
	}

	render() {
		const { minutes, seconds } = this.state;
		if (minutes === 0 && seconds === 0) {
			this.props.finished();
		}
		return (
			<div>
				{minutes === 0 && seconds === 0 ? (
					<h2>done</h2>
				) : (
					<h2 className={classes.Timer}>
						{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
					</h2>
				)}
			</div>
		);
	}
}
