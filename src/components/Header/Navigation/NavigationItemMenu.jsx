import React from 'react';
import styled from "styled-components"
import { Link } from "gatsby"
import { Menu } from "@material-ui/core"

const LinksWrapper = styled.div`display: flex;
flex-direction: column;
& a{
  margin-bottom: 20px;
  padding: 5px;
}`
export const NavigationItemMenu = styled(({ links, handleClose, anchorEl }) => 
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={!!anchorEl}
      onClose={handleClose}
    >
      <LinksWrapper>

      
      {links.map(link => (
        <Link to={link.path}>{link.text}</Link>
      ))}
    </LinksWrapper>
    </Menu>
)``


