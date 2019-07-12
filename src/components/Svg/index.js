import React from 'react'
import './style.css'

class Svg extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="svg">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300">
                    <path className="diamondSt pathTulip" d="M400,280l-90-130l90-130l90,130L400,280z"/>
                </svg>
            </div>
        )
    }
}

export default Svg