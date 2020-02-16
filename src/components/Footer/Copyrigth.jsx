import React from "react"
import styled from "styled-components"
import { typography } from "../../utils/vars"

const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 35px 0px;
`
const CopyrightLinks = styled.a`
  font-size: 16px;
  color: #999;
  margin: 0 10px;
  letter-spacing: -0.015em;
  font-family: ${typography.mainFont};
`
const CopyrightText = styled.span`
  font-size: 16px;
  color: #999;
  margin: 0px 13px 0 0;
  letter-spacing: -0.015em;
  font-family: ${typography.mainFont};
`
export const Copyright = () => (
  <CopyrightWrapper>
    <CopyrightText>©2020 Created by Fertern.</CopyrightText>
    <span>
      <CopyrightLinks href="https://github.com/Fertern">GitHub</CopyrightLinks>
      <CopyrightLinks href="mailto:ferternever@gmail.com">
        ferternever@gmail.com
      </CopyrightLinks>
    </span>
  </CopyrightWrapper>
)
