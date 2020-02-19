import React from "react"
import withLayout from "../hoc/withLayout"
import Banner from "../components/Banner/Banner"
import CardPack from "../components/CardPack/CardPack"

const index = () => {
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
  ]

  return (
    <div className="wrapper">
      <Banner
        semiLabel="Really big label"
        label="Some important text on banner"
        color="white"
      />
      <CardPack cards={cards} />
      <CardPack cards={cards} />
      <CardPack cards={cards} />
      <Banner
        semiLabel="Really big label"
        label="Some important text on banner"
        color="white"
      />
    </div>
  )
}

export default withLayout(index)
