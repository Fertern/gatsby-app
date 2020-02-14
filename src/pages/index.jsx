import React from "react"
import { Link } from "gatsby"
import withLayout from "../hoc/withLayout"

const index = () => {
  return (
    <div className="wrapper">
      <div>some page</div>
      <Link to="sunset">Go to sunset</Link>
      <Link to="test">Go to test</Link>
    </div>
  )
}

export default withLayout(index)
