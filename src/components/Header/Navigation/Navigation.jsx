import React from "react"
import styled from "styled-components"
import { NavigationItem } from "./NavigationItem"

const Wrapper = styled.div`
  display: flex;
`

export const Navigation = ({ options }) => (
  <Wrapper>
    {options.map((option, index) => (
      <NavigationItem
        name={option.name}
        key={`${option.name}${index}`}
        links={option.links}
      />
    ))}
  </Wrapper>
)
