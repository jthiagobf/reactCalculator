import React from 'react'
import Button from '../components/Button.css'

export default props =>{   // add classes aos botões
    let classes ='button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return(
        <button
        onClick={e => props.click && props.click(props.label)}
        className={classes}>
            {props.label}
        </button>
    )
}

