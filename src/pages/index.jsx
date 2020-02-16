import React from "react"
import withLayout from "../hoc/withLayout"

const index = () => {
  return (
    <div className="wrapper">
      <div style={{ height: "250px" }}></div>
    </div>
  )
}

export default withLayout(index)
