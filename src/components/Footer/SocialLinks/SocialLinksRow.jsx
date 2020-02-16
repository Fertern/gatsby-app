import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { typography } from "../../../utils/vars"

const Label = styled.div`
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 25px;
  font-family: ${typography.mainFont};
  font-weight: bold;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & a {
    color: #dddddd;
    font-size: 16px;
    line-height: 30px;
    font-family: ${typography.mainFont};
  }
`

export const SocialLinksRow = ({ name, links }) => (
  <Wrapper>
    <Label>{name}</Label>
    {links.map((link, index) => (
      <Link key={`${link.text}${index}`} to={link.path}>
        {link.text}
      </Link>
    ))}
  </Wrapper>
)
