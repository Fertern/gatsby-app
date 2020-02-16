import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Menu } from "@material-ui/core"

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & a {
    margin-bottom: 20px;
    padding: 5px;
  }
`
export const NavigationItemMenu = ({ links, handleClose, anchorEl }) => (
  <Menu
    id="nav-item-menu"
    anchorEl={anchorEl}
    keepMounted
    open={!!anchorEl}
    onClose={handleClose}
  >
    <LinksWrapper>
      {links.map((link, index) => (
        <Link key={`${link.text}${index}`} to={link.path}>
          {link.text}
        </Link>
      ))}
    </LinksWrapper>
  </Menu>
)
