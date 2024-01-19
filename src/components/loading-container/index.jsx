import React from 'react'

//components
import Loader from '../custom/loader'

const LoadingContainer = () => {
  let container = {
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 99999999
  }
  return (
    <div style={container} >
      <Loader />
    </div>
  )
}

export default LoadingContainer
