import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="home">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/active-position">Active Position</Link>
                        <Link to="/svg">SVG</Link>
                        <Link to="/images">Images</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Home