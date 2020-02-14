import React from "react"
import { Link } from "gatsby"

const sunset = () => {
  return (
    <div>
      <img
        //hardcode
        width="600"
        src="/someSunset.jpg"
        alt=""
      />
      <Link to="/">Back to main</Link>
    </div>
  )
}

export default sunset
