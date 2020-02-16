import React from "react"
import styled from "styled-components"
import { SocialLinksRow } from "./SocialLinksRow"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 35px 0;
  margin: 10px 0;
  border-top: 1px solid #393b3d;
  border-bottom: 1px solid #393b3d;
`

export const SocialLinks = ({ options }) => (
  <Wrapper>
    {options.map((option, index) => (
      <SocialLinksRow
        name={option.name}
        links={option.links}
        key={`${option.name}${index}`}
      />
    ))}
  </Wrapper>
)
