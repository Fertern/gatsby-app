import React from "react"
import styled from "styled-components"
import { NavigationItem } from "./NavigationItem"

export const Navigation = styled(({ options }) => (
  <div>
    {options.map(option => (
      <NavigationItem name={option.name} links={option.links} />
    ))}
  </div>
))`
  display: flex;
`