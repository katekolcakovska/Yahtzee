import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
    static defaultProps = {
        numberWords: ["one", "two", "three", "four", "five", "six"],
        val: 1
    }
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.props.handleClick(this.props.idx); //so ova sea imame index
    }

    render() {
        const { numberWords, locked, val, disabled, rolling } = this.props;
        let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;
        if (locked) classes += "Die-locked"; //tuka nema space deka ne moze locked i rolling da bidat vo isto vreme
        if (rolling) classes += "Die-rolling";
        return (
            <i
                className={classes}

                // onClick={this.props.handleClick} - so ova ne zima nikade index
                onClick={this.handleClick} //so ova sea imame index
                disabled={disabled}
            />


        );
    }
}

export default Die;
