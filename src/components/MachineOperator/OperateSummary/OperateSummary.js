import Select from 'react-select';
import React from 'react';
import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Auks/Auks';
// import Checkbox from '../../UI/CheckBox/CheckBox'
import { Checkbox } from 'semantic-ui-react'

const users = [
	{ value: 'Tony', label: 'Tony' },
	{ value: 'Scarlett', label: 'Scarlett' },
	{ value: 'Sean', label: 'Sean' },
	{ value: 'Bill', label: 'Bill' },
	{ value: 'Minh', label: 'Minh' },
];

class OperateSummary extends React.Component {
	state = {
		
	};

	render() {
		const { props } = this;
		const selectedOption = props.selected;

		return (
			<div>
				{
					{
						1: (
							<Aux>
								<div>
									<h1>
										{props.mtype}
										{props.num}
									</h1>
									<p>This {props.mtype} is empty.</p>
									 <Checkbox  toggle
									 	label={props.mtype === "washer" ? "Extra Rinse" : "Heavy Load" }
										onChange={props.toggleChecked}
										 />
										 
								

									<div style={{ display: 'block' }}>
										Name
										<Select
											name="Name:"
											autoFocus={true}
											value={selectedOption}
											options={users}
											onChange={props.changed}
										/>
									</div>
								</div>

								<Button
									btnType="Danger"
									clicked={props.operateCancelled}
								>
									CANCEL
								</Button>
								<Button
									btnType="Success"
									clicked={props.operateContinued}
								>
									CONTINUE
								</Button>
							</Aux>
						),

						2: (
							<Aux>
								<div>
									<h1>
										{props.mtype}
										{props.num}
									</h1>
									<p><strong>{props.username}</strong> is using this {props.mtype}</p>
								</div>

								<Button
									btnType="Danger"
									clicked={props.operateCancelled}
								>
									OKAY
								</Button>
							</Aux>
						),
						3: (
							<Aux>
								<div>
									<h1>{props.mtype}</h1>
									<p>
										The laundry is waiting to be taken out by{' '}
										<strong>{props.username}</strong>
									</p>
								</div>
								<Button
									btnType="Danger"
									clicked={props.operateCancelled}
								>
									I will wait!
								</Button>
								<Button
									btnType="Success"
									clicked={props.operateContinued}
								>
									I will take it out!
								</Button>
							</Aux>
						),

						4: (
							<Aux>
								<div>
									<h1>{props.mtype}</h1>
									<p>
										<strong>{props.username}</strong>'s
										laundry is Done
									</p>
									<h3>Help take it out?</h3>
								</div>
								<Button
									btnType="Danger"
									clicked={props.operateCancelled}
								>
									Nope!
								</Button>
								<Button
									btnType="Success"
									clicked={props.operateContinued}
								>
									Sure!
								</Button>
							</Aux>
						),
						6: (
							<Aux>
								<div>
									<h1>Out of Order</h1>
								</div>
								<Button
									btnType="Danger"
									clicked={props.operateCancelled}
								>
									Okay
								</Button>
							</Aux>
						),
					}[props.phase]
				}
			</div>
		);
	}
}

export default OperateSummary;
