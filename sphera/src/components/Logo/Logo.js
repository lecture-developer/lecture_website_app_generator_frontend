import React from 'react';
import classes from './Logo.module.css';

function Logo(props) {

    return (
        <div className={classes.root}>
            <a href='#'>
                <img src={props.img_src} alt={props.alt}></img>
            </a>
        </div>
    )
}

export default Logo;