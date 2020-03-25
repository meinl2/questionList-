import React from "react";
import classes from "./MenuToggle.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const MenuToggle = props => {
    let icon;
    const cls = [classes.MenuToggle];
    if (props.isOpen) {
        icon = faTimes;
        cls.push(classes.open)
    } else {
        icon = faBars
    }

    return (
        <FontAwesomeIcon
            className={cls.join(' ')}
            onClick={props.onToggle}
            icon={icon}
        />

    )
};

export default MenuToggle