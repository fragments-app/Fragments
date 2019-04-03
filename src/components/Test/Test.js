import React from 'react';
import './Test.scss';

const Test = (props) => {
    const { bgColor, name } = props;
    <div style={backgroundColor: bgColor }>
        name: {props.name}
        <div className="fromScsc">from Scsc</div>
    </div>
}

export default Test;