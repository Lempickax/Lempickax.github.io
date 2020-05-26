import React, { Component } from 'react';
import classes from './Machine.module.css';
import Timer from '../../Timer/Timer';
import Modal from '../../UI/Modal/Modal';
import OperateSummary from '../../MachineOperator/OperateSummary/OperateSummary';
import Aux from '../../../hoc/Auks/Auks';
import Timer2 from '../../Timer/Timer2';

class Washer extends Component {
	state = {
		user: 'Tony·MotherFucker·Stark',
		phase: this.props.ooo ? 6 : 1, //1: empty, 2: running, 3: done -1: out of order
		timeLeft: 5,
		timeAwaiting: 5,
		machineType: this.props.mtype,
		operating: false,
		selectedUser: null,
		checked: false
	};
	toggleChecked = () =>{
		this.setState({checked : !this.state.checked})
	}

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
		if(!this.state.selectedUser){
			alert("Please select your name!");
			return;
		}
		let newUser = this.state.selectedUser.label;
		let setTime = this.props.mtype==="washer" ? 5:7; // default time for washer : default time for dryer
		let addTime = 0;
		
		if(this.state.checked){
			addTime= this.props.mtype==="washer" ? 2:0; // adding time for washer : adding time for dryer
		}
		if (this.state.phase === 1) {
			this.setState({ user: newUser,timeLeft: setTime+addTime });
		}

		if (this.state.phase === 3) {
			this.setState({ phase: 1, selectedUser: null });
		} else if (this.state.phase !== 6 && this.state.phase !== 2) {
			if (this.state.phase === 4) { 
				this.setState({ selectedUser: null });
			}
			this.setState({ phase: this.state.phase + 1 });
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
				phaseName =this.props.mtype==="washer" ?  classes.empty1 : classes.empty2;
				break;
			case 2:
				phaseName =this.props.mtype==="washer" ?  classes.running1 : classes.running2;
				break;
			case 3:
				phaseName =this.props.mtype==="washer" ?  classes.done1 : classes.done2;
				break;
			case 4:
				phaseName =this.props.mtype==="washer" ?  classes.done1 : classes.done2;
				break;
			case 6:
				phaseName =this.props.mtype==="washer" ?  classes.ooo1 : classes.ooo2;
				break;
			case 5:
				this.setState({ phase: 1 });
				break;
			default:
				phaseName = null;
		}
		phaseChange = <h2 className={classes.Number}><strong>{this.props.num}</strong></h2>;

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
						mtype={this.state.machineType}
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
