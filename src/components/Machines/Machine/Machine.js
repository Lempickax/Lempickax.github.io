import React, { Component } from 'react';
import classes from './Machine.module.css';
import Timer from '../../Timer/Timer';
import Modal from '../../UI/Modal/Modal';
import OperateSummary from '../../MachineOperator/OperateSummary/OperateSummary';
import Aux from '../../../hoc/Auks/Auks';
import Timer2 from '../../Timer/Timer2';
import axios from '../../../axios-machines';

const finishedInfo = {
	Isrunning: false,
};
class Washer extends Component {
	state = {
		user: 'Tony·BigBoy·Dang',
		phase: null, //1: empty, 2: running, 3: done -1: out of order
		timeLeft: 0,
		timeAwaiting: 5,
		operating: false,
		selectedUser: null,
		checked: false,
		intervalId: null
	};
	

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }
	componentDidMount() {
		this.forceUpdate()
  	  setInterval(this.forceUpdate, 3000);
		axios
			.get('/Machines/' + this.props.mtype + this.props.num + '.json')
			.then((res) => {
				this.setState({ user: res.data.Username });
				if (!res.data.Isworking) {
					this.setState({ phase: 6 });
					return;
				}
				if (res.data.Isrunning) {
					this.setState({
						timeLeft: this.getTimeLeft(res.data.Endtime),
					});
					if (this.state.timeLeft > this.state.timeAwaiting) {
						this.setState({ phase: 2 });
						//phase 2
					} else if (
						this.state.timeLeft < this.state.timeAwaiting &&
						this.state.timeLeft > 0
					) {
						this.setState({ phase: 3 });
						//phase 3
					} else {
						this.setState({ phase: 4 });
						//phase 4
					}
				} else {
					this.setState({ phase: 1 });
				}
			});
	}
	getTimeLeft = (endTime) => {
		let currentTime = new Date();
		return (
			endTime -
			currentTime.getHours() * 3600 -
			currentTime.getMinutes() * 60 -
			currentTime.getSeconds()
		);
	};
	timeConvertHandler = (addTime) => {
		let currentTime = new Date();
		return (
			currentTime.getHours() * 3600 +
			currentTime.getMinutes() * 60 +
			currentTime.getSeconds() +
			addTime
		);
	};
	toggleChecked = () => {
		this.setState({ checked: !this.state.checked });
	};

	handleChange = (selectedOption) => {
		this.setState({ selectedUser: selectedOption });
	};

	operateHandler = () => {
		this.setState({ operating: true });
	};

	operateCancelHandler = () => {
		this.setState({ operating: false });
	};

	operateContinueHandler = () => {
		let newUser = null;
		if (this.state.selectedUser) {
			newUser = this.state.selectedUser.label;
		}
		let setTime = this.props.mtype === 'washer' ? 15 : 7; // default time for washer : default time for dryer
		let addTime = 0;

		if (this.state.checked) {
			addTime = this.props.mtype === 'washer' ? 2 : 0; // adding time for washer : adding time for dryer
		}

		switch (this.state.phase) {
			case 1:

				if (!this.state.selectedUser) {
					alert('Please select your name!');
					return;
				}
				axios
				.get('/Machines/' + this.props.mtype + this.props.num + '.json')
				.then((res) => {
					if(res.data.Isrunning)
					{alert("Sorry! Someone else took this one only a second before:(")
					this.setState({phase:2, timeLeft:this.getTimeLeft(res.data.Endtime)})}
					else{const info = {
						Username: newUser,
						Isrunning: true,
						Endtime: this.timeConvertHandler(
							setTime + addTime + this.state.timeAwaiting
						),
					};
				
					axios
						.patch(
							'/Machines/' +
								this.props.mtype +
								this.props.num +
								'.json',
							info
						)
						.then(this.setState({
							phase: this.state.phase + 1,
							user: newUser,
							timeLeft: setTime + addTime,
						}))
						.catch((error) => console.log(error));
					}
				});
				
				break;
			case 2:
				break;
			case 3:
				axios.patch(
					'/Machines/' + this.props.mtype + this.props.num + '.json',
					finishedInfo
				);
				this.setState({ phase: 1, selectedUser: null });

				break;
			case 4:
				axios.patch(
					'/Machines/' + this.props.mtype + this.props.num + '.json',
					finishedInfo
				);
				this.setState({ selectedUser: null });

				this.setState({ phase: this.state.phase + 1 });
				break;
			default:
				break;
		}
		this.setState({ operating: false });
	};

	runFinishedHandler = () => {
		this.setState({ phase: this.state.phase + 1 });
	};

	render() {

		
		let phaseName = null;
		let phaseChange = null;

		switch (this.state.phase) {
			case 1:
				phaseName =
					this.props.mtype === 'washer'
						? classes.empty1
						: classes.empty2;
				break;
			case 2:
				phaseName =
					this.props.mtype === 'washer'
						? classes.running1
						: classes.running2;
				break;
			case 3:
				phaseName =
					this.props.mtype === 'washer'
						? classes.done1
						: classes.done2;
				break;
			case 4:
				phaseName =
					this.props.mtype === 'washer'
						? classes.done1
						: classes.done2;
				break;
			case 6:
				phaseName =
					this.props.mtype === 'washer' ? classes.ooo1 : classes.ooo2;
				break;
			case 5:
				this.setState({ phase: 1 });
				break;
			default:
				phaseName = null;
		}
		phaseChange = (
			<h2 className={classes.Number}>
				<strong>{this.props.num}</strong>
			</h2>
		);

		if (this.state.phase === 2) {
			phaseChange = (
				<Timer
					timeLeft={this.state.timeLeft}
					finished={this.runFinishedHandler}
				/>
			);
		}
		if (this.state.phase === 3) {
			phaseChange = (
				<Timer2
					timeLeft={this.state.timeAwaiting}
					finished={this.runFinishedHandler}
				/>
			);
		}

		return (
			<Aux>
				<Modal
					show={this.state.operating}
					modalClosed={this.operateCancelHandler}
				>
					<OperateSummary
						phase={this.state.phase}
						toggleChecked={this.toggleChecked}
						mtype={this.props.mtype}
						changed={this.handleChange}
						username={this.state.user}
						operateCancelled={this.operateCancelHandler}
						operateContinued={this.operateContinueHandler}
						num={this.props.num}
						selected={this.state.selectedUser}
					/>
				</Modal>
				<button
					onClick={this.operateHandler}
					className={[classes.Washer, phaseName].join(' ')}
				>
					{phaseChange}
				</button>
			</Aux>
		);
	}
}

export default Washer;
