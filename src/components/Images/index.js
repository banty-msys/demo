import React from 'react'
import './style.css'

class Images extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            images: ["/images/1.jpg","/images/2.jpg","/images/3.jpg","/images/4.jpg","/images/5.jpg","/images/6.jpg","/images/7.jpg"]
        }
    }

    render(){
        const { images } = this.state
        return(
            <div className="images">
                { images.map((item, index) => <img key={index} src={item} />)}
            </div>
        )
    }
}

export default Images