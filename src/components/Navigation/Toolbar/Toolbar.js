import React from 'react'

import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import Navigationitems from '../Navigationitems/Navigationitems'
import Button from '../../UI/Button/Button';


var date= new Date().getDay();

const toolbar = (props) =>(
    <header className={classes.Toolbar}>
        <Button clicked={props.clicked} >
            <div className={classes.divs}>
            <div></div>

            <div></div>
            
            <div></div>
            </div>

            </Button>

        <div className={classes.Bg}>
            {date%2===1 ? <h1>Boy's Day</h1>: <h1>Girl's Day</h1> }
            
        </div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly }>
            <Navigationitems />
        </nav>
    </header>
);

export default toolbar;