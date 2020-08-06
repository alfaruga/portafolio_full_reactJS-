import React from 'react';

const backdrop = (props) => {
    if (props.show) {
        return (<div>Backdrop</div>)
    } else { return null }
}

export default backdrop;