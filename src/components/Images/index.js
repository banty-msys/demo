import React from 'react'
import './style.css'

class Images extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            images: ["/static/images/1.jpg","/static/images/2.jpg","/static/images/3.jpg","/static/images/4.jpg","/static/images/5.jpg","/static/images/6.jpg","/static/images/7.jpg"]
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