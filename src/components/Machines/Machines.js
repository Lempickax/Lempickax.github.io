import React from 'react';
import Aux from '../../hoc/Auks/Auks';
import Machine from './Machine/Machine';
import classes from './Machines.module.css'

const washers = [
	{ num:1, id: 1, mtype: 'washer', time:5, ooo: true },
	{ num:2, id: 2, mtype: 'washer', time:5, ooo: false },
	{ num:3, id: 3, mtype: 'washer', time:5 },
	{ num:4, id: 4, mtype: 'washer', time:5 },
	{ num:5, id: 5, mtype: 'washer', time:5 }
];

const dryers = [
	{ num:1, id: 6,  mtype: 'dryer', time:7, ooo: true },
	{ num:2, id: 7,  mtype: 'dryer', time:7, ooo: false },
	{ num:3, id: 8,  mtype: 'dryer', time:7 },
	{ num:4, id: 9,  mtype: 'dryer', time:7 },
	{ num:5, id: 10, mtype: 'dryer', time:7 },
];


const Machines = () => {
	return (
		<Aux>
			<div className={classes.Washers}>
			{washers.map((machine) => (
				<Machine 
					
					key={machine.id}
					num={machine.num}
					ooo={machine.ooo}
					mtype={machine.mtype}
				/>
			))}
			</div>
			<div className={classes.Dryers}>
			{dryers.map((machine) => (
                <Machine 
					key={machine.id}
					num={machine.num}
					ooo={machine.ooo}
					mtype={machine.mtype} />
			))}
			</div>
		</Aux>
	);
};

export default Machines;
