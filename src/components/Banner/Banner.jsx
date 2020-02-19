import React from "react"

import { BannerWrapper, SemiLabel, Label } from "./BannerParts"

const Banner = ({ semiLabel, label, color }) => (
  <BannerWrapper style={{ backgroundColor: color ? color : "transparent" }}>
    <SemiLabel>{semiLabel}</SemiLabel>
    <Label>{label}</Label>
  </BannerWrapper>
)

export default Banner
