import React from 'react'

class Position extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            windowTop: 0,
            sectionTop: 0,
            active: false
        }
    }

    componentDidMount(){
        this.scrollPosition()
        window.addEventListener('scroll', this.scrollPosition)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollPosition)
    }

    scrollPosition = () => {
        const windowTop = window.pageYOffset || this.containerDiv.scrollTop
        const sectionTop = this.containerDiv.offsetTop

        this.setState(() => ({
            windowTop,
            sectionTop,
            active: (windowTop > sectionTop)
        }))
    }

    render(){
        const { active } = this.state
        return(
            <div className={`div ${active ? 'active' : ''}`} ref={(div) => { this.containerDiv = div }}>
                1
            </div>
        )
    }
}

export default Position