import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home/index'
import ActivePosition from './components/ActivePosition/index'
import Svg from './components/Svg/index'
import Images from './components/Images/index'
import ImageCropUpload from './components/ImageCropUpload/index'

const App = () => {
  return (
    <BrowserRouter>       
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/active-position" component={ActivePosition} exact={true} />
        <Route path="/svg" component={Svg} exact={true} />
        <Route path="/images" component={Images} exact={true} />
        <Route path="/image-crop" component={ImageCropUpload} exact={true} />
      </Switch>
    </BrowserRouter>
  )
}

export default App