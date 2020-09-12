import React from 'react'

function Spinner(props) {
    return (
        <div className='ui active dimmer'>
        <div className='ui big text loader'>
            {props.message || 'Loading.....'}
        </div>
        </div>
    )
}

export default Spinner
