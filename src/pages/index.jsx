import React from "react"
import withLayout from "../hoc/withLayout"
import Banner from "../components/Banner/Banner"

const index = () => {
  return (
    <div className="wrapper">
      <div
      //style={{ height: "250px" }}
      >
        <Banner
          semiLabel="Really big label"
          label="Some important text on banner"
          color="white"
        />
      </div>
    </div>
  )
}

export default withLayout(index)
