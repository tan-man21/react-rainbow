import React from 'react';

function ColorBlock(props){
    return (
        <div className='colorBlock' style={{backgroundColor: props.color}}>
            <p style={{margin: '0'}}>
                {props.color}
            </p>
        </div>
    )
}

export default ColorBlock

//note