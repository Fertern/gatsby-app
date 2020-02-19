import React from "react"
import { Link } from "gatsby"
import withLayout from "../hoc/withLayout"
import Banner from "../components/Banner/Banner"
import CardPack from "../components/CardPack/CardPack"

const sunset = () => {
  const cards = [
    {
      semiLabel: "Information",
      label: "Main label text",
      semiText: "important",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      buttonText: "learn more",
    },
    {
      semiLabel: "Information",
      label: "Main label text",
      semiText: "important",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      buttonText: "learn more",
    },
    {
      semiLabel: "Information",
      label: "Main label text",
      semiText: "important",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      buttonText: "learn more",
    },
    {
      semiLabel: "Information",
      label: "Main label text",
      semiText: "important",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      buttonText: "learn more",
    },
  ]
  return (
    <div>
      <Banner label={<Link to="/">Back to the main page</Link>} />
      <CardPack cards={cards} />
    </div>
  )
}

export default withLayout(sunset)
