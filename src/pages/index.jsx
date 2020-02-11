import React from "react"
import { Link } from "gatsby"

const app = () => {
  return (
    <div className="wrapper">
      <Link to="test">Go to test page</Link>
      <Link to='sunset'>See sunset</Link>
    </div>
  )
}

export default app
