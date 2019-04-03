import React from 'react';
import './Test.scss';

const Test = (props) => {
    const { bgColor, name } = props;
    return (
        <div style={{ background: bgColor }}>
            name: {name}
            <div className="fromScsc">from Scsc</div>
        </div>
    )
}

export default Test;