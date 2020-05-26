import React, { Component } from 'react';
import Aux from '../../hoc/Auks/Auks';
import MachineOperator from '../../components/MachineOperator/MachineOperator';
import Navigationitems from '../../components/Navigation/Navigationitems/Navigationitems';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import About from './About';
import {
	Route,
	BrowserRouter as Router,
	withRouter,
	Switch,
} from 'react-router-dom';

class Layout extends Component {
	state = {
		showSideDrawer: false,
	};
	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};
	sideDrawerOpenHandler = () => {
		this.setState({ showSideDrawer: true });
	};

	render() {
		return (
			<Router>
				<Aux>
					<Toolbar clicked={this.sideDrawerOpenHandler} />
					<SideDrawer
						open={this.state.showSideDrawer}
						closed={this.sideDrawerClosedHandler}
					/>

					<Switch>
						<Route path="/about" component={About}/>
						<Route
							path="/"
							exact
							component={MachineOperator} />
					</Switch>
				</Aux>
			</Router>
		);
	}
}

export default Layout;
