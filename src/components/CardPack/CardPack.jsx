import React from "react"
import { ContentCard } from "../ContentCard/ContentCard"

const CardPack = ({ cards }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {cards.map(card => (
        <ContentCard content={card} />
      ))}
    </div>
  )
}

export default CardPack
