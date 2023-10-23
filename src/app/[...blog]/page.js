import React from 'react'

function CatchAllRoutes({params}) {
    // console.log(params)
  return (
    <div>CatchAllRoutes {params.blog}</div>
  )
}

export default CatchAllRoutes

// It uses to catch all routes. You have to use spread operator on your file name. After, you can catch params details as an array.