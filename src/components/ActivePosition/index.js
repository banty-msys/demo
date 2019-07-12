import React from 'react'
import Position from './Position'
import './style.css'

class ActivePosition extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <Position />
                <Position />
                <Position />
                <Position />
                <Position />
                <Position />
                <Position />
            </React.Fragment>
        )
    }
}

export default ActivePosition