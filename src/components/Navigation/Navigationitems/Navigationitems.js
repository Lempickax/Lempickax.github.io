import React from 'react';

import classes from './Navigationitems.module.css';
import Navigationitem from './Navigationitem/Navigationitem';

// import Layout from '../../../containers/Layout/Layout'
// import About from '../../../containers/Layout/About'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const navigationitems = () => (

		<div>
			<ul className={classes.Navigationitems}>
				
				<Navigationitem link="/">
					Laundry
				</Navigationitem>
				<Navigationitem link="/about">About</Navigationitem>
			</ul>

            
		</div>
	
	
		



        
);

export default navigationitems;
